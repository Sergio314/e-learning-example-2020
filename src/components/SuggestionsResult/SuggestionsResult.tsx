import React, { useMemo } from 'react';
import { useHistory } from 'react-router';
import { Button } from 'components/Button';
import { Report } from 'interfaces/result';

import { Wrapper } from './style';

interface Props {
  topics: Report['topicsStats'];
  isPrevAttempt: boolean;
}

export const SuggestionsResult: React.FC<Props> = ({
  topics,
  isPrevAttempt
}) => {
  const history = useHistory();

  const suggestions = useMemo(
    () =>
      Object.entries(topics)
        .map((topic) => topic[1])
        .sort(
          (a, b) => Number(b.details.isPassed) - Number(a.details.isPassed)
        ),
    [topics]
  );

  return (
    <Wrapper>
      <span className='suggestions-result__title'>
        Suggestions for Improvement
      </span>
      <span className='suggestions-result__message'>
        To improve your performance across all topics, take
        <a target='_blank' href='https://google.com' rel='noreferrer'>
          this course
        </a>
      </span>
      <div className='suggestions-result__list'>
        {suggestions.map((suggestion, index) => (
          <div
            key={`${suggestion.fullName}+${suggestion.details.percent + index}`}
            className='suggestions-result__list__item'
          >
            <span className='suggestions-result__list__item__name'>
              {suggestion.fullName}
            </span>
            <div className='suggestions-result__list__item__info'>
              <div
                className={`suggestions-result__list__item__info__details ${
                  suggestion.details.wasInTest
                    ? `passed_${suggestion.details.isPassed}`
                    : 'not-applicable'
                }`}
              >
                {suggestion.details.wasInTest
                  ? `${suggestion.details.isPassed ? 'Pass' : 'Fail'}`
                  : 'N/A'}
              </div>
              <span className='suggestions-result__list__item__info__message'>
                {suggestion.details.wasInTest ? (
                  suggestion.details.isPassed ? (
                    <span>
                      <b>Good job</b> — you’ve passed this topic!
                    </span>
                  ) : (
                    <span>
                      You need to improve your performance in this topic.
                    </span>
                  )
                ) : (
                  <span>Not applicable</span>
                )}
              </span>
            </div>
          </div>
        ))}
      </div>
      <Button
        text={isPrevAttempt ? 'Back' : 'Finish'}
        className='suggestions-result__finish'
        onClick={() => history.push('/')}
      />
    </Wrapper>
  );
};
