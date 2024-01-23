<template>
  <v-app-bar class="bg-grey-darken-4">
    <v-container class="d-flex align-center py-0">
      <v-app-bar-title class="pl-0">
        <div class="d-flex align-center">
          <router-link to="/public">
          <v-avatar
            class="me-3"
            image="https://cdn.vuetifyjs.com/docs/images/logos/v.png"
            rounded="0"
          />
          </router-link>
          Vuetify 3
        </div>
      </v-app-bar-title>

      <v-spacer />

      <div>
        <router-link to="/login">
        <v-btn color="white">
          Login
        </v-btn>
        </router-link>
  
      </div>
      <div>
        <router-link to="/signup">
        <v-btn color="white">
          Sign up
        </v-btn>
        </router-link>
      </div>
    </v-container>
  </v-app-bar>
</template>

<script setup>
//
</script>
