<template>
  <div class="week">
    <button class="week__day">пн</button>
    <button class="week__day">вт</button>
    <button class="week__day">ср</button>
    <button class="week__day">чт</button>
    <button class="week__day week__day_active">пт</button>
    <button class="week__day">сб</button>
    <button class="week__day">вс</button>
  </div>
</template>

<script>
  export default {
    name: 'Week',
  }
</script>

<style lang="scss">
.week {
  display: flex;
  flex-direction: column;
  width: 100px;
  max-height: 236px;
  margin: 0;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
}

.week__day {
  color: #000;
  margin: 0;
  padding: 3px 40px;
  background: none;
  border: none;
}

.week__day_active {
  border: 2px solid #000;
}
</style>