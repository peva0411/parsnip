import {uniqueId} from '../actions';


export default function tasks(state = {tasks:[]}, action){
  switch (action.type){
    case 'FETCH_TASKS_SUCCEEDED':{
      return {
        tasks : action.payload.tasks,
      };
    }
    case 'EDIT_TASK':{
      const {payload} = action;
      return {
        tasks: state.tasks.map(task => {
          if (task.id === payload.id){
            return Object.assign({}, task, payload.params);
          }
          return task;
        })
      };
    }
    case 'CREATE_TASK':{
      return  {tasks: state.tasks.concat(action.payload)};
    }
    case 'CREATE_TASK_SUCCEEDED':{
      return {
        tasks: state.tasks.concat(action.payload.task)
      };
    }
    default: {
      return state;
    }
  }
  
  return state;
}