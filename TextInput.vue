<template>
    <div class="container">
        <!-- 위 섹션 -->
        <div class="top-section">
          <div class="left-part">
            <img src="/images/mascot_logo_312-1.png" alt="Example Image" class="image" />
          </div>
          <div class="right-part">
            <h2 class="title">텍스트로 입력해주세요.</h2>
            <p class="description">고추장, 간장 등 양념류는 제외하고 다음과 같은</p>
            <p class="description">카테고리에서 6개 이내로 입력해주시면 됩니다.</p>
            <p class="description">고기류/생선류/야채류/면/밥/과일류</p>
            <p class="example">예) 돼지고기, 고등어, 양파, 감자, 밥, 사과 etc</p>
          </div>
        </div>
    
        <!-- 아래 섹션 -->
        <div class="bottom-section">
          <textarea class="input-box" placeholder="내용을 입력해주세요..."></textarea>
          <button class="submit-button"><router-link to="/RecipeMenu">제출하기</router-link></button>
        </div>
      </div>
    </template>
    
    <script>
    export default {
      name: "TextInput",
    };
    </script>
    
    <style scoped>
    .container {
      display: flex;
      flex-direction: column;
      height: 100vh;
    }
    
    .top-section {
      display: flex;
      background-color: #6dbf73;
      padding: 20px;
      flex: 1;
    }
    
    .left-part {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    .image {
      max-width: 45%;
      height: auto;
      border-radius: 10px;
    }
    
    .right-part {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: white;
    }
    
    .title {
      color: #ffd700;
      margin-bottom: 20px;
    }
    
    .description {
      margin-bottom: 10px;
    }
    
    .example {
      margin-top: 20px;
      font-weight: bold;
    }
    
    .bottom-section {
      background-color: #ffffff;
      padding: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    
    .input-box {
      width: 80%;
      height: 150px;
      border: 2px solid #ddd;
      border-radius: 10px;
      padding: 10px;
      font-size: 16px;
      margin-bottom: 20px;
    }
    
    .submit-button {
      background-color: #ff7f7f;
      color: white;
      font-size: 18px;
      padding: 10px 40px;
      border: none;
      border-radius: 10px;
      cursor: pointer;
    }
    
    .submit-button:hover {
      background-color: #ff4c4c;
    }
    </style>