<template>
  <div class="task-container">
    <!-- сюда будут складываться задачи -->
    <td class="task__time">
      <div class="input-field">
        <input v-if="editing" v-bind:value="timeText" @change="timeTextChange" id="time" type="text" class="timepicker" ref="timepicker">
        <p class="time__text" v-else @click="updateTime(task)">{{task.time}}</p>
      </div> 
    </td>
    <td class="task__info">
      <input v-if="editing" v-bind:value="titleText" @change="titleTextChange" id="title" type="text" class="validate">
      <p class="title__text" v-else @click="updateTitle(task)">{{task.title}}</p>
    </td>
    <button class="tracking__button" @click="deleteTask(task)">
      <i class="material-icons">close</i>
    </button>
  </div>
</template>

<script>
  export default {
    name: 'Task',
    props: {
      task: {}
    },
    data: () => ({
      time: null,
      title: '',
      editing: false,
      timeText: '',
      titleText: ''
    }),
    computed: {
      tasks() {
        return this.$store.getters.tasks
      }
    },
    methods: {
      deleteTask(task) {
        this.$store.dispatch('deleteTask', task);
      },
      timeTextChange(e) {
        this.timeText = e.target.value;
      },
      titleTextChange(e) {
        this.titleText = e.target.value;
      },
      updateTime(task) {
        this.editing = this.editing == true ? false : true;
        if (this.editing) {
          this.timeText = task.time
        }
      },
      updateTitle(task) {
        this.editing = this.editing == true ? false : true;
        if (this.editing) {
          this.titleText = task.title
        }
      }
    }
  }
</script>

<style lang="scss">
.task-container {
  display: flex;
  border: none;
  align-items: center;
  justify-content: space-between;
}

.task__time {
  border: none;
  margin: 0;
  padding: 0;
}

.task__info {
  border: none;
  margin: 0;
  padding: 0;
}

.time__text {
  margin: 0;
}

.title__text {
  margin: 0;
}

div.input-field {
  margin-top: 0;
  margin-bottom: 0;
  max-width: 150px;
  margin: 0;
  padding-right: 10px;
  align-self: flex-start;
}

.tracking__button {
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
  border-radius: 100%;
  width: 36px;
  height: 36px;
  transition: all .3s ease-in-out;
}

input {
  margin: 0;
}
</style>