<template>
  <div class="home">
    <div class="hero">
      <h1>精致珠宝，永恒之美</h1>
      <p>探索我们独特的珠宝系列</p>
    </div>
    
    <div class="featured-collection">
      <h2>精选系列</h2>
      <div class="jewelry-grid">
        <JewelryCard
          v-for="item in featuredItems"
          :key="item.id"
          :jewelry="item"
        />
      </div>
    </div>
  </div>
</template>

<script>
import JewelryCard from '@/components/JewelryCard.vue'

export default {
  components: {
    JewelryCard
  },
  data() {
    return {
      featuredItems: [
        {
          id: 1,
          name: '钻石项链',
          description: '18K金镶嵌天然钻石',
          price: '29999',
          image: '/images/necklace.jpg'
        },
        // 添加更多珠宝项目
      ]
    }
  }
}
</script> 