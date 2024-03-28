<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const title = ref(route.params.title)
const body = ref(route.params.body)

onMounted(() => {
  // Ici, vous pouvez faire une requête fetch pour récupérer les détails du post en utilisant postId
})
</script>
<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ body }}</p>
    <!-- Affichez ici les détails du post en utilisant postId pour récupérer les données -->
  </div>
</template>
