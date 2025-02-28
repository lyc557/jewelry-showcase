<template>
  <div class="collections">
    <div class="collections-header">
      <h1>珠宝系列</h1>
      <div class="filters">
        <select v-model="selectedCategory" class="filter-select">
          <option value="">所有类别</option>
          <option value="necklace">项链</option>
          <option value="ring">戒指</option>
          <option value="earring">耳饰</option>
          <option value="bracelet">手链</option>
        </select>
        <select v-model="selectedPrice" class="filter-select">
          <option value="">所有价格</option>
          <option value="0-5000">￥5000以下</option>
          <option value="5000-20000">￥5000-20000</option>
          <option value="20000+">￥20000以上</option>
        </select>
      </div>
    </div>

    <div class="jewelry-grid">
      <JewelryCard
        v-for="item in filteredJewelry"
        :key="item.id"
        :jewelry="item"
        @click="viewDetail(item.id)"
      />
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
      selectedCategory: '',
      selectedPrice: '',
      jewelryItems: [
        {
          id: 1,
          name: '星光钻石项链',
          description: '18K金镶嵌天然钻石，优雅设计',
          price: 15999,
          category: 'necklace',
          image: '/images/necklace-1.jpg'
        },
        {
          id: 2,
          name: '蓝宝石戒指',
          description: '皇室品质蓝宝石，尊贵典雅',
          price: 28999,
          category: 'ring',
          image: '/images/ring-1.jpg'
        },
        // 添加更多珠宝项目
      ]
    }
  },
  computed: {
    filteredJewelry() {
      return this.jewelryItems.filter(item => {
        const categoryMatch = !this.selectedCategory || item.category === this.selectedCategory
        let priceMatch = true
        
        if (this.selectedPrice) {
          const [min, max] = this.selectedPrice.split('-').map(Number)
          if (max) {
            priceMatch = item.price >= min && item.price <= max
          } else {
            priceMatch = item.price >= min
          }
        }
        
        return categoryMatch && priceMatch
      })
    }
  },
  methods: {
    viewDetail(id) {
      this.$router.push(`/collections/${id}`)
    }
  }
}
</script>

<style scoped>
.collections {
  padding: 2rem;
}

.collections-header {
  margin-bottom: 2rem;
  text-align: center;
}

.filters {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 1rem 0;
}

.filter-select {
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-width: 150px;
}
</style> 