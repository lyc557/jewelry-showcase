<template>
  <div class="favorites">
    <h2>我的收藏</h2>
    <div v-if="favoriteJewelry.length === 0" class="empty-favorites">
      还没有收藏任何商品
    </div>
    <div v-else class="favorites-grid">
      <div v-for="item in favoriteJewelry" :key="item.id" class="favorite-item">
        <img :src="item.image" :alt="item.name">
        <div class="item-info">
          <h3>{{ item.name }}</h3>
          <p class="price">￥{{ item.price }}</p>
          <div class="actions">
            <button @click="addToCart(item.id)" class="add-to-cart">
              加入购物车
            </button>
            <button @click="removeFromFavorites(item.id)" class="remove-favorite">
              取消收藏
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapState(['jewelryItems']),
    ...mapGetters(['favoriteItems']),
    favoriteJewelry() {
      return this.jewelryItems.filter(item => 
        this.favoriteItems.includes(item.id)
      )
    }
  },
  methods: {
    addToCart(jewelryId) {
      this.$store.commit('addToCart', { jewelryId })
    },
    removeFromFavorites(jewelryId) {
      this.$store.commit('removeFromFavorites', jewelryId)
    }
  }
}
</script>

<style scoped>
.favorites {
  padding: 2rem;
}

.favorites-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.favorite-item {
  border: 1px solid #eee;
  border-radius: 8px;
  overflow: hidden;
}

.favorite-item img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.item-info {
  padding: 1rem;
}

.actions {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.add-to-cart, .remove-favorite {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.add-to-cart {
  background: var(--primary-color);
  color: white;
}

.remove-favorite {
  background: #ff4444;
  color: white;
}
</style> 