import Vue from 'vue'
import MainApp from './MainApp'

/* eslint-disable no-new */
new Vue({
  el: '#mainApp',
  data: {
    newTodo: '',
    todos: [
      { text: 'Add some todos' }
    ]
  },
  methods: {
    addTodo() {
      const text = this.newTodo.trim()
      if (text) {
        this.todos.push({ text })
        this.newTodo = ''
      }
    },
    removeTodo(index) {
      this.todos.splice(index, 1)
    }
  },
  components: { MainApp }
})
