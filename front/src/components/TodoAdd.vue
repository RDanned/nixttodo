<template>
  <b-row class="mb-4">
    <b-button v-if="!isAdding" @click="toggleAdding">add new item</b-button>
    <b-form v-else>
      <b-form-group id="title" label="Title:" label-for="title">
        <b-form-input
          id="title"
          v-model="todo.title"
          type="text"
          placeholder="Enter title"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="description"
        label="Description:"
        label-for="description"
      >
        <b-form-textarea
          id="description"
          v-model="todo.description"
          placeholder="Enter something..."
          rows="3"
          max-rows="6"
        ></b-form-textarea>
      </b-form-group>
      <b-button type="submit" variant="primary" @click.prevent="addItem">
        Save
      </b-button>
    </b-form>
  </b-row>
</template>
<script>
import {actionTypes} from '@/store/modules/todo'

export default {
  name: 'TodoAdd',
  data() {
    return {
      isAdding: false,
      todo: {
        title: '',
        description: '',
      },
    }
  },
  methods: {
    addItem: function () {
      this.$store.dispatch(actionTypes.addItem, {item: {...this.todo}})
      this.todo.title = ''
      this.todo.description = ''
      this.isAdding = false
    },
    toggleAdding: function () {
      this.isAdding = !this.isAdding
    },
  },
}
</script>
