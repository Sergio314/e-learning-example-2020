import {
  Children,
  cloneElement,
  ComponentType,
  DetailedHTMLProps,
  InputHTMLAttributes,
  memo,
  PropsWithChildren,
  ReactElement,
  useCallback,
  useMemo
} from 'react';
import { ReactComponent as CheckboxCheckedIcon } from 'assets/checkbox-checked.svg';
import { ReactComponent as CheckboxUncheckedIcon } from 'assets/checkbox-unchecked.svg';
import { ReactComponent as RadioCheckedIcon } from 'assets/radio-checked.svg';
import { ReactComponent as RadioUncheckedIcon } from 'assets/radio-unchecked.svg';

import { Wrapper } from './style';

type RadioButtonProps = {
  type?: 'radio' | 'checkbox';
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export const RadioButton = memo<RadioButtonProps>(
  ({
    className,
    disabled = false,
    checked,
    children,
    type = 'radio',
    onChange,
    value,
    style,
    ...props
  }) => {
    return (
      <label
        className='option'
        style={{
          margin: '15px 0 0',
          ...style
        }}
      >
        <div className='option__icon'>
          {type === 'radio' &&
            (checked ? <RadioCheckedIcon /> : <RadioUncheckedIcon />)}
          {type === 'checkbox' &&
            (checked ? <CheckboxCheckedIcon /> : <CheckboxUncheckedIcon />)}
        </div>

        <input
          {...props}
          onChange={() => {
            if (disabled) return;
            onChange?.(value as any);
          }}
          checked={checked}
          type={type}
          style={{ display: 'none' }}
        />

        <section style={{ width: '100%' }}>{children}</section>
      </label>
    );
  }
);

RadioButton.displayName = 'RadioButton';

type Props = {
  title?: string | ComponentType | ReactElement;
  value?: string | Array<string>;
  description?: string | ComponentType | ReactElement;
  error?: string;
  multiple?: boolean;
  onChange?: (value: any) => void;
};

export const ButtonGroup = Object.assign(
  memo<PropsWithChildren<Props>>(
    ({
      title,
      children,
      value: defaultValue,
      description,
      error,
      multiple,
      onChange
    }) => {
      const value = useMemo(
        () => new Set(new Array<any>().concat(defaultValue)),
        [defaultValue]
      );
      const onOptionClick = useCallback(
        (selectedValue) => {
          if (multiple) {
            value.has(selectedValue)
              ? value.delete(selectedValue)
              : value.add(selectedValue);
          }

          onChange?.(
            multiple ? Array.from(value).filter(Boolean) : selectedValue
          );
        },
        [onChange, value, multiple]
      );

      const options = useMemo(
        () =>
          Children.map(children, (child: any) => {
            const selected = new Set(
              Array.isArray(defaultValue) ? value : [value]
            );

            return (
              child &&
              cloneElement(child, {
                checked: multiple
                  ? selected.has(child.props.value)
                  : child.props.value === defaultValue,
                label: child.props.children,
                onSelect: (value) => {
                  child.props.onSelect?.(value);
                },
                onChange: (value: any) => {
                  return onOptionClick(value);
                }
              })
            );
          }),
        [children, defaultValue, value, multiple, onOptionClick]
      );

      return (
        <Wrapper>
          {title && <h2 className='title'>{title}</h2>}
          {description && <h3 className='description'>{description}</h3>}
          <div
            style={{
              display: 'inline-flex',
              flexDirection: 'column',
              alignItems: 'start',
              width: '100%'
            }}
          >
            {options}
          </div>
          {error && <p className='error'>{error}</p>}
        </Wrapper>
      );
    }
  ),
  { Option: RadioButton }
);
