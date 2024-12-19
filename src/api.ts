import axios from 'axios';
import { Attempt } from 'interfaces/attempts';
import { Organization } from 'interfaces/organizations';
import { Questions } from 'interfaces/questions';
import { QuizQuestions } from 'interfaces/quizQuestions';
import { Report } from 'interfaces/result';

export const defaultOptions = {
  baseURL: 'localhost:3000/',
  headers: {
    Accept: 'application/json'
  }
};

export const axiosInstance = axios.create(defaultOptions);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error?.response?.status === 401 || error?.response?.status === 403) {
      document.body.innerHTML = 'You don’t have permission to access this page';
    }
    return error.response;
  }
);

export const loginAPI = (learnerId: string): Promise<string> =>
  new Promise((resolve) => setTimeout(resolve, 500, 'some-access-token'));

export const getUserAPI = (): Promise<{
  firstName: string;
  lastName: string;
  type: string;
}> =>
  new Promise((resolve) =>
    setTimeout(resolve, 500, {
      firstName: 'Some',
      lastName: 'User'
    })
  );

export const getAttemptsAPI = (): Promise<Array<Attempt>> =>
  new Promise((resolve) =>
    setTimeout(resolve, 1000, require('./mocks/attempts.json'))
  );

export const startExamAPI = (request: {
  overallQuestionsNumber: number;
  testTime: number;
}): Promise<Questions> =>
  new Promise((resolve) =>
    setTimeout(resolve, 1000, require('./mocks/questions.json'))
  );

export const sendFeedbackAPI = (request: {
  questionId: string;
  feedback: string;
}): Promise<boolean> =>
  new Promise((resolve) => setTimeout(resolve, 1000, true));

export const reportGenerationAPI = (request: {
  timeInfo: {
    started: string;
    completed: string;
  };
  attemptId: string;
}): Promise<Report> =>
  new Promise((resolve) =>
    setTimeout(resolve, 2000, require('./mocks/result.json'))
  );

export const getReportAPI = (id: string): Promise<Report> =>
  new Promise((resolve) =>
    setTimeout(resolve, 2000, require('./mocks/result.json'))
  );

export const organizationList = (): Promise<Array<Organization>> =>
  new Promise((resolve) =>
    setTimeout(resolve, 2000, require('./mocks/result.json'))
  );

export const quizQuestions = (): Promise<Array<QuizQuestions>> =>
  new Promise((resolve) =>
    setTimeout(resolve, 2000, require('./mocks/quizQuestions.json'))
  );
