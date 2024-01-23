<template>
  <v-app-bar flat class="bg-grey-darken-4">
    <v-app-bar-title>
      <v-icon icon="mdi-alpha" />

      AlgaeBrain
      
  
    </v-app-bar-title>
          <template v-slot:append>
            <div v-if="authStore.isLoggedIn">
            <v-btn color="white" @click="handleLogout">Logout</v-btn>
            </div>
      </template>

  </v-app-bar>
</template>

<script >
import { useAuthStore } from '@/store/authStore'; // Adjust the path as needed

export default {
  setup() {
    const authStore = useAuthStore();
    return { authStore };
  },
  methods: {
  async handleLogout() {
    await this.authStore.logout();
    this.$router.push({ name: 'PublicHome' });
  }
}
};
</script>
