import React, { useMemo } from 'react';
import { Report } from 'interfaces/result';

import { Wrapper } from './style';

interface Props {
  topics: Report['topicsStats'];
  subTopics: Report['subTopicStats'];
}

export const DetailedResult: React.FC<Props> = ({ topics, subTopics }) => {
  const formattedSubTopics = useMemo(() => {
    const topicList = Object.entries(topics).map((topic) => {
      return { letter: topic[0], fullName: topic[1].fullName };
    });

    return topicList.map((topic) => {
      return {
        fullName: topic.fullName,
        subTopicsList: Object.entries(subTopics)
          .filter(
            (subTopic) =>
              subTopic[0].charAt(0).toLowerCase() === topic.letter.toLowerCase()
          )
          .map((subTopic) => {
            return { letter: subTopic[0], data: subTopic[1].details };
          })
      };
    });
  }, [topics, subTopics]);

  return (
    <Wrapper>
      <span className='detailed-result__title'>Detailed Results</span>
      <div className='detailed-result__data'>
        <div className='detailed-result__data__list'>
          {formattedSubTopics.map((subTopic, index) => (
            <div
              key={`DRST${index}`}
              className='detailed-result__data__list__sub-topic'
            >
              {subTopic.subTopicsList.reverse().map((subTopicData, index) => (
                <div
                  key={`${subTopicData.data.percent}${index}`}
                  className='detailed-result__data__list__sub-topic__details'
                >
                  <span>{subTopicData.letter}</span>
                  <div
                    className={`detailed-result__data__list__sub-topic__details__info ${
                      subTopicData.data.wasInTest
                        ? `passed_${subTopicData.data.isPassed}`
                        : 'not-applicable'
                    }`}
                  >
                    {subTopicData.data.wasInTest
                      ? `${subTopicData.data.percent}%`
                      : 'N/A'}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className='detailed-result__data__name'>
          {formattedSubTopics.map((subTopic, index) => (
            <span key={`DRname${index}`}>{subTopic.fullName}</span>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};
