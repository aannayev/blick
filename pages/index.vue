<template>
    <div>
      <h1>Blog</h1>
      <div v-for="article in articles" :key="article.id">
        <router-link :to="`/article/${article.id}`">{{ article.title }}</router-link>
      </div>
    </div>
  </template>
  
  <script>
  import ky from 'ky';
  
  export default {
    async asyncData({ params }) {
      try {
        const response = await ky.get('http://localhost:3001/articles').json();
        const articles = response;
        return { articles };
      } catch (error) {
        console.error('Error fetching data:', error);
        return { articles: [] };
      }
    },
  };
  </script>
  