import React, { useMemo, useState } from 'react';
import { Button } from 'components/Button';
import { Report } from 'interfaces/result';

import { Wrapper } from './style';

interface Props {
  topics: Report['topicsStats'];
}

export const SummaryResult: React.FC<Props> = ({ topics }) => {
  const [filter, setFilter] = useState<'topic' | 'score'>('topic');

  const formattedTopics = useMemo(() => {
    const topicList = Object.entries(topics).map((topic) => topic[1]);

    if (filter === 'score')
      return topicList.sort(
        (a, b) =>
          (b.concepts.wasInTest ? b.concepts.percent : -1) -
          (a.concepts.wasInTest ? a.concepts.percent : -1)
      );

    return topicList;
  }, [filter, topics]);

  return (
    <Wrapper>
      <div className='summary-result__header'>
        <span className='summary-result__header__title'>Summary Results</span>
        <div className='summary-result__header__filter'>
          <span>Sorted by:</span>
          <div className='summary-result__header__filter__switch'>
            <Button
              text='Topic'
              paddingX={9}
              paddingY={3}
              transparent={filter === 'score'}
              onClick={() => setFilter('topic')}
            />
            <Button
              text='Score'
              paddingX={9}
              paddingY={3}
              transparent={filter === 'topic'}
              onClick={() => setFilter('score')}
            />
          </div>
        </div>
      </div>
      <div className='summary-result__description'>
        <span>Topics</span>
        <div>
          <span className='summary-result__description__concepts'>
            Concepts
          </span>
          <span>Applications</span>
        </div>
      </div>
      <div className='summary-result__info'>
        {formattedTopics.map((topic, index) => {
          return (
            <div
              className='summary-result__info__block'
              key={`Summary${index}}`}
            >
              <span className='summary-result__info__block__title'>
                {topic.fullName}
              </span>

              <div className='summary-result__info__block__result'>
                <div className='summary-result__info__block__result__topic'>
                  <span className='summary-result__info__block__result__topic__title'>
                    Concepts
                  </span>
                  <div
                    className={`summary-result__info__block__result__topic__details ${
                      topic.concepts.wasInTest
                        ? `passed_${topic.concepts.isPassed}`
                        : 'not-applicable'
                    }`}
                  >
                    {topic.concepts.wasInTest
                      ? `${topic.concepts.percent}%`
                      : 'N/A'}
                  </div>
                </div>
                <div className='summary-result__info__block__result__topic'>
                  <span className='summary-result__info__block__result__topic__title'>
                    Applications
                  </span>
                  <div
                    className={`summary-result__info__block__result__topic__details ${
                      topic.applications.wasInTest
                        ? `passed_${topic.applications.isPassed}`
                        : 'not-applicable'
                    }`}
                  >
                    {topic.applications.wasInTest
                      ? `${topic.applications.percent}%`
                      : 'N/A'}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};
