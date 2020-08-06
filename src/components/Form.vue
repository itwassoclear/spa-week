<template>
  <form @submit.prevent="submitHandler(timeText, )" class="tracking__inputs"> 
    <div class="input-field">
      <input id="time" type="text" class="timepicker" ref="timepicker">
      <label for="time">Время</label>
      <span class="helper-text" data-error="Выберите время"></span>
    </div>
    <div class="input-field">
      <input id="title" v-model="title" type="text" class="validate" required>
      <label for="title">Задача</label>
      <span class="helper-text" data-error="Введите текст"></span>
    </div>
    <button type="submit" class="tracking__button">
      <i class="material-icons">add</i>
    </button>
  </form>
</template>

<script>
export default {
  name: 'Form',
  data: () => ({
    time: null,
    title: '',
    editing: false,
    timeText: ''
  }),
  mounted() {
    this.time = M.Timepicker.init(this.$refs.timepicker, {
      defaultTime: 'now',
      twelveHour: false
    });
  },
  computed: {
  },
  methods: {
    submitHandler() {
      const task = {
        time: this.time.time,
        title: this.title,
        id: Date.now(),
        status: 'active'
      }
      this.$store.dispatch('createTask', task);
      this.title = '';
      event.target.reset();
    },
    timeTextChange(e) {
      this.timeText = e.target.value;
    },
  }
}
</script>

<style lang="scss">
.tracking__inputs {
  display: flex;
  align-items: center;
}

.input-field {
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

label {
  padding-left: 5px;
}
</style>