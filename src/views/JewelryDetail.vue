<template>
  <div class="jewelry-detail" v-if="jewelry">
    <div class="detail-container">
      <div class="image-section">
        <img :src="jewelry.image" :alt="jewelry.name">
        <div class="image-thumbnails">
          <img 
            v-for="(image, index) in jewelry.additionalImages" 
            :key="index"
            :src="image"
            @click="jewelry.image = image"
            class="thumbnail"
          >
        </div>
      </div>
      
      <div class="info-section">
        <h1>{{ jewelry.name }}</h1>
        <p class="price">￥{{ jewelry.price.toLocaleString() }}</p>
        <div class="description">
          <h3>商品描述</h3>
          <p>{{ jewelry.description }}</p>
        </div>
        
        <div class="specifications">
          <h3>商品规格</h3>
          <ul>
            <li>材质：{{ jewelry.material }}</li>
            <li>重量：{{ jewelry.weight }}</li>
            <li>尺寸：{{ jewelry.size }}</li>
          </ul>
        </div>
        
        <div class="actions">
          <button class="btn-primary">预约鉴赏</button>
          <button class="btn-secondary">加入收藏</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jewelry: null
    }
  },
  created() {
    // 模拟从API获取数据
    this.jewelry = {
      id: this.$route.params.id,
      name: '星光钻石项链',
      price: 15999,
      description: '这款星光钻石项链采用18K金镶嵌天然钻石，设计灵感来自璀璨星空。完美切割的钻石在灯光下闪耀出迷人的光芒，项链整体设计优雅大方，是日常佩戴和重要场合的理想之选。',
      material: '18K金、天然钻石',
      weight: '3.5克',
      size: '40cm（可调节）',
      image: '/images/necklace-1.jpg',
      additionalImages: [
        '/images/necklace-1-detail1.jpg',
        '/images/necklace-1-detail2.jpg',
        '/images/necklace-1-detail3.jpg'
      ]
    }
  }
}
</script>

<style scoped>
.jewelry-detail {
  padding: 2rem;
}

.detail-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.image-section img {
  width: 100%;
  border-radius: 8px;
}

.image-thumbnails {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.thumbnail {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 4px;
  cursor: pointer;
}

.info-section {
  padding: 1rem;
}

.price {
  font-size: 1.5rem;
  color: var(--primary-color);
  margin: 1rem 0;
}

.actions {
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
}

.btn-primary, .btn-secondary {
  padding: 1rem 2rem;
  border-radius: 4px;
  border: none;
  cursor: pointer;
}

.btn-primary {
  background: var(--primary-color);
  color: white;
}

.btn-secondary {
  background: white;
  border: 1px solid var(--primary-color);
  color: var(--primary-color);
}
</style> 