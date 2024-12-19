export interface Attempt {
  _id: string;
  reportId: string;
  createdAt: string;
  isCompleted: boolean;
  percent: number;
  isCronCompleted: boolean;
}
