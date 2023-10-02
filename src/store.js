import { createStore } from 'vuex'
import { 
  addtask,   
  deletedtask, 
  deletedtasksuccess, 
  renametask, 
  updatetask, 
  updatetasksuccess   
} from './helpers/storeHelpersTasks'
import { userregister, islogin, logout, changePasswordUser, changenameuser } from './helpers/storeHelpersUsers'

export default createStore({
  state: {
    Tasks: [],
    TasksSuccess: [],
    taskDeleted: null,
    nameTask: null,
    nameTaskNew: null,
    isUserLoggedIn: false,
    userData: null,
    newUser: null,
    token: ''
  },
  mutations: {
    addTask(state) {
        addtask(state)
    },
    userRegister(state){
      userregister(state)
    },
    changeNameUser(state, user){
      changenameuser(state, user)
    },
    changePassword(state, user){
      changePasswordUser(state, user)
    },
    deletedTask(state, index) {
      deletedtask(state, index)
    },
    deletedTaskSuccess(state, index) {
      deletedtasksuccess(state, index)
    },
    reNameTask (state, index){
      renametask(state, index) 
    },
    updateTask(state, index){
      updatetask(state, index)
    },
    updateTasksSuccess(state, index) {
      updatetasksuccess(state, index)
    },
    isLogin(state, user){
      islogin(state, user)
    },
    isLogout(state){
      logout(state)
    }
    
  },
  actions: {
    addTaskAction(context) {
      context.commit('addTask');
    },
    deletedTaskAction(context, index) {
      context.commit('deletedTask', index);
    },
    deletedTaskSuccessAction(context, index) {
        context.commit('deletedTaskSuccess', index);
    },
    reNameTask(context, index) {
      context.commit('reNameTask', index)
    },
    updateTaskAction(context, index) {
      context.commit('updateTask', index)
    },
    updateTasksSuccess(context, index) {
      context.commit('updateTasksSuccess', index)
    },
    isLogin(context, user) {
      context.commit('isLogin', user);
    },
    isLogout(context) {
      context.commit('isLogout')
    },
    userRegister(context) {
      context.commit('userRegister')
    },
    changeNameUser(context, user){
      context.commit('changeNameUser', user)
    },
    changePassword(context, user) {
      context.commit('changePassword', user)
    }
  }
});
