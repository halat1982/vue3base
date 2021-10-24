<template>
    <select  @change="changeOption" class="form-select">
      <option :value="selectedSort" >Select item from list</option>
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{option.name}}
      </option>
    </select>
</template>

<script>
export default {
  name: 'form-select',
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    options: {
      type: Array,
      default: () => [] /*для пустых массивов рекомендуется использовать стрелочную ф-ю*/
    }
  },
  methods: {
    changeOption(event){
      this.$emit('update:modelValue', event.target.value);
    }
  }
}
</script>

<style scoped>
.form-select {
  padding: 8px 5px;
  background-color: white;
  color: teal;
  border: 2px solid teal;
}
</style>