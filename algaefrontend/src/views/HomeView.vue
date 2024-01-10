<script setup>
import ChatComponent from '@/components/ChatComponent.vue'
import Header from '@/components/HeaderComponent.vue'
import Footer from '@/components/FooterComponent.vue'
</script>

<template>
  <div class="flex flex-col h-full">
    <Header />
    <ChatComponent/>
    <Footer />
  </div>
</template>
