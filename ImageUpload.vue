<template>
  <div>
      <!-- 위 섹션 -->
      <section class="green-section">
        <!-- 위 소섹션 -->
        <div class="subsection">
          <!-- 왼쪽 파트: 이미지 -->
          <div class="left">
            <img src="/images/camera.png" alt="Example Image" class="image" />
          </div>
          <!-- 오른쪽 파트: 텍스트 -->
          <div class="right">
            <h3 class="yellow-title">카메라 촬영시 주의할 사항</h3>
            <p class="description">
              가급적 냉장고에서 사용하실 식자재를 꺼내서 촬영하시길 추천드립니다.<br />
              특히 용기나 봉지안에 있는 식자재는 인식하기 어렵습니다.
            </p>
            <p class="description">
              촬영대상으로 고추장, 간장 등 양념류는 제외하고<br />
              다음과 같은 카테고리에서 가급적 6개 이내로 촬영해주세요:<br />
              고기류/생선류/야채류/면/밥/과일류
            </p>
            <p class="description">
              예) 돼지고기, 고등어, 양파, 감자, 밥, 사과 etc
            </p>
          </div>
        </div>
        <!-- 아래 소섹션 -->
        <div class="subsection">
          <!-- 왼쪽 파트: 이미지 -->
          <div class="left">
            <img src="/images/vegetable.png" alt="Example Image" class="image" />
          </div>
          <!-- 오른쪽 파트: 텍스트 -->
          <div class="right">
            <h3 class="yellow-title">촬영순서</h3>
            <p class="description">
              1. 사용할 식자재를 냉장고에서 꺼낸다.<br />
              2. 식탁 위에 각 식자재들을 약 10cm씩 간격을 띄워서 배치한다.<br />
              &nbsp;&nbsp;(가까이 붙어있으면 인식에 문제발생 여지가 있음)<br />
              3. 카메라로 위에서부터 아래로 식자재 전체가 잘 보이도록 촬영한다.<br />
              4. 한번에 3~4개 이내로 찍되, 인식 난이도에 따라서 한개씩 촬영하기도 한다.<br />
              5. 촬영을 끝낸 이미지 파일(10MB 이내)을 업로드한다.
            </p>
          </div>
        </div>
      </section>
  
      <!-- 아래 섹션 -->
  <section class="upload-section">
    <h3>식자재 이미지 파일을 업로드해 주세요.</h3>
    <div class="upload-buttons">
      <button @click="handleFileUpload(1)" class="upload-btn">파일 선택</button>
      <span>{{ fileName[1] }}</span>

      <button @click="handleFileUpload(2)" class="upload-btn">파일 선택</button>
      <span>{{ fileName[2] }}</span>

      <button @click="handleFileUpload(3)" class="upload-btn">파일 선택</button>
      <span>{{ fileName[3] }}</span>

      <button @click="handleFileUpload(4)" class="upload-btn">파일 선택</button>
      <span>{{ fileName[4] }}</span>

      <button @click="handleFileUpload(5)" class="upload-btn">파일 선택</button>
      <span>{{ fileName[5] }}</span>

      <button @click="handleFileUpload(6)" class="upload-btn">파일 선택</button>
      <span>{{ fileName[6] }}</span>

      <button @click="handleFileUpload(7)" class="upload-btn">파일 선택</button>
      <span>{{ fileName[7] }}</span>
        </div>
        <button class="submit-button"><router-link to="/RecipeMenu">제출하기</router-link></button>          
      </section>
    </div>
  </template>
  
  <script>
  export default {
data() {
  return {
    fileName: ['', '', '', '', '', '', ''], // 파일 이름을 저장할 배열
  };
},
methods: {
  handleFileUpload(index) {
    // 파일을 선택하는 로직
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    
    fileInput.onchange = (event) => {
      const file = event.target.files[0];
      if (file) {
        this.fileName[index] = file.name;
      }
    };

    fileInput.click(); // 파일 선택 대화상자 열기
  }
}
};
  </script>
  
  <style scoped>
  /* 전체 스타일 */
  body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
  }
  
  /* 위 섹션 */
  .green-section {
    background-color: #6fbf73; /* 중간톤의 그린색 */
    padding: 20px;
    color: #fff;
  }
  
  .subsection {
    display: flex;
    margin-bottom: 20px;
  }
  
  .left {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .image {
    width: 100%;
    max-width: 200px;
    border-radius: 10px;
  }
  
  .right {
    flex: 2;
    padding-left: 20px;
  }
  
  .yellow-title {
    color: #ffd700; /* 노란색 타이틀 */
    margin-bottom: 10px;
  }
  
  .description {
    margin-bottom: 15px;
    line-height: 1.6;
  }
  
  /* 아래 섹션 */
  .upload-section {
    background-color: white;
    padding: 20px;
  }

  .upload-section h3 {
    margin-bottom: 20px;
  }

  .upload-buttons {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .upload-btn {
    background-color: lightgray;
    padding: 10px;
    width: 120px;
    text-align: center;
    cursor: pointer;
    border: none;
  }
  
  .submit-button {
    background-color: #ff7f7f; /* 연한 빨간색 */
    color: #fff;
    border: none;
    padding: 15px 30px;  
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    margin-top: 20px;
    width: 50%;
  }
  </style>
  
  
  
  
  