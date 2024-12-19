import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { getAttemptsAPI } from 'api';
import { Assessment } from 'components/Assessment';
import { Button } from 'components/Button';
import { Preloader } from 'components/Preloader';
import { Attempt } from 'interfaces/attempts';

import { Wrapper } from './style';

export const PrevAsessments: React.FC = () => {
  const history = useHistory();
  const [isPreloaderActive, setIsPreloaderActive] = useState<any>(true);
  const [attempts, setAttempts] = useState<Array<Attempt> | null>([]);

  const handeOpenAttempt = (state: {
    reportId: string;
    attemptNumber: number;
  }) => {
    history.push({
      pathname: '/result',
      state
    });
  };

  useEffect(() => {
    getAttemptsAPI()
      .then((res) => {
        sessionStorage.setItem('attempts', String(res.length + 1));
        setAttempts(res);
      })
      .then((res) => setIsPreloaderActive(false));
  }, []);

  return (
    <>
      {!isPreloaderActive && attempts !== null ? (
        <Wrapper>
          {attempts.length > 0 ? (
            <>
              <div className='welcome'>
                <p className='welcome__description'>
                  Previous assessments
                  <Button
                    text='Start exam'
                    onClick={() => {
                      history.push('quiz');
                    }}
                    className='start-btn'
                  />
                </p>
              </div>
              {attempts.map((attempt, id) => (
                <Assessment
                  key={attempt._id}
                  title={`Attempt ${id + 1}`}
                  date={attempt.createdAt}
                  percent={attempt.percent}
                  isPassed={attempt.isCompleted}
                  isCronCompleted={attempt.isCronCompleted}
                  onOpen={() =>
                    handeOpenAttempt({
                      reportId: attempt.reportId,
                      attemptNumber: id + 1
                    })
                  }
                  backgroundColor='rgba(167, 182, 232, 0.25)'
                />
              ))}
            </>
          ) : (
            <>
              <div className='welcome'>
                <p className='welcome__description'>
                  Previous assessments
                  <Button
                    text='Start exam'
                    onClick={() => {
                      history.push('quiz');
                    }}
                    className='start-btn'
                  />
                </p>
              </div>
              <div className='welcome' style={{ textAlign: 'center' }}>
                No assessments found
              </div>
            </>
          )}
        </Wrapper>
      ) : (
        <Preloader />
      )}
    </>
  );
};
