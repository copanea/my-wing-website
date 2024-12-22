<template>
  <div class="recipe-menu">
  <!-- Top Section -->
  <div class="top-section">
    <!-- Left Part -->
    <div class="left">
      <img src="/images/mascot_logo_312-1.png" alt="Sample Image" />
    </div>
    <!-- Right Part -->
    <div class="right">
      <div class="top">
        <h1>오늘의 추천 메뉴</h1>
        <p>
          원하시는 요리를 선택해주시고<br />
          조리법을 보시려면 레시피보기를 클릭해주세요.
        </p>
      </div>
      <div class="bottom"> 
        <img src="/images/wide_arrow.png" alt="Another Image" />
      </div>
    </div>
  </div>

  <!-- Bottom Section -->
  <!-- 추천 메뉴 섹션 -->
  <section class="menu-section">
    <div class="menu-grid">
      <div
        class="menu-box"
        v-for="(menu, index) in recommendedMenus"
        :key="index"
      >
        <div class="menu-image">
          <img :src="menu.image" alt="요리 이미지" />
        </div>
        <div class="menu-info">
          <h3>{{ menu.name }}</h3>
          <button class="recipe-btn"><router-link to="/RecipeShow">레시피 보기</router-link></button>
        </div>
      </div>
    </div>
    <div class="more-btn-container">
      <button class="more-btn">추천 메뉴 더 보기</button>
    </div>
  </section>
</div>
</template>

<script>
export default {
data() {
  return {
    recommendedMenus: [
      {
        name: "된장찌개",
        image: "doenjang.jpg",
      },
      {
        name: "불고기",
        image: "bulgogi.jpg",
      },
      {
        name: "김치찌개",
        image: "kimchi.jpg",
      },
      {
        name: "삼겹살",
        image: "porkbelly.jpg",
      },
      {
        name: "잡채",
        image: "japchae.jpg",
      },
      {
        name: "비빔밥",
        image: "bibimbap.jpg",
      },
      {
        name: "갈비찜",
        image: "galbijjim.jpg",
      },
      {
        name: "해물파전",
        image: "seafoodpajeon.jpg",
      },
      {
        name: "떡볶이",
        image: "tteokbokki.jpg",
      },
    ],
  };
},
};
</script>

<style scoped>
/* General Styles */
.recipe-menu {
display: flex;
flex-direction: column;
}

/* Top Section */
.top-section {
display: flex;
background-color: #FC720F;
padding: 20px;
}

.left {
flex: 1;
display: flex;
justify-content: center;
align-items: center;
}

.left img {
max-width: 45%;
height: auto;
border-radius: 10px;
}

.right {
flex: 2;
display: flex;
flex-direction: column;
padding: 20px;
}

.right .top {
margin-bottom: 20px;
}

.right .top h2 {
color: yellow;
margin-bottom: 10px;
}

.right .top p {
color: white;
line-height: 1.5;
}

.right .bottom {
display: flex;
justify-content: left;
}

.right .bottom img {
max-width: 40%;
height: auto;
border-radius: 10px;
}

/* Bottom Section */
.menu-section {
background-color: white;
padding: 40px;
}

.menu-grid {
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 20px;
}

.menu-box {
display: flex;
flex-direction: column;
border: 1px solid #ddd;
}

.menu-image {
height: 200px;
}

.menu-image img {
width: 100%;
height: 100%;
object-fit: cover;
}

.menu-info {
background-color: #FC720F;
padding: 10px;
text-align: center;
}

.menu-info h3 {
color: white;
margin: 10px 0;
}

.recipe-btn {
background-color: red;
color: white;
border: none;
padding: 10px 20px;
cursor: pointer;
}

.recipe-btn:hover {
background-color: yellowgreen;
}

.more-btn-container {
text-align: center;
margin-top: 40px;
}

.more-btn {
background-color: #B21016;
color: white;
padding: 15px 30px;
border: none;
font-size: 16px;
cursor: pointer;
}
</style>