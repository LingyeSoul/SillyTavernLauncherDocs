<template>
  <div class="meituan-buttons-container">
    <div class="meituan-buttons">
      <button 
        @click="openMeituanApp" 
        class="meituan-button"
      >
        打开美团App领券
      </button>
    </div>
    <transition name="notification">
      <div 
        v-if="showNotification" 
        class="notification"
      >
        {{ notificationText }}
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showNotification: false,
      notificationText: '',
      meituanCode: '1 %复制信息#% 打开团App http:/¥1rMTc1ZmM4MTQ¥一起领'
    }
  },
  methods: {
    openMeituanApp() {
      // 先复制口令到剪贴板
      navigator.clipboard.writeText(this.meituanCode).then(() => {
        // 复制成功后显示提示
        this.notificationText = '已复制美团口令，正在打开美团App...';
        this.showNotification = true;
        
        // 稍微延迟一下再打开美团App，确保用户看到复制成功的提示
        setTimeout(() => {
          // 尝试打开美团App
          window.location.href = 'imeituan://www.meituan.com/home';
          
          // 如果App没有成功打开，2秒后隐藏通知
          setTimeout(() => {
            this.showNotification = false;
          }, 2000);
        }, 500);
      }).catch(err => {
        console.error('复制失败: ', err);
        // 复制失败时提示用户长按图片扫码领取
        this.notificationText = '复制失败，请长按图片使用美团App扫码领取';
        this.showNotification = true;
        
        setTimeout(() => {
          this.showNotification = false;
        }, 2000);
      });
    }
  }
}
</script>

<style scoped>
.meituan-buttons-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  margin: 20px 0;
}

.meituan-buttons {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.meituan-button {
  background-color: #9C27B0;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 20px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.meituan-button:hover {
  background-color: #7b1fa2;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.meituan-button:active {
  transform: translateY(0);
}

.notification {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 15px 25px;
  border-radius: 8px;
  font-size: 16px;
  z-index: 1000;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.notification-enter-active {
  transition: all 0.3s ease;
}

.notification-leave-active {
  transition: all 0.3s ease;
}

.notification-enter-from {
  opacity: 0;
  transform: translate(-50%, -50%) scale(0.8);
}

.notification-leave-to {
  opacity: 0;
  transform: translate(-50%, -50%) scale(0.8);
}
</style>