export type QuizQuestions = {
  questionId: string;
  title?: string;
  description?: string;
  questionType: 'input' | 'radio' | 'checkbox';
  options: Array<{ answerId: string | undefined; value: string | undefined }>;
  required: boolean;
  type?: 'number' | 'text';
  selected: {
    answerId?: string | string[] | undefined;
    value?: string | number | undefined;
  };
  multiple: boolean;

  organizationOptionality?: Array<string>;
  order?: number;
  createdAt?: string;
  updatedAt?: string;
  isArchived?: boolean;
};
