
<template>
    <div class="recipe-show">
      <!-- Top Section: Image and Menu Name -->
      <div class="recipe-header">
        <img :src="menuData.image" alt="Menu Image" class="menu-image" />
        <h1 class="menu-name">{{ menuData.name }}</h1>
      </div>
  
      <!-- Divider -->
      <hr class="divider" />
  
      <!-- Ingredients Section -->
      <div class="ingredients-section">
        <h2 class="section-title">재료</h2>
        <ul class="ingredients-list">
          <li v-for="(ingredient, index) in menuData.ingredients" :key="index" class="ingredient-item">
            {{ ingredient }}
          </li>
        </ul>
      </div>
  
      <!-- Space -->
      <div class="space"></div>
  
      <!-- Cooking Instructions Section -->
      <div class="instructions-section">
        <h2 class="section-title">조리방법</h2>
        <p class="instructions-text">
          {{ menuData.instructions }}
        </p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "RecipeShow",
    data() {
      return {
        // Replace with Flask API data
        menuData: {
          image: "@/assets/sample-dish.jpg", // Replace with dynamic data
          name: "Sample Dish", // Replace with dynamic data
          ingredients: [
            "1 cup of rice",
            "2 cups of water",
            "1 tablespoon of oil",
          ], // Replace with dynamic data
          instructions:
            "1. Wash the rice thoroughly.\n2. Boil water in a pot.\n3. Add rice to the boiling water.\n4. Cover and simmer for 20 minutes.\n5. Serve hot.",
        },
      };
    },
  };
  </script>
  
  <style scoped>
  /* General Styles */
  .recipe-show {
    font-family: Arial, sans-serif;
    padding: 20px;
  }
  
  /* Header Styles */
  .recipe-header {
    text-align: center;
  }
  
  .menu-image {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
  }
  
  .menu-name {
    font-size: 2rem;
    margin: 20px 0 10px;
    color: #333;
  }
  
  /* Divider */
  .divider {
    border: none;
    border-top: 2px solid #ddd;
    margin: 20px 0;
  }
  
  /* Ingredients Section */
  .ingredients-section {
    margin-bottom: 40px;
  }
  
  .section-title {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: #444;
  }
  
  .ingredients-list {
    list-style: disc;
    padding-left: 20px;
  }
  
  .ingredient-item {
    font-size: 1rem;
    margin-bottom: 5px;
    color: #555;
  }
  
  /* Instructions Section */
  .instructions-section {
    margin-top: 20px;
  }
  
  .instructions-text {
    white-space: pre-wrap; /* Preserve line breaks in instructions */
    font-size: 1rem;
    color: #555;
    line-height: 1.5;
  }
  
  /* Space for separation */
  .space {
    height: 40px;
  }
  </style>
  
  
  
  
  