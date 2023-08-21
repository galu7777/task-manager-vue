import { createStore } from "vuex";

export default createStore({
  state: {
    Tasks: [],
    TasksSuccess: [],
    nameTask: null
  },
  mutations: {
    addTask(state) {
      const task = {
        name: state.nameTask,
        state: false
      };
      state.Tasks.push(task);
      state.nameTask = '';
    },
    deletedTask(state, index) {
      state.Tasks.splice(index, 1);
    },
    deletedTaskSuccess(state, index) {
        state.TasksSuccess.splice(index, 1);
    }
    
  },
  actions: {
    addTaskAction(context) {
      context.commit('addTask');
    },
    deletedTaskAction(context) {
      context.commit('deletedTask');
    },
    deletedTaskSuccessAction(context) {
        context.commit('deletedTaskSuccess');
    }
  }
});
