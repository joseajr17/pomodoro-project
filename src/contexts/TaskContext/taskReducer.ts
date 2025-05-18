import { getNextCycle } from '@/utils/getNextCycle';
import type { TaskStateModel } from '../../models/TaskStateModel';
import type { TaskActionModel } from './taskActions';
import { TaskActionTypes } from './taskActions';
import { secondsToMinutes } from '@/utils/secondsToMinutes';
import { initialTaskState } from './initialTaskState';

export function taskReducer(state: TaskStateModel, action: TaskActionModel): TaskStateModel {
  switch (action.type) {
    case TaskActionTypes.START_TASK: {
      const newTask = action.payload;

      return {
        ...state,
        activeTask: newTask,
        currentCycle: getNextCycle(state.currentCycle),
        secondsRemaining: newTask.duration * 60,
        formattedSecondsRemaining: secondsToMinutes(newTask.duration * 60),
        tasks: [...state.tasks, newTask],
      };
    }

    case TaskActionTypes.INTERRUPT_TASK: {
      return {
        ...state,
        activeTask: null,
        secondsRemaining: 0,
        formattedSecondsRemaining: '00:00',
        tasks: state.tasks.map(task => {
          if (state.activeTask && state.activeTask.id === task.id) {
            return { ...task, interruptDate: Date.now() };
          }
          return task;
        }),
      };
      return state;
    }

    case TaskActionTypes.RESET_STATE: {
      return {...initialTaskState};
    }

    case TaskActionTypes.COUNT_DOWN: {
      return {
        ...state,
        secondsRemaining: action.payload.secondsRemaining,
        formattedSecondsRemaining: secondsToMinutes(action.payload.secondsRemaining),
      };
    }

    case TaskActionTypes.COMPLETE_TASK: {
      return {
        ...state,
        activeTask: null,
        secondsRemaining: 0,
        formattedSecondsRemaining: '00:00',
        tasks: state.tasks.map(task => {
          if (state.activeTask && state.activeTask.id === task.id) {
            return { ...task, completeDate: Date.now() };
          }
          return task;
        }),
      };
      return state;
    }
  }
}