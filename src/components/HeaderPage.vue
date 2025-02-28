<template>
  <header class="header">
    <nav>
      <div class="logo">奢华珠宝</div>
      <ul class="nav-links">
        <li><router-link to="/">首页</router-link></li>
        <li><router-link to="/collections">系列</router-link></li>
        <li><router-link to="/about">品牌故事</router-link></li>
        <li><router-link to="/contact">联系我们</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.header {
  background: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  padding: 1rem 2rem;
}

.nav-links {
  display: flex;
  gap: 2rem;
  list-style: none;
}
</style> 