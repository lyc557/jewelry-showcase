<template>
  <div class="about">
    <div class="hero-about">
      <h1>品牌故事</h1>
    </div>
    
    <div class="content">
      <section class="brand-story">
        <h2>传承与创新</h2>
        <p>自1995年创立以来，我们始终致力于为追求卓越的人们打造独特的珠宝作品。每一件作品都凝聚着我们对完美的追求和对细节的执着。</p>
      </section>
      
      <section class="craftsmanship">
        <div class="text">
          <h2>匠心工艺</h2>
          <p>我们的每件珠宝都由经验丰富的工匠手工打造，从选材到成品，每个环节都严格把控，确保最优品质。</p>
        </div>
        <img src="/images/craftsmanship.jpg" alt="匠心工艺">
      </section>
      
      <section class="values">
        <h2>品牌价值</h2>
        <div class="value-grid">
          <div class="value-item">
            <h3>卓越品质</h3>
            <p>严选优质原材料，精心打造每件作品</p>
          </div>
          <div class="value-item">
            <h3>创新设计</h3>
            <p>融合传统与现代，创造独特风格</p>
          </div>
          <div class="value-item">
            <h3>真诚服务</h3>
            <p>专业团队，为您提供贴心服务</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.about {
  min-height: 100vh;
}

.hero-about {
  height: 40vh;
  background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('../assets/images/about-hero.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

section {
  margin: 4rem 0;
}

.craftsmanship {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
}

.value-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.value-item {
  text-align: center;
  padding: 2rem;
  background: #f9f9f9;
  border-radius: 8px;
}
</style> 