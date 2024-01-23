<template>
  <div class="mt-8">
    <v-card
      class="mx-auto pa-12 pb-8"
      elevation="8"
      max-width="448"
      rounded="lg"
    >
      <v-card-text class="text-center text-h6 text-md-h5 text-lg-h5 mb-8">
        Upload your file
      </v-card-text>
      <div class="text-subtitle-1 text-medium-emphasis">title</div>

      <v-text-field
        v-model="title"
        density="compact"
        placeholder="title"
        prepend-inner-icon="mdi-account-outline"
        variant="outlined"
      ></v-text-field>
      <v-file-input
        @change="handleFileChange"
        v-model="file"
        label="File input"
      ></v-file-input>

      <v-btn
        @click="handleUpload"
        block
        class="mt-12 mb-8"
        color="blue"
        size="large"
        variant="tonal"
      >
        upload
      </v-btn>
    </v-card>
  </div>
</template>

<script>
import { useAppStore } from "@/store/app";
export default {
  data() {
    return {
      title: "",
      file: null,
    };
  },
  methods: {
    handleFileChange(event) {
      // Assign the first file from the file input to the file data property
      this.file = event.target.files[0];
    },
    async handleUpload() {
      const appStore = useAppStore();
      console.log("File type:", this.file instanceof File); // Should be true

      try {
        await appStore.uploadDocument(this.title, this.file);
        this.$router.push({ name: "Home" });
      } catch (error) {
        this.errorMessage = "Failed to login. Please check your credentials.";
      }
    },
  },
};
</script>

<style></style>
