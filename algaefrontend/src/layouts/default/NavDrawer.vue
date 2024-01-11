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
            prepend-avatar="https://randomuser.me/api/portraits/women/81.jpg"
            title="Jane Smith"
            subtitle="Logged in"
          ></v-list-item>
        </template>

        <v-divider class="border-0"></v-divider>

        <v-list density="compact" nav>
          <router-link to="/" class="routerlink"><v-list-item prepend-icon="mdi-forum" title="Algae chat" value="Algue Chat"></v-list-item></router-link>
         <router-link to="/dick" class="routerlink"> <v-list-item prepend-icon="mdi-certificate" title="Evaluate models" value="Evaluate Chatmodels"></v-list-item></router-link>
         <router-link to="/documents" class="routerlink"> <v-list-item prepend-icon="mdi-file-document" title="Manage Documents" value="Manage Documents"></v-list-item></router-link>
        </v-list>
      </v-navigation-drawer>
</template>
<style scoped>
.routerlink {
  text-decoration: none;
  color: inherit;
}
</style>