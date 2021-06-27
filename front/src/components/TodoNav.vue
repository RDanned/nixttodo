<template>
  <b-row>
    <b-nav tabs>
      <li
        v-for="(category, index) in categories"
        :data-category="category"
        :key="index"
        @click="changeCategory"
        :class="['nav-link', {active: category === currentCategory}]"
      >
        {{ category }}
      </li>
    </b-nav>
  </b-row>
</template>
<script>
import {mapGetters} from 'vuex'
import {actionTypes} from '@/store/modules/todo'

export default {
  name: 'TodoNav',
  data() {
    return {
      categories: ['all', 'completed', 'incomplete'],
    }
  },
  computed: {
    ...mapGetters({
      currentCategory: 'getCurrentCategory',
    }),
  },
  mounted() {
    this.$store.dispatch(actionTypes.loadItems)
  },
  methods: {
    changeCategory: function (e) {
      this.$store.dispatch(actionTypes.setCategory, {
        category: e.currentTarget.dataset.category,
      })
    },
  },
}
</script>
