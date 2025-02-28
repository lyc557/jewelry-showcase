<template>
  <div class="contact">
    <h1>联系我们</h1>
    
    <div class="contact-container">
      <div class="contact-info">
        <h2>联系方式</h2>
        <div class="info-item">
          <i class="fas fa-phone"></i>
          <p>电话：400-888-8888</p>
        </div>
        <div class="info-item">
          <i class="fas fa-envelope"></i>
          <p>邮箱：service@jewelry.com</p>
        </div>
        <div class="info-item">
          <i class="fas fa-map-marker-alt"></i>
          <p>地址：上海市黄浦区南京东路123号</p>
        </div>
        
        <div class="business-hours">
          <h3>营业时间</h3>
          <p>周一至周日：10:00 - 22:00</p>
        </div>
      </div>
      
      <form class="contact-form" @submit.prevent="submitForm">
        <h2>预约咨询</h2>
        <div class="form-group">
          <label for="name">姓名</label>
          <input type="text" id="name" v-model="form.name" required>
        </div>
        
        <div class="form-group">
          <label for="phone">电话</label>
          <input type="tel" id="phone" v-model="form.phone" required>
        </div>
        
        <div class="form-group">
          <label for="email">邮箱</label>
          <input type="email" id="email" v-model="form.email" required>
        </div>
        
        <div class="form-group">
          <label for="message">咨询内容</label>
          <textarea id="message" v-model="form.message" rows="4" required></textarea>
        </div>
        
        <button type="submit" class="submit-btn">提交</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        phone: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    submitForm() {
      // 这里添加表单提交逻辑
      console.log('Form submitted:', this.form)
      alert('感谢您的咨询，我们会尽快与您联系！')
      this.form = {
        name: '',
        phone: '',
        email: '',
        message: ''
      }
    }
  }
}
</script>

<style scoped>
.contact {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.contact h1 {
  text-align: center;
  margin-bottom: 2rem;
}

.contact-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
}

.contact-info {
  padding: 2rem;
  background: #f9f9f9;
  border-radius: 8px;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0;
}

.contact-form {
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
}

input, textarea {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.submit-btn {
  background: var(--primary-color);
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
}

.submit-btn:hover {
  opacity: 0.9;
}

@media (max-width: 768px) {
  .contact-container {
    grid-template-columns: 1fr;
  }
}
</style> 