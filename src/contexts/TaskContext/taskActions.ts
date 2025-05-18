import type { TaskModel } from '../../models/TaskModel';

export const TaskActionTypes = {
  START_TASK: 'START_TASK',
  INTERRUPT_TASK: 'INTERRUPT_TASK',
  COUNT_DOWN: 'COUNT_DOWN',
  COMPLETE_TASK: 'COMPLETE_TASK',
  RESET_STATE: 'RESET_STATE',
} as const;

export type TaskActionTypes = typeof TaskActionTypes[keyof typeof TaskActionTypes];

export type TaskActions =
  | {
    type: typeof TaskActionTypes.START_TASK;
    payload: TaskModel;
  }
  | {
    type: typeof TaskActionTypes.COUNT_DOWN;
    payload: { secondsRemaining: number };
  }
  | {
    type: typeof TaskActionTypes.INTERRUPT_TASK;
  }
  | {
    type: typeof TaskActionTypes.COMPLETE_TASK;
  }
  | {
    type: typeof TaskActionTypes.RESET_STATE;
  };

export type TaskActionModel = TaskActions;
