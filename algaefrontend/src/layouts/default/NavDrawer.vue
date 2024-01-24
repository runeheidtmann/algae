<template>
  <v-navigation-drawer
    permanent
    floating
    border="false"
    class="bg-grey-darken-4"
  >
    <template v-slot:append>
      <v-list-item
       
        lines="two"
        prepend-icon="mdi-account-outline"
        subtitle="Logged in"
      >  {{ userData?.username }}</v-list-item>
    </template>

    <v-divider class="border-0"></v-divider>

    <v-list density="compact" nav>
      <router-link to="/" class="routerlink"
        ><v-list-item
          prepend-icon="mdi-forum"
          title="Algae chat"
          value="Algue Chat"
        ></v-list-item
      ></router-link>
      <router-link to="/evaluate" class="routerlink">
        <v-list-item
          prepend-icon="mdi-certificate"
          title="Evaluate models"
          value="Evaluate Chatmodels"
        ></v-list-item
      ></router-link>
      <router-link to="/docs" class="routerlink">
        <v-list-item
          prepend-icon="mdi-file-document"
          title="Manage Documents"
          value="Manage Documents"
        ></v-list-item
      ></router-link>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
import { useAuthStore } from "@/store/authStore";

export default {
  data: () => ({
    username: '',
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
  methods: {},
  computed: {
    userData() {
      const authStore = useAuthStore();
      return authStore.userData
    }
  },
  mounted() {
    const authStore = useAuthStore();
    authStore.fetchUserData();
  },
};
</script>
<style scoped>
.routerlink {
  text-decoration: none;
  color: inherit;
}
</style>
