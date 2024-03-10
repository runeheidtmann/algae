<template>
  <v-container class="d-flex flex-column fill-height justify-between w-50">
    <div v-if="conversation.question">
      <div class="d-flex w-100 mb-5 text-body-1">
        <div class="mr-5">RU</div>
        <div>
          <div class="font-weight-medium">You</div>
          <div>
            {{ conversation.question }}
          </div>
        </div>
      </div>
      <div v-if="conversation.answer" class="d-flex w-100 mb-5 text-body-1">
        <div class="mr-5">AB</div>
        <div>
          <div class="font-weight-medium">AlgaeBrain</div>
          <div>
            {{ conversation.answer }}
            <br />
            <v-dialog width="800">
              <template v-slot:activator="{ props }">
                <a
                  v-bind="props"
                  text="[>_source]"
                  class="text-indigo-darken-4"
                >
                </a>
              </template>

              <template v-slot:default="{ isActive }">
                <v-card :title="conversation.docs[0][1][1].source">
                  <v-card-text> {{ conversation.docs[2][0][1] }} </v-card-text>
                  <v-card-text>
                    <a href="#"
                      >{{ conversation.docs[2][1][1].source }}: page
                      {{ conversation.docs[0][1][1].page }}</a
                    >
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn
                      text="Close Dialog"
                      @click="isActive.value = false"
                    ></v-btn>
                  </v-card-actions>
                </v-card>
              </template>
            </v-dialog>
          </div>

          <RatingComponent />
        </div>
      </div>
      <div v-else>
        <v-progress-linear
          indeterminate
          color="yellow-darken-2"
        ></v-progress-linear>
      </div>
    </div>

    <div class="mb-4 mt-auto w-100">
      <v-text-field
        :loading="loading"
        v-model="chatInput"
        density="compact"
        variant="solo"
        label="Message Algaefessor"
        append-inner-icon="mdi-chat"
        single-line
        hide-details
        @click:append-inner="sendQuery"
        v-on:keyup.enter="sendQuery"
      ></v-text-field>
    </div>
  </v-container>
</template>

<script>
import { useAppStore } from "@/store/app";
import RatingComponent from "@/components/RatingComponent.vue";

export default {
  components: { RatingComponent },
  data() {
    return {
      loading: false,
      chatInput: "",
      appStore: null,
    };
  },
  methods: {
    async sendQuery() {
      const chatInputText = this.chatInput;
      this.loading = true;
      this.chatInput = "";
      try {
        await this.appStore.sendChatQuery(chatInputText);
      } catch (error) {
        this.errorMessage = "Some error in with the send question-thingy";
      }
      this.loading = false;
    },
    resetState() {
      this.appStore.resetConversation(); // Assuming this method resets your state
    },
  },

  beforeRouteLeave(to, from, next) {
    this.resetState(); // Call the reset state method
    next(); // Proceed with the route navigation
  },
  created() {
    this.appStore = useAppStore();
  },
  computed: {
    conversation() {
      if (this.appStore) {
        return this.appStore.conversation;
      }
      return {};
    },
  },
};
</script>
<style scoped></style>
