<template>
  <div class="jewelry-card">
    <img :src="jewelry.image" :alt="jewelry.name">
    <div class="jewelry-info">
      <h3>{{ jewelry.name }}</h3>
      <p>{{ jewelry.description }}</p>
      <span class="price">￥{{ jewelry.price }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    jewelry: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.jewelry-card {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s;
}

.jewelry-card:hover {
  transform: translateY(-5px);
}

.jewelry-info {
  padding: 1rem;
}
</style> 