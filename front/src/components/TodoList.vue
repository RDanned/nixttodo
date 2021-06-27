<template>
  <b-row>
    <todo-item v-for="item in items" :key="item.id" :item="item" />
    <b-alert :show="Object.keys(items).length === 0" variant="info"
      >There is no todos yet</b-alert
    >
  </b-row>
</template>
<script>
import TodoItem from '@/components/TodoItem'

export default {
  name: 'TodoList',
  components: {TodoItem},
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
}
</script>
