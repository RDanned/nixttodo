<template>
  <b-col cols="12" class="todo-item">
    <div :class="['todo-item__text']" v-if="!isEdit">
      <div
        :class="['todo-item__title', {completed: itemData.completed}]"
        @click="expand"
      >
        {{ itemData.title }}<sub>[click to view description]</sub>
      </div>
      <div class="todo-item__description" v-if="isExpanded">
        {{ itemData.description }}
      </div>
    </div>

    <div :class="['todo-item__text']" v-else>
      <div :class="['todo-item__title']">
        <b-form-input v-model="itemData.title"></b-form-input>
      </div>
      <div class="todo-item__description">
        <b-form-textarea v-model="itemData.description"></b-form-textarea>
      </div>
      <b-button type="submit" variant="outline-primary" @click="save"
        >Save</b-button
      >
    </div>

    <div class="todo-item__controls">
      <b-checkbox @change="toggleComplete" v-model="itemData.completed" />
      <b-icon-pen @click="startEdit" />
    </div>
  </b-col>
</template>
<script>
import {actionTypes} from '@/store/modules/todo'
import {BIconPen} from 'bootstrap-vue'

export default {
  name: 'TodoItem',
  components: {BIconPen},
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      itemData: {...this.item},
      isEdit: false,
      isExpanded: false,
    }
  },
  methods: {
    toggleComplete: function () {
      console.log(this.itemData.id)
      this.$store.dispatch(actionTypes.toggleCompleted, {id: this.itemData.id})
    },
    expand: function () {
      this.isExpanded = !this.isExpanded
    },
    startEdit: function () {
      this.isEdit = true
    },
    save: function () {
      this.$store.dispatch(actionTypes.updateItem, {item: this.itemData})
      this.isEdit = false
    },
  },
}
</script>
