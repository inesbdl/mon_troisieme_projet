<script setup>
import { ref, onMounted } from 'vue'
// Exemple de données de posts (dans une application réelle, vous pourriez les récupérer d'une API)
const articles = ref([
  {
    id: 1,
    title: 'Un chat retrouvé.',
    body: 'La mère Michèle a enfin retrouvé son chat. Un témoignage poignant.'
  },
  {
    id: 2,
    title: 'Mary Popins a un nouveau parapluie.',
    body: 'Suite à un malheureux accident le mois dernier, Mary Popins a dû se résoudre à abandonner son célèbre parapluie. Suite à de nombreuses rumeurs quant à son nouveau partenaire, il semblerait que ce soit un simple parapluie transparent. Décevant.'
  }
])
onMounted(() => {})
</script>
<template>
  <div>
    <h1>Nos derniers articles :</h1>
    <ul>
      <li v-for="article in articles" :key="article.id">
        <router-link :to="{name: 'article', params:{id: article.id }}">{{ article.title }}</router-link>
      </li>
    </ul>
  </div>
</template>
