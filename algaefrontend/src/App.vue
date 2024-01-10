<script setup>
import { RouterView } from 'vue-router'
import Sidebar from '@/components/SidebarComponent.vue'
</script>

<template>
  <div class="flex bg-gray-100 w-full h-screen">
    <nav class="w-2/12 bg-black p-3 h-full">
      <Sidebar />
    </nav>
    <main class="w-10/12 ml-2/12 h-full overflow-y-auto">
      <router-view />
    </main>
    
  </div>
</template>
