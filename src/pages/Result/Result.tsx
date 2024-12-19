import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { getReportAPI, reportGenerationAPI } from 'api';
import { Button } from 'components/Button';
import { DetailedResult } from 'components/DetailedResult';
import { Preloader } from 'components/Preloader';
import { SuggestionsResult } from 'components/SuggestionsResult';
import { SummaryResult } from 'components/SummaryResult';
import { convertTimeToESTFormat } from 'helpers/convertTimeToESTFormat';
import { getTimeBySeconds } from 'helpers/getTimeBySeconds';
import { setScormData } from 'helpers/scormAPI';
import { Report } from 'interfaces/result';
import { theme } from 'theme';

import { Wrapper } from './style';

interface LocationState {
  timeInfo: {
    started: string;
    completed: string;
  };
  attemptId: string;
  reportId: string;
  attemptNumber: number;
}

export const Result: React.FC = () => {
  const [report, setReport] = useState<Report | null>(null);

  const location = useLocation<LocationState>();

  useEffect(() => {
    location?.state?.reportId
      ? getReportAPI(location?.state?.reportId).then((res) => setReport(res))
      : location?.state?.attemptId
      ? reportGenerationAPI({
          timeInfo: location.state.timeInfo,
          attemptId: location.state.attemptId
        }).then((res) => {
          setReport(res);
          setScormData({
            scoreRaw: String(
              (res.details.correctAnswers / res.details.questions) * 100
            ),
            scoreMax: '100',
            scoreMin: '0',
            scoreSuccessStatus:
              res.details.status === 'Success'
                ? 'passed'
                : res.details.status === 'Fail'
                ? 'failed'
                : 'unknown',
            completionStatus: 'completed'
          });
        })
      : history.push('/');

    // eslint-disable-next-line
  }, []);

  const history = useHistory();

  return (
    <>
      {report?.details ? (
        <Wrapper>
          <div className='result__header'>
            <span>Your assessment results</span>
            <Button
              text={!location?.state?.attemptId ? 'Back' : 'Finish'}
              transparent
              paddingX={9}
              paddingY={3}
              color={theme.palette['dark-indigo-medium']}
              onClick={() => history.push('/')}
            />
          </div>
          <div className='result__overall'>
            <span className='result__overall__title'>
              {`Mock attempt ${location?.state?.attemptNumber || 1} details`}
            </span>
            <div className='result__overall__info'>
              <div className='result__overall__info__block'>
                <span className='result__overall__info__block__title'>
                  Started:
                </span>
                <span className='result__overall__info__block__value'>
                  {convertTimeToESTFormat(report.details.timeInfo.startedAt)}
                </span>
              </div>
              <div className='result__overall__info__block'>
                <span className='result__overall__info__block__title'>
                  Completed:
                </span>
                <span className='result__overall__info__block__value'>
                  {convertTimeToESTFormat(report.details.timeInfo.completedAt)}
                </span>
              </div>
              <div className='result__overall__info__block'>
                <span className='result__overall__info__block__title'>
                  Total time:
                </span>
                <span className='result__overall__info__block__value'>
                  {getTimeBySeconds(report.details.timeInfo.totalTime)}
                </span>
              </div>
              <div className='result__overall__info__block'>
                <span className='result__overall__info__block__title'>
                  Time remaining:
                </span>
                <span className='result__overall__info__block__value'>
                  {getTimeBySeconds(report.details.timeInfo.remainingTime)}
                </span>
              </div>
            </div>
            <div className='result__overall__info'>
              <div className='result__overall__info__block'>
                <span className='result__overall__info__block__title'>
                  Questions Answered:
                </span>
                <span className='result__overall__info__block__value'>
                  {`${
                    report.details.questions - report.details.skippedQuestions
                  }/${report.details.questions}`}
                </span>
              </div>
              <div className='result__overall__info__block'>
                <span className='result__overall__info__block__title'>
                  Correct:
                </span>
                <span className='result__overall__info__block__value'>{`${report.details.correctAnswers}`}</span>
              </div>
              <div className='result__overall__info__block'>
                <span className='result__overall__info__block__title'>
                  Incorrect:
                </span>
                <span className='result__overall__info__block__value'>{`${report.details.incorrectAnswers}`}</span>
              </div>
              <div className='result__overall__info__block'>
                <span className='result__overall__info__block__title'>
                  Skipped:
                </span>
                <span className='result__overall__info__block__value'>{`${report.details.skippedQuestions}`}</span>
              </div>
            </div>
          </div>
          <SummaryResult topics={report.topicsStats} />
          <DetailedResult
            topics={report.topicsStats}
            subTopics={report.subTopicStats}
          />
          <SuggestionsResult
            topics={report.topicsStats}
            isPrevAttempt={!location?.state?.attemptId}
          />
        </Wrapper>
      ) : (
        <Preloader />
      )}
    </>
  );
};
