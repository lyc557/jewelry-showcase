import { createStore } from 'vuex'

export default createStore({
  state: {
    jewelryItems: [
      {
        id: 1,
        name: '星光钻石项链',
        description: '18K金镶嵌天然钻石，优雅设计',
        price: 15999,
        category: 'necklace',
        image: '/images/necklace-1.jpg',
        material: '18K金、天然钻石',
        weight: '3.5克',
        size: '40cm',
        stock: 5
      },
      {
        id: 2,
        name: '蓝宝石戒指',
        description: '皇室品质蓝宝石，尊贵典雅',
        price: 28999,
        category: 'ring',
        image: '/images/ring-1.jpg',
        material: '18K金、天然蓝宝石',
        weight: '2.8克',
        size: '13号',
        stock: 3
      }
    ],
    favorites: [],
    cart: [],
    filters: {
      category: '',
      priceRange: '',
      sortBy: 'default'
    }
  },
  
  getters: {
    filteredJewelry: (state) => {
      let result = [...state.jewelryItems]
      
      if (state.filters.category) {
        result = result.filter(item => item.category === state.filters.category)
      }
      
      if (state.filters.priceRange) {
        const [min, max] = state.filters.priceRange.split('-').map(Number)
        result = result.filter(item => {
          if (max) {
            return item.price >= min && item.price <= max
          }
          return item.price >= min
        })
      }
      
      switch (state.filters.sortBy) {
        case 'price-asc':
          result.sort((a, b) => a.price - b.price)
          break
        case 'price-desc':
          result.sort((a, b) => b.price - a.price)
          break
      }
      
      return result
    },
    
    favoriteItems: state => state.favorites,
    cartItems: state => state.cart,
    cartTotal: state => state.cart.reduce((total, item) => total + item.price * item.quantity, 0)
  },
  
  mutations: {
    setFilter(state, { type, value }) {
      state.filters[type] = value
    },
    
    addToFavorites(state, jewelryId) {
      if (!state.favorites.includes(jewelryId)) {
        state.favorites.push(jewelryId)
      }
    },
    
    removeFromFavorites(state, jewelryId) {
      const index = state.favorites.indexOf(jewelryId)
      if (index > -1) {
        state.favorites.splice(index, 1)
      }
    },
    
    addToCart(state, { jewelryId, quantity = 1 }) {
      const existingItem = state.cart.find(item => item.id === jewelryId)
      if (existingItem) {
        existingItem.quantity += quantity
      } else {
        const jewelry = state.jewelryItems.find(item => item.id === jewelryId)
        state.cart.push({
          ...jewelry,
          quantity
        })
      }
    },
    
    removeFromCart(state, jewelryId) {
      const index = state.cart.findIndex(item => item.id === jewelryId)
      if (index > -1) {
        state.cart.splice(index, 1)
      }
    },
    
    updateCartQuantity(state, { jewelryId, quantity }) {
      const item = state.cart.find(item => item.id === jewelryId)
      if (item) {
        item.quantity = quantity
      }
    }
  },
  
  actions: {
    // eslint-disable-next-line no-unused-vars
    async fetchJewelryItems({ commit }) {
      try {
        // 这里可以添加实际的API调用
        // const response = await axios.get('/api/jewelry')
        // commit('setJewelryItems', response.data)
      } catch (error) {
        console.error('Error fetching jewelry items:', error)
      }
    },
    
    toggleFavorite({ state, commit }, jewelryId) {
      if (state.favorites.includes(jewelryId)) {
        commit('removeFromFavorites', jewelryId)
      } else {
        commit('addToFavorites', jewelryId)
      }
    }
  }
}) 