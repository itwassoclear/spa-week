import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: JSON.parse(localStorage.getItem('tasks') || '[]')
  },
  mutations: {
    createTask(state, task) {
      state.tasks.push(task)
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    deleteTask(state, task) {
      let id = task.id
      state.tasks = state.tasks.filter((task) => task.id != id)
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    }
  },
  actions: {
    createTask({ commit }, task) {
      commit('createTask', task)
    },
    deleteTask({ commit }, task) {
      commit('deleteTask', task)
    }
  },
  getters: {
    tasks: s => s.tasks
  },
  modules: {

  }
})
