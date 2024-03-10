<template>
  <v-app>
    <v-main class="bg-grey-darken-3">
      <section id="hero">
        <v-sheet
          class="d-flex align-center mx-auto pb-16"
          color="grey-darken-3"
        >
          <v-container class="text-center p-48">
            <v-responsive class="mx-auto align-center" width="800" height="700">
              <v-img
                :width="800"
                cover
                src="/algae2.jpg"
                class="mb-5"
              ></v-img>
              <h2 class="text-h2">Try chatting with your research</h2>

              <p class="mt-3 text-h6 text-white">
                AlgaeBrain is a domain specific chatbot. It was created for
                Algae researchers to be able to find relevant answers to their
                everyday questions much quicker.
              </p>
            </v-responsive>
          </v-container>
        </v-sheet>
      </section>

      <v-sheet class="py-16 bg-grey-darken-3">
        <section id="filter">
          <v-container>
            <v-row justify="space-between">
              <v-col cols="auto">
                <v-responsive width="350">
                  <h2 class="text-h4">Retriever Augmented Generation</h2>

                  <p class="text-success mt-3">
                    Large language models + semantic search
                  </p>

                  <p class="mt-8">
                    This system utilizes the power of two great technologies.
                    Large language models and semantic search in databases.
                  </p>

                  <p class="mt-8">
                    Upload all of your domain specific research papers,
                    articles, books etc. The system will save it in a vector
                    database, that enables you to augment your chat experience
                    with relevant sources. This gives much better research
                    answers than with a generic LLM.
                  </p>

                  <v-btn
                    class="mt-6"
                    href="https://python.langchain.com/docs/use_cases/chatbots"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    More Information
                  </v-btn>
                </v-responsive>
              </v-col>

              <v-img
                max-width="400"
                src="https://cdn.vuetifyjs.com/store/themes/vite-free/chips-bar.png"
              />
            </v-row>
          </v-container>
        </section>
      </v-sheet>
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from "pinia";
import { useAuthStore } from "@/store/authStore";

export default {
  data: () => ({
    overlayLogin: false,
    overlaySignin: false,
    username: null,
    first_name: null,
    last_name: null,
    email: null,
    form: false,
    password: null,
    loading: false,
    title: "Endorfine",
    imageLink: {
      main: "https://firebasestorage.googleapis.com/v0/b/endorfinevue.appspot.com/o/assets%2Fb13f0434-b228-11e6-8e5d-5252025056ab_web_scale_0.4666667_0.4666667__.jpg?alt=media&token=660df23e-599e-434b-9313-ba69c973eeea",
      sub_main:
        "https://firebasestorage.googleapis.com/v0/b/endorfinevue.appspot.com/o/assets%2FNight-Club-Clubbing-Jobs-Abroad2.jpg?alt=media&token=82bbda7d-5df4-430b-9217-adaf1c8485c5",
      logo: "https://firebasestorage.googleapis.com/v0/b/endorfinevue.appspot.com/o/assets%2Fandroid-chrome-512x512.png?alt=media&token=8a0a66f6-4741-4ff6-8f28-eb9ec74374df",
      social_cover:
        "https://firebasestorage.googleapis.com/v0/b/endorfinevue.appspot.com/o/assets%2Fo-NIGHTCLUB-facebook.jpg?alt=media&token=cefc5c4c-9714-41da-9c22-f63caf5e89a4",
    },
    emailRules: [
      (v) => {
        return !!v || "E-mail is required";
      },
      (v) =>
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
        "E-mail must be valid",
    ],
    subscribed: false,
  }),
  methods: {
    onSubmit() {
      if (!this.form) return;

      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
    required(v) {
      return !!v || "Field is required";
    },
    async handleLogin() {
      const authStore = useAuthStore();
      try {
        await authStore.login(this.username, this.password);
        this.$router.push({ name: "Home" });
      } catch (error) {
        this.errorMessage = "Failed to login. Please check your credentials.";
      }
    },
  },
  computed: {
    // a computed getter
    ...mapState(useAuthStore, ["isLoggedIn"]),
  },
};
</script>
<style scoped>
.social-icon {
  font-size: 21px;
  color: white;
}
</style>
