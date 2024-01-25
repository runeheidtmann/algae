<template>
  <div class="d-flex flex-column mt-3">
    <div>Rate this answer:</div>
    <v-rating
      hover
      v-model="rating"
      class="m-0 p-0"
      size="small"
      color="orange-lighten-1"
      :readonly="readonly"
    ></v-rating>
  </div>
</template>
<script>
export default {
  name: "RatingComponent",
  data() {
    return {
      readonly: false,
      rating: null,
    };
  },
};
</script>
