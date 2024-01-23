<template>
  <v-app>
    <v-main>
      <section id="hero">
        <v-sheet class="d-flex align-center pb-16" color="grey-darken-3">
          <v-container class="text-center">
            <v-responsive class="mx-auto" width="500" height="600">
              <h3 class="text-h3">Try the new Vuetify</h3>

              <p class="mt-4 text-medium-emphasis">
                This is a basic Vuetify 3 application designed to help get your
                feet wet with the next version of the framework. Visit our
                <a
                  href="https://vuetifyjs.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  >documentation</a
                >
                for more information.
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
                  <h2 class="text-h4">New customization system</h2>

                  <p class="text-success mt-3">Global Defaults</p>

                  <strong class="mt-3"> Version 3 Only </strong>

                  <p class="mt-8">
                    Vuetify 3 has an unprecedented level of customization
                    options that make implementing any design system easy.
                  </p>

                  <p class="mt-8">
                    Assign default values for all components in the library,
                    including nested support.
                  </p>

                  <v-btn
                    class="mt-6"
                    href="https://vuetifyjs.com/features/global-configuration/"
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

        <v-container>
          <v-divider class="my-12" />
        </v-container>

        <section id="controls">
          <v-container>
            <v-row justify="space-between">
              <v-col cols="auto">
                <v-responsive width="350">
                  <h2 class="text-h4">Rebuilt from the ground up</h2>

                  <p class="text-success mt-3">Composition API</p>

                  <p class="mt-3">
                    Vuetify 3 uses the Vue composition API to build easy-to-use
                    and feature rich components that work out of the box.
                  </p>

                  <p class="mt-8">
                    <strong>How to use:</strong>

                    Services are now accessed through
                    <strong>use functions</strong> that follow the Vue 3
                    nomenclature and code styling.
                  </p>

                  <v-btn
                    class="mt-6"
                    href="https://vuetifyjs.com/introduction/why-vuetify/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    More Information
                  </v-btn>
                </v-responsive>
              </v-col>

              <v-img
                max-width="400"
                src="https://cdn.vuetifyjs.com/store/themes/vite-free/slider.png"
              />
            </v-row>
          </v-container>
        </section>

        <v-container>
          <v-divider class="my-12" />
        </v-container>

        <section id="grid">
          <v-container>
            <v-row justify="space-between">
              <v-col cols="auto">
                <v-responsive width="350">
                  <h2 class="text-h4">The most complete version yet</h2>

                  <p class="text-success mt-3">Available now!</p>

                  <p class="mt-3">
                    The latest version is here. Use one of our free themes to
                    get a head start!
                  </p>

                  <p class="mt-8">
                    This theme is designed to demonstrate a basic single page
                    application using Vuetify 3.
                  </p>

                  <v-btn class="mt-6"> More Information </v-btn>
                </v-responsive>
              </v-col>

              <v-img
                max-width="400"
                src="https://cdn.vuetifyjs.com/store/themes/vite-free/layout.png"
              />
            </v-row>
          </v-container>
        </section>
      </v-sheet>

      <v-sheet class="py-16" color="#181818">
        <section id="grid">
          <v-container>
            <v-row justify="space-between">
              <v-col cols="auto">
                <v-responsive class="overflow-visible" width="350">
                  <h2 class="text-h4">Shape the future of Vuetify</h2>

                  <p class="text-success mt-3">Support Development</p>

                  <strong>Become a sponsor</strong>

                  <p class="mt-8">
                    Vuetify is free to use software under the
                    <a
                      href="https://opensource.org/licenses/MIT"
                      target="_blank"
                      rel="noopener noreferrer"
                      >MIT</a
                    >
                    License and requires an extensive amount of time to
                    maintain. Supporting development ensures Vuetify will be
                    actively maintained.
                  </p>

                  <v-btn-alt
                    class="mt-6"
                    href="https://github.com/sponsors/johnleider"
                    target="_blank"
                    rel="noopener noreferrer"
                    text="Support now"
                    prepend-icon="$vuetify"
                  />
                </v-responsive>
              </v-col>
              <v-img
                max-width="400"
                src="https://cdn.vuetifyjs.com/store/themes/vite-free/vuetify.png"
              />
            </v-row>
          </v-container>
        </section>
      </v-sheet>
    </v-main>

    <v-footer>
      <v-container
        class="text-overline d-flex align-center justify-space-between"
      >
        <div>
          Copyright &copy; 2016-{{ new Date().getFullYear() }} Vuetify, LLC
        </div>

        <v-icon icon="$vuetify" size="x-large" />
      </v-container>
    </v-footer>
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
.finedTitle {
  font-weight: 900;
  text-shadow: 2px 2px #000000;
}

.social-icon {
  font-size: 21px;
  color: white;
}
</style>
