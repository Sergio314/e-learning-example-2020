import React, {
  DetailedHTMLProps,
  InputHTMLAttributes,
  useRef,
  useState
} from 'react';
import { ReactComponent as CloseIcon } from 'assets/close.svg';

import { Wrapper } from './style';

interface Props {
  label?: string;
  getValue: (
    value: string | number,
    hasError?: boolean,
    event?: React.ChangeEvent<HTMLInputElement>
  ) => void;
  defaultValue?: string | number;
  maxNumber?: number;
  className?: string;
  tabIndex?: number;
}

export const Input: React.FC<
  Props &
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
> = ({
  label,
  getValue,
  defaultValue,
  type = 'number',
  maxNumber,
  className,
  tabIndex,
  style,
  required,
  pattern,
  ...props
}) => {
  const [value, setValue] = useState<string | number>(defaultValue || '');
  const [focus, setFocus] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const clearRef = useRef<HTMLButtonElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const updatedValue =
      type === 'number'
        ? event.target.value.charAt(0) !== '0' || event.target.value === ''
          ? event.target.value
          : value
        : event.target.value;

    if (maxNumber) setHasError(Number(updatedValue) > maxNumber);

    setValue(updatedValue);
    getValue(
      updatedValue,
      maxNumber ? Number(updatedValue) > maxNumber : undefined,
      event
    );
  };

  return (
    <Wrapper className={className || ''}>
      <div className='input' style={{ ...style }}>
        <input
          type={type}
          required={required}
          value={value}
          pattern={pattern}
          onChange={(event) => handleChange(event)}
          onFocus={() => setFocus(true)}
          onBlur={(event) => {
            if (clearRef.current?.contains(event.relatedTarget)) {
              event.target.focus();
            } else {
              setFocus(false);
            }
          }}
          className={focus ? 'focus' : ''}
          tabIndex={tabIndex}
          data-testid='input'
          {...props}
          style={{ marginTop: label ? '24px' : '0px' }}
        />
        <label>{label}</label>
        <span />
        <button
          onClick={() => {
            setValue('');
            getValue('');
          }}
          ref={clearRef}
          data-testid='clear-btn'
          type='button'
        >
          <CloseIcon />
        </button>
      </div>
      {hasError && <p>The value must be equal or less than {maxNumber}</p>}
    </Wrapper>
  );
};
