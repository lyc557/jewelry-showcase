<template>
  <header class="header">
    <nav>
      <div class="logo-container">
        <div class="logo"></div>
        <div class="logo-text">祺合珠宝</div>

        <ul class="nav-links">
          <li><router-link to="/">首页</router-link></li>
          <li><router-link to="/collections">系列</router-link></li>
          <li><router-link to="/about">品牌故事</router-link></li>
          <li><router-link to="/contact">联系我们</router-link></li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.header {
  background: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  padding: 1rem 2rem;
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
}
</style> 