import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

export default new Vuex.Store({
  state: {
    todos: [],
    snackbar: {
      show: false,
      text: ''
    }
  },
  
  getters: {
    todos: state => {
      return state.todos
    },
    todoById: state => todoId => {
      return state.todos.find(todo => todo.id === todoId)
    }
  },
  mutations: {
    GET_TODOS(state, todos) {
      state.todos = todos;
    },
    ADD_TODO(state,newTodo){
      state.todos.push(newTodo)
    },
    DELETE_TODO(state,todoId){
      state.todos = state.todos.filter(todo => todo.id !== todoId)
    },
    DONE_TASK(state,id){
      let task = state.tasks.filter(task => task.id === id)[0]
        task.done = !task.done;
    },
    UPDATE_TODO(state, updatedTodo){
      let index = state.todos.findIndex(todo => todo.id === updatedTodo.id);
      if (index !== -1) {
        Vue.set(state.todos, index, updatedTodo);
      }
    },
    showSnackbar(state,text){
      let timeout = 0
      if(state.snackbar.show){
        state.snackbar.show=false
        timeout = 100
      }
      setTimeout(()=>{
        state.snackbar.show = true
        state.snackbar.text = text
      },timeout)
     
    },
  },
  actions: {
    async fetchTasks({ commit }) {
      try {
        const response = await api.get('/todos')
        commit('GET_TODOS', response.data)
      } catch (error) {
        console.error('Error fetching tasks:', error)
      }
    },
    async addTask({ commit }, newTaskTitle) {
      try {
        const response = await api.post('/addTodo', { name: newTaskTitle, done: false })
        commit('ADD_TODO', response.data)
        commit('showSnackbar', 'Task added!')
      } catch (error) {
        console.error('Error adding task:', error)
      }
    },
    async deleteTask({ commit }, id) {
      try {
        await api.delete(`/todos/${id}`)
        commit('DELETE_TODO', id)
        commit('showSnackbar', 'Task deleted!')
      } catch (error) {
        console.error('Error deleting task:', error)
      }
    },
    async updateTask({ commit }, updatedTask) {
      try {
        const response = await api.put(`/todos/${updatedTask.id}`, updatedTask);
        commit('UPDATE_TODO', response.data);
        commit('showSnackbar', 'Task updated!');
      } catch (error) {
        console.error('Error updating task:', error);
      }
    },
    async toggleDoneTask({ commit }, id) {
      try {
        const task = this.state.tasks.find(task => task.id === id)
        if (task) {
          await api.put(`/todos/${id}`, { done: !task.done })
          commit('DONE_TASK', id)
        }
      } catch (error) {
        console.error('Error toggling task:', error)
      }
    }
  },
  modules: {}
})
