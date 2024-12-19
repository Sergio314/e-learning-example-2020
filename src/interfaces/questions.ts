export interface Questions {
  attemptId: string;
  randomQuestions: Array<{
    id: string;
    number: number;
    questionText: {
      html: string;
    };
    answers: Array<{
      answerText: string;
      multipleChoiceAnswer: boolean;
      id: string;
    }>;
    result: {
      answer: string;
      isFlagged: boolean;
      time: number;
    };
  }>;
}
