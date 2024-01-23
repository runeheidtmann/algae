<template>
  <div class="mt-8">
    <v-card
      class="mx-auto pa-12 pb-8"
      elevation="8"
      max-width="448"
      rounded="lg"
    >
      <v-card-text class="text-center text-h6 text-md-h5 text-lg-h5 mb-8">
        Log in to your account
      </v-card-text>
      <div class="text-subtitle-1 text-medium-emphasis">Username</div>

      <v-text-field
        v-model="username"
        density="compact"
        placeholder="Username"
        prepend-inner-icon="mdi-account-outline"
        variant="outlined"
      ></v-text-field>

      <div
        class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
      >
        Password

        <a
          class="text-caption text-decoration-none text-blue"
          href="#"
          rel="noopener noreferrer"
          target="_blank"
        >
          Forgot login password?</a
        >
      </div>

      <v-text-field
        v-model="password"
        v-on:keyup.enter="handleLogin"
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        density="compact"
        placeholder="Enter your password"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        @click:append-inner="visible = !visible"
      ></v-text-field>

      <v-card v-if="alert" color="warning" variant="tonal">
        <v-card-text class="text-medium-emphasis text-caption">
          {{ alertText }}
        </v-card-text>
      </v-card>

      <v-btn
        @click="handleLogin"
        block
        class="mt-12 mb-8"
        color="blue"
        size="large"
        variant="tonal"
      >
        Log In
      </v-btn>

      <v-card-text class="text-center">
        <router-link to="/signup" style="text-decoration: none">
          Sign up now <v-icon icon="mdi-chevron-right"></v-icon>
        </router-link>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { useAuthStore } from "@/store/authStore";

export default {
  data: () => ({
    visible: false,
    alert: false,
    alertText: "Some alert text here",
    username: null,
    email: null,
    password: null,
    emailRules: [
      (v) => {
        return !!v || "E-mail is required";
      },
      (v) =>
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
        "E-mail must be valid",
    ],
  }),
  methods: {
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
};
</script>

<style></style>
