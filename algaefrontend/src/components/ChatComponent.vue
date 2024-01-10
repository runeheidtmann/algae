<script setup>
import ChatConversationList from '@/components/ChatConversationList.vue'

</script>
<template>
  <div class="flex justify-center items-center h-full">
    <!-- Centered Div -->
    <div class="w-6/12 h-full bg-gray-100 text-black p-4 flex flex-col justify-between">
      <!-- Text Message Area -->
        <ChatConversationList />
      <!-- Input Field -->
     
    </div>
  </div>
</template>