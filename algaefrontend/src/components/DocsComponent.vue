<template>
  <div class="mt-8">
    <v-card
      class="mx-auto pa-12 pb-8"
      elevation="8"
      max-width="1024"
      rounded="lg"
      :disabled="uploading"
    >
      <v-container>
        <v-row align="center"
          ><v-col cols="md-4"
            ><v-text-field
              v-model="title"
              density="compact"
              placeholder="Document title"
              prepend-icon="mdi-file-document"
              variant="outlined"
              style="height: 56px"
            ></v-text-field
            ><v-file-input
              @change="handleFileChange"
              v-model="file"
              label="File input"
              class="mx-auto"
            ></v-file-input
          ></v-col>
          <v-col cols="md-2">
            <v-btn
              @click="handleUpload"
              block
              class=""
              color="blue"
              size="large"
              variant="tonal"
            >
              upload
            </v-btn></v-col
          >
        </v-row>
      </v-container>

      <v-card max-width="1024" flat class="mt-8 mx-auto pb-4">
        <v-card-title class="d-flex align-center pe-2">
          <v-icon icon="mdi-library"></v-icon> &nbsp; Your uploaded document
          library

          <v-spacer></v-spacer>

          <v-text-field
            v-model="search"
            prepend-inner-icon="mdi-magnify"
            density="compact"
            label="Search"
            single-line
            flat
            hide-details
            variant="solo-filled"
          ></v-text-field>
        </v-card-title>

        <v-divider></v-divider>
        <v-data-table
          v-model:search="search"
          :loading="loading"
          :items="documents"
        >
          <template v-slot:item.file="{ item }">
              <div v-html="item.file"></div>
            
          </template>
        </v-data-table>
      </v-card>
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
      search: "",
      uploading: false,
      loading: false,
      items: [
        {
          name: "Nebula GTX 3080",
          image: "1.png",
          price: 699.99,
          rating: 5,
          stock: true,
        },
      ],
    };
  },
  methods: {
    handleFileChange(event) {
      // Assign the first file from the file input to the file data property
      this.file = [event.target.files[0]];
    },
    async handleUpload() {
      const appStore = useAppStore();
      console.log("File type:", this.file[0] instanceof File); // Should be true

      try {
        await appStore.uploadDocument(this.title, this.file[0]);
        this.$router.push({ name: "Docs" });
      } catch (error) {
        this.errorMessage = "Failed to login. Please check your credentials.";
      }
    },
  },
  computed: {
    documents(){
      const appStore = useAppStore();
      return appStore.documents;
    }
  },
  mounted() {
    const appStore = useAppStore();
    appStore.fetchUserDocuments();
    console.log("mounted")
  },
};
</script>

<style></style>
