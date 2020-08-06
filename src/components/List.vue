<template>
  <div class="tracking">
    <button type="submit" class="tracking__button">
      <i class="material-icons">content_copy</i>
    </button>
    <table v-if="tasks.length" class="tasks">
      <tbody>
        <!-- сюда будут складываться задачи -->
        <tr v-for="task of tasks" :key="task.id" class="task">
          <task :task='task' />
        </tr>
      </tbody>
    </table>

    <task-form />

  </div>
</template>

<script>
  import Task from '@/components/Task';
  import Form from '@/components/Form';
  export default {
    name: 'List',
    components: {
      'task': Task,
      'task-form': Form,
    },
    data: () => ({
      // time: null,
      // title: '',
    }),
    computed: {
      tasks() {
        return this.$store.getters.tasks
      }
    },
  }
</script>

<style lang="scss">
.tracking {
  width: 400px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  border: 2px solid #000;
}

.task {
  border: none;
}

.tasks {
  width: 360px;
}

.material-icons {
  margin: 0;
}
</style>