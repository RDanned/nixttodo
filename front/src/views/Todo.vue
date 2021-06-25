<template>
  <b-container>
    <b-row class="justify-content-center">
      <b-col cols="6">
        <todo-add />
        <todo-list :items="items" />
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import {mapState} from 'vuex'
import {actionTypes} from '@/store/modules/todo'

import TodoList from '@/components/TodoList'
import TodoAdd from '@/components/TodoAdd'

export default {
  name: 'Todo',
  components: {TodoList, TodoAdd},
  computed: {
    ...mapState({
      items: (state) => state.todo.items,
    }),
  },
  mounted() {
    this.$store.dispatch(actionTypes.loadItems)
  },
}
</script>
