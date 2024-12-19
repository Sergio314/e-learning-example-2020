import React, { useEffect, useState } from 'react';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import { Layout } from 'components/Layout';
import { Preloader } from 'components/Preloader';
import { getScormLearner } from 'helpers/scormAPI';
import { Home } from 'pages/Home';
import { PrevAsessments } from 'pages/PrevAsessments';
import { Quiz } from 'pages/Quiz';
import { Result } from 'pages/Result';

import { axiosInstance, getUserAPI, loginAPI } from './api';

export const App: React.FC = () => {
  const [isDataComplete, setIsDataComplete] = useState(false);

  useEffect(() => {
    loginAPI(getScormLearner())
      .then(
        (res) =>
          (axiosInstance.defaults.headers.common.Authorization = `Bearer ${res}`)
      )
      .then(() =>
        getUserAPI().then((res) => {
          localStorage.setItem('fullName', `${res.firstName} ${res.lastName}`);
          sessionStorage.setItem('role', res.type);
          setIsDataComplete(true);
        })
      )
      .catch((error) => console.error(error));
  }, []);
  return (
    <>
      {isDataComplete ? (
        <BrowserRouter>
          <Switch>
            <Layout exact path='/' component={Home} />
            <Layout exact path='/quiz' component={Quiz} />
            <Layout exact path='/result' component={Result} />
            <Layout
              exact
              path='/mockexam'
              isHomepage={false}
              component={PrevAsessments}
            />
            <Redirect to='/' />
          </Switch>
        </BrowserRouter>
      ) : (
        <Preloader />
      )}
    </>
  );
};
