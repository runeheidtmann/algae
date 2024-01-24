<template>
  <v-container class="d-flex flex-column fill-height justify-between w-50">
    <div class="d-flex w-100 mb-5 text-body-1">
      <div class="mr-5">RU</div>
      <div>
        <div class="font-weight-medium">You</div>
        <div>
          {{ conversation.question }}
        </div>
      </div>
    </div>
    <div class="d-flex w-100 mb-5 text-body-1">
      <div class="mr-5">AB</div>
      <div>
        <div class="font-weight-medium">AlgaeBrain</div>
        <div>
          {{ conversation.answer }}
          <v-dialog width="800">
            <template v-slot:activator="{ props }">
              <a v-bind="props" text="[>_source]" class="text-indigo-darken-4">
              </a>
            </template>

            <template v-slot:default="{ isActive }">
              <v-card :title="conversation.docs[0][1][1].source">
                <v-card-text> {{conversation.docs[2][0][1]}} </v-card-text>
                <v-card-text>
                  <a href="#">{{conversation.docs[2][1][1].source}}: page {{conversation.docs[0][1][1].page}}</a>
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
export default {
  data() {
    return {
      loading: false,
      chatInput: "",
      appStore: null,
    };
  },
  methods: {
    async sendQuery() {
      const appStore = useAppStore();
      try {
        await appStore.sendChatQuery(this.chatInput);
      } catch (error) {
        this.errorMessage = "Some error in with the send question-thingy";
      }
    },
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
