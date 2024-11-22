export interface Task {
  id: number;
  note: string;
  completed: boolean;
}

export interface ItemsProps extends Task {
  deletdata: (data: Task) => void;
  changeCompleted: (data: Task) => void;
}

export interface ProgressBarProps {
  percentage: number;
  progressColor: string;
}
