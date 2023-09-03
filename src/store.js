import { createStore } from "vuex";

export default createStore({
  state: {
    Tasks: [],
    TasksSuccess: [],
    nameTask: null,
    isUserLoggedIn: false,
    user: {}
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
      console.log(index)
      state.Tasks.splice(index, 1);
    },
    deletedTaskSuccess(state, index) {
      state.TasksSuccess.splice(index, 1);
    },
    updateTask(state, index){
      state.Tasks[index].state = !state.Tasks[index].state
      const task = state.Tasks[index]
      state.TasksSuccess.push(task)
      state.Tasks.splice(index, 1)
    },
    updateTasksSuccess(state, index) {
      state.TasksSuccess[index].state = false
      const taskSuccess = state.TasksSuccess[index]
      state.Tasks.push(taskSuccess)
      state.TasksSuccess.splice(index, 1)
    },
    isLogin(state, user){
      console.log(user)
      if(state.isUserLoggedIn === false) state.isUserLoggedIn = true
      state.user = user
      console.log(state.user)
    }    
  },
  actions: {
    addTaskAction(context) {
      context.commit('addTask');
    },
    deletedTaskAction(context, index) {
      context.commit('deletedTask', index);
    },
    deletedTaskSuccessAction(context) {
        context.commit('deletedTaskSuccess');
    },
    updateTaskAction(context, index) {
      context.commit('updateTask', index)
    },
    updateTasksSuccess(context, index) {
      context.commit('updateTasksSuccess', index)
    },
    isLogin(context, user) {
      context.commit('isLogin', user);
    }
  }
});
