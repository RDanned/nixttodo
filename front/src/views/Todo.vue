<template>
  <b-container>
    <b-row class="justify-content-center">
      <b-col cols="6">
        <todo-add />
        <todo-nav />
        <todo-list :items="items" />
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import {mapGetters} from 'vuex'
import {actionTypes} from '@/store/modules/todo'

import TodoList from '@/components/TodoList'
import TodoAdd from '@/components/TodoAdd'
import TodoNav from '@/components/TodoNav'

export default {
  name: 'Todo',
  components: {TodoList, TodoAdd, TodoNav},
  data() {
    return {
      categories: ['all', 'completed', 'incomplete'],
    }
  },
  computed: {
    /*...mapState({
      items: (state) => state.todo.items,
    }),*/
    ...mapGetters({
      items: 'getItemsByCategory',
    }),
  },
  mounted() {
    this.$store.dispatch(actionTypes.loadItems)
  },
}
</script>
