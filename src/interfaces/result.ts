export interface Report {
  details: {
    questions: number;
    correctAnswers: number;
    incorrectAnswers: number;
    skippedQuestions: number;
    timeInfo: {
      startedAt: string;
      completedAt: string;
      totalTime: number;
      remainingTime: number;
    };
    percent: number;
    isPassed: boolean;
    status: string;
  };
  topicsStats: {
    [key: string]: {
      details: ResultStats;
      concepts: ResultStats;
      applications: ResultStats;
      fullName: string;
    };
  };
  subTopicStats: {
    [key: string]: {
      details: ResultStats;
    };
  };
  passThreshold: number;
}

interface ResultStats {
  correctAnswers: number;
  overallAnswers: number;
  percent: number;
  isPassed: boolean;
  wasInTest: boolean;
}
