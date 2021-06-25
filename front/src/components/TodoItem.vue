<template>
  <b-col cols="12">
    {{ item.title }}
  </b-col>
</template>
<script>
export default {
  name: 'TodoItem',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
}
</script>
