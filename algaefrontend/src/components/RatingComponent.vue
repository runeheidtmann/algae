<template>
  <div v-if="!ratingSend" class="d-flex flex-column mt-3">
    <div class="mt-3">Rate this answer:</div>
    <v-rating v-model="rating" :item-labels="labels" @click="sendEvaluation">
      <template v-slot:item-label="props">
        <span
          :class="`text-${colors[props.index]}`"
          class="font-weight-black text-caption"
        >
          {{ props.label }}
        </span>
      </template>
    </v-rating>
  </div>
  <v-alert v-else-if="ratingSend" type="info" variant="outlined" class="mt-5">
    You rated this answer from AlgaeBrain
    <span :class="'font-weight-medium ' + 'text-' + colors[rating - 1]">{{
      labels[rating - 1]
    }}</span>
  </v-alert>
</template>
<script>
import { useAppStore } from "@/store/app";

export default {
  name: "RatingComponent",
  data() {
    return {
      ratingSend: false,
      rating: null,
      colors: ["red", "orange", "grey", "cyan", "green"],
      labels: ["bad", "so so", "ok", "good", "great"],
    };
  },
  methods: {
    sendEvaluation() {
      const appStore = useAppStore();
      try {
        if (this.rating != null) {
          this.ratingSend = true;
          appStore.sendEvaluation(this.rating);
        }
      } catch (error) {
        this.errorMessage = "Some error in with the send question-thingy";
      }
    },
  },
};
</script>
