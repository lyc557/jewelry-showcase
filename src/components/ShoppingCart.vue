<template>
  <div class="shopping-cart">
    <h2>购物车</h2>
    <div v-if="cartItems.length === 0" class="empty-cart">
      购物车是空的
    </div>
    <div v-else class="cart-items">
      <div v-for="item in cartItems" :key="item.id" class="cart-item">
        <img :src="item.image" :alt="item.name">
        <div class="item-details">
          <h3>{{ item.name }}</h3>
          <p class="price">￥{{ item.price }}</p>
          <div class="quantity-controls">
            <button @click="updateQuantity(item.id, item.quantity - 1)" :disabled="item.quantity <= 1">-</button>
            <span>{{ item.quantity }}</span>
            <button @click="updateQuantity(item.id, item.quantity + 1)">+</button>
          </div>
        </div>
        <button class="remove-btn" @click="removeItem(item.id)">删除</button>
      </div>
      
      <div class="cart-summary">
        <div class="total">
          总计: ￥{{ cartTotal }}
        </div>
        <button class="checkout-btn" @click="checkout">结算</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['cartItems', 'cartTotal'])
  },
  methods: {
    updateQuantity(jewelryId, quantity) {
      if (quantity > 0) {
        this.$store.commit('updateCartQuantity', { jewelryId, quantity })
      }
    },
    removeItem(jewelryId) {
      this.$store.commit('removeFromCart', jewelryId)
    },
    checkout() {
      // 实现结算逻辑
      alert('跳转到结算页面')
    }
  }
}
</script>

<style scoped>
.shopping-cart {
  padding: 2rem;
}

.cart-item {
  display: grid;
  grid-template-columns: 100px 1fr auto;
  gap: 1rem;
  padding: 1rem;
  border-bottom: 1px solid #eee;
  align-items: center;
}

.cart-item img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 4px;
}

.quantity-controls {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.quantity-controls button {
  padding: 0.5rem;
  border: 1px solid #ddd;
  background: white;
  cursor: pointer;
}

.remove-btn {
  color: red;
  border: none;
  background: none;
  cursor: pointer;
}

.cart-summary {
  margin-top: 2rem;
  text-align: right;
}

.total {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.checkout-btn {
  padding: 1rem 2rem;
  background: var(--primary-color);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style> 