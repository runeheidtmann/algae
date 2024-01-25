<template>
  <v-app-bar class="bg-grey-darken-4">
    <v-container class="d-flex align-center py-0">
      <v-app-bar-title class="pl-0">
        <div class="d-flex align-center">
          <router-link to="/public" class="none">
            <v-icon icon="mdi-alpha" />
          
          AlgaeBrain
          </router-link>
        </div>
      </v-app-bar-title>

      <v-spacer />

      <div>
        <router-link to="/login">
          <v-btn color="white"> Login </v-btn>
        </router-link>
      </div>
      <div>
        <router-link to="/signup">
          <v-btn color="white"> Sign up </v-btn>
        </router-link>
      </div>
    </v-container>
  </v-app-bar>
</template>

<script setup>
//
</script>
<style scoped>
/* unvisited link */
a:link {
  color: white;
  text-decoration: none;
}

/* visited link */
a:visited {
  color: white;
}

/* mouse over link */
a:hover {
  color: white;
}

/* selected link */
a:active {
  color: white
}
</style>