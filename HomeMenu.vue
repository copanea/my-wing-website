<template>
    <div class="page">
       <!-- 네비게이션 바 -->
       <nav class="navbar">
         <!-- <ul class="menu">
           <li class="menu-item">HOME</li>
           <li class="menu-item">회원가입</li>
           <li class="menu-item">로그인</li>
         </ul> -->
       </nav>
   
       <!-- 헤드 섹션 -->
       <header class="header">
         <div class="left-part">
           <h1 class="main-title">AI야 레시피를 부탁해</h1>
           <h2 class="subtitle">Cooking with Fun!</h2>
           <p class="description">
             알라딘의 램프처럼 뚝딱<br />
             네가 원하는 요리 만들어줄께!
           </p>
           <button class="start-button"><router-link to="/ImageUpload">이미지로 시작하기</router-link></button>
           <button class="start-button"><router-link to="/TextInput">텍스트로 시작하기</router-link></button>
         </div>
         <div class="right-part">
           <img src="/images/mascot_logo_312-1.png" alt="AI 레시피 이미지" class="right-image" />
         </div>
       </header>
     </div>
   </template>
   
   <script>
   export default {
     name: "HomeMenu",
   };
   </script>
   
   <style scoped>
   /* 전체 페이지 스타일 */
   .page {
     font-family: Arial, sans-serif;
     margin: 0;
     padding: 0;
   }
   
   /* 네비게이션 바 스타일 */
   .navbar {
     display: flex;
     justify-content: center;
     align-items: center;
     background-color: #000;
     padding: 10px 0;
   }
   
   .menu {
     display: flex;
     gap: 20px;
     list-style: none;
     padding: 0;
     margin: 0;
   }
   
   .menu-item {
     font-size: 1rem;
     font-weight: bold;
     color: #fff;
     cursor: pointer;
   }
   
   .menu-item:hover {
     text-decoration: underline;
   }
   
   /* 헤드 섹션 스타일 */
   .header {
     display: flex;
     padding: 40px;
     background-color: #f5f5f5;
   }
   
   .left-part {
     flex: 1;
   }
   
   .main-title {
     font-size: 2.5rem;
     font-weight: bold;
     margin-bottom: 10px;
     color: #000;
   }
   
   .subtitle {
     font-size: 1.5rem;
     color: #1d3557; /* 진한 남색 */
     margin-bottom: 20px;
   }
   
   .description {
     font-size: 1rem;
     line-height: 1.5;
     margin-bottom: 20px;
     color: #333;
   }
   
   .start-button {
     background-color: orange;
     color: white;
     border: none;
     border-radius: 20px;
     padding: 10px 20px;
     font-size: 1rem;
     cursor: pointer;
     font-weight: bold;
   }
   
   .start-button:hover {
     background-color: #ff9800;
   }
   
   /* 오른쪽 파트 스타일 */
   .right-part {
     flex: 1;
     display: flex;
     justify-content: center;
     align-items: center;
   }
   
   .right-image {
     max-width: 65%;
     height: auto;
     border-radius: 10px;
   }
   </style>
   
   