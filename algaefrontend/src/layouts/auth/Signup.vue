<template>
  <div class="mt-8">
    <v-card
      class="mx-auto pa-12 pb-8"
      elevation="8"
      max-width="448"
      rounded="lg"
    >
      <v-card-text class="text-center text-h6 text-md-h5 text-lg-h4 mb-8">
        Create your account
      </v-card-text>
      <div class="text-subtitle-1 text-medium-emphasis">Username</div>

      <v-text-field
        v-model="username"
        density="compact"
        placeholder="Username"
        prepend-inner-icon="mdi-account-outline"
        variant="outlined"
      ></v-text-field>
      <div class="text-subtitle-1 text-medium-emphasis">First name</div>

      <v-text-field
        v-model="first_name"
        density="compact"
        placeholder="First name"
        prepend-inner-icon="mdi-account-outline"
        variant="outlined"
      ></v-text-field>

      <div class="text-subtitle-1 text-medium-emphasis">Last name</div>

      <v-text-field
        v-model="last_name"
        density="compact"
        placeholder="Last name"
        prepend-inner-icon="mdi-account-outline"
        variant="outlined"
      ></v-text-field>

      <div class="text-subtitle-1 text-medium-emphasis">Email</div>
      <v-text-field
        v-model="email"
        density="compact"
        placeholder="Email"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
      ></v-text-field>
      <div
        class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
      >
        Password
      </div>

      <v-text-field
        v-model="password"
        v-on:keyup.enter="handleSignup"
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
        @click="handleSignup"
        block
        class="mt-12 mb-8"
        color="blue"
        size="large"
        variant="tonal"
      >
        Sign up
      </v-btn>
    </v-card>
  </div>
</template>

<script>
import { useAuthStore } from "@/store/authStore";

export default {
  data: () => ({
    alert: false,
    alertText: "Some alert text here",
    visible: false,
    username: null,
    first_name: "",
    last_name: "",
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
    async handleSignup() {
      const authStore = useAuthStore();
      try {
        await authStore.signup(this.username, this.first_name, this.last_name, this.email, this.password);
        this.$router.push({ name: "Home" });
      } catch (error) {
        this.errorMessage = "Failed to login. Please check your credentials.";
      }
    },
  },
};
</script>

<style></style>
