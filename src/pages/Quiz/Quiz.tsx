import React, { useEffect, useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';
import { quizQuestions } from 'api';
import { Button } from 'components/Button';
import { ButtonGroup } from 'components/ButtonGroup';
import { Input } from 'components/Input';
import { useFormik } from 'formik';
import { QuizQuestions } from 'interfaces/quizQuestions';
import { theme } from 'theme';
import { lazy, object, string } from 'yup';

import { Wrapper } from './style';
const basicQuestion = [
  { type: 'yes', label: 'lorem ipsum dolor sir amet' },
  { type: 'no', label: 'lorem ipsum dolor sir amet' }
];

type Answers = {
  [questonId: string]: QuizQuestions['selected'];
};

type FormData = {
  initial: string;
  answers: Answers;
};

const initialSchema = object({
  initial: object({
    value: string().required('Please select an option')
  }).nullable()
});

export const Quiz: React.FC = () => {
  const history = useHistory();
  const [questions, setQuestions] = useState<Array<QuizQuestions>>([]);

  useEffect(() => {
    quizQuestions()
      .then((questions) => {
        setQuestions(questions);
      })
      .catch((error) => console.error(error));
  }, []);

  const qSchema = useMemo(
    () =>
      questions.reduce((acc, field) => {
        if (field.required)
          return {
            answers: object({
              ...acc,
              [field.questionId]: object({
                answerId: string()
                  .required(
                    field.questionType === 'input'
                      ? 'This field is required'
                      : 'Please select an option'
                  )
                  .nullable()
              })
            })
          };
        return acc;
      }, {}),
    [questions]
  );

  const initialV = useMemo(
    () =>
      questions.reduce((acc, { questionId, selected }) => {
        return {
          ...acc,
          [questionId]: {
            answerId: selected.answerId,
            value: selected?.value
          }
        };
      }, {} as Answers),
    [questions]
  );

  const {
    values,
    setFieldValue,
    errors,
    handleSubmit,
    submitCount,
    handleBlur
  } = useFormik<FormData>({
    initialValues: { initial: 'yes', answers: { ...initialV } },
    validationSchema: () =>
      lazy((values) => {
        return values.initial === 'yes'
          ? object().shape({
              ...qSchema
            })
          : initialSchema;
      }),
    enableReinitialize: true,
    validateOnChange: false,
    onSubmit: () => {}
  });

  return (
    <>
      <Wrapper onSubmit={handleSubmit} id='quiz'>
        <article>
          <h1>Lorem ipsum dolor sit amet consectetur</h1>
          <h3>Lorem ipsum dolor sit amet consectetur</h3>

          <ButtonGroup
            title='Lorem ipsum dolor sit amet consectetur'
            onChange={(type) => setFieldValue('initial', type)}
            value={values.initial}
          >
            {basicQuestion.map(({ type, label }, index) => {
              return (
                <ButtonGroup.Option
                  value={type}
                  key={`${type}${label}${index}`}
                >
                  {label}
                </ButtonGroup.Option>
              );
            })}
          </ButtonGroup>

          {values.initial === 'yes' && (
            <section style={{ display: 'flex', flexDirection: 'column' }}>
              {!!questions.length ? (
                questions?.map(
                  ({
                    title,
                    options,
                    questionType,
                    questionId,
                    type = 'text',
                    description,
                    multiple,
                    required
                  }) => {
                    const err = errors?.answers?.[questionId] as any;

                    if (
                      questionType === 'radio' ||
                      questionType === 'checkbox'
                    ) {
                      return (
                        <ButtonGroup
                          title={
                            required ? (
                              <>
                                {title}
                                <span className='required'>*</span>
                              </>
                            ) : (
                              title
                            )
                          }
                          description={description}
                          key={questionId}
                          multiple={multiple}
                          value={values?.answers?.[questionId]?.answerId}
                          error={
                            errors.answers?.[questionId] &&
                            submitCount &&
                            err?.answerId
                          }
                          onChange={(answerId) => {
                            setFieldValue(`answers.${questionId}`, {
                              answerId
                            });
                          }}
                        >
                          {options &&
                            options?.map(({ answerId, value }) => {
                              return (
                                <ButtonGroup.Option
                                  key={answerId}
                                  value={answerId}
                                  type={questionType}
                                  onBlur={handleBlur}
                                  name={answerId}
                                >
                                  {value === 'Other' ? (
                                    <div
                                      style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        width: '100%'
                                      }}
                                    >
                                      <span
                                        style={{
                                          marginRight: '20px'
                                        }}
                                        className='otherLabel'
                                        onClick={() => {
                                          setTimeout(() =>
                                            document
                                              .getElementById(
                                                `${'Other' + answerId}`
                                              )
                                              ?.focus()
                                          );
                                        }}
                                      >
                                        Other:
                                      </span>
                                      <Input
                                        onBlur={handleBlur}
                                        getValue={(value) => {
                                          const answers = new Set(
                                            new Array<any>(
                                              values?.answers?.[
                                                questionId
                                              ].answerId
                                            )
                                              .concat(answerId)
                                              .flat(Infinity)
                                              .filter(Boolean)
                                          );
                                          setFieldValue(
                                            `answers.${questionId}`,
                                            {
                                              answerId: multiple
                                                ? Array.from(answers)
                                                : answerId,
                                              value: value
                                            }
                                          );
                                        }}
                                        defaultValue={
                                          values?.answers?.[questionId]?.value
                                        }
                                        type='text'
                                        placeholder='Your answer'
                                        className='fullWidth'
                                        style={{
                                          marginTop: '0px',
                                          width: '100%'
                                        }}
                                        id={`${'Other' + answerId}`}
                                      />
                                    </div>
                                  ) : (
                                    value
                                  )}
                                </ButtonGroup.Option>
                              );
                            })}
                        </ButtonGroup>
                      );
                    }

                    if (questionType === 'input') {
                      return (
                        <div className='report' key={questionId}>
                          {title && (
                            <p style={{ marginBottom: '15px' }}>{title}</p>
                          )}
                          <Input
                            onBlur={handleBlur}
                            placeholder='Your answer'
                            type={type}
                            name={questionId}
                            getValue={(value) => {
                              setFieldValue(
                                `answers.${questionId}.value`,
                                value
                              );
                            }}
                            defaultValue={values?.answers?.[questionId]?.value}
                          />
                          {errors?.answers?.questionId && submitCount && (
                            <p className='error'>{err?.answerId}</p>
                          )}
                        </div>
                      );
                    }
                    return null;
                  }
                )
              ) : (
                <CircularProgress style={{ margin: '0 auto' }} />
              )}
            </section>
          )}
        </article>
        <div className='actions'>
          <Button
            text={values.initial === 'yes' ? 'Submit' : 'Start mock exam'}
            tabIndex={3}
            color={!errors ? theme.palette['light-lavender'] : undefined}
            className='action'
            type='submit'
          />
          <Button
            text='Cancel'
            transparent
            onClick={() => {
              history.push('home');
            }}
            tabIndex={4}
          />
        </div>
      </Wrapper>
    </>
  );
};
