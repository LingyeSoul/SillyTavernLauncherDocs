<template>
  <div class="copy-buttons-container">
    <div class="copy-buttons">
      <button 
        @click="copyToClipboard('http://dpurl.cn/5n9VXeOz', '美团链接')" 
        class="copy-button"
      >
        复制美团链接
      </button>
      <button 
        @click="copyToClipboard('(美团外卖)复制这条链接去微信/美团APP打开,#小程序://美团外卖/b732f85111a14b64b64107354edb3377', '美团口令')" 
        class="copy-button"
      >
        复制美团口令
      </button>
    </div>
    <transition name="notification">
      <div 
        v-if="showNotification" 
        class="copy-notification"
      >
        已复制{{ notificationLabel }}
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showNotification: false,
      notificationLabel: ''
    }
  },
  methods: {
    copyToClipboard(text, label) {
      navigator.clipboard.writeText(text).then(() => {
        this.notificationLabel = label;
        this.showNotification = true;
        
        setTimeout(() => {
          this.showNotification = false;
        }, 2000);
      }).catch(err => {
        console.error('复制失败: ', err);
      });
    }
  }
}
</script>

<style scoped>
.copy-buttons-container {
  position: relative;
}

.copy-buttons {
  margin-top: 10px;
}

.copy-button {
  display: inline-block;
  margin-right: 10px;
  padding: 10px 20px;
  background-color: #9C27B0;
  color: white;
  border: none;
  border-radius: 8px;
  font-family: Arial, sans-serif;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}

.copy-button:hover {
  opacity: 0.9;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(156, 39, 176, 0.3);
}

.copy-notification {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #4CAF50;
  color: white;
  padding: 16px 24px;
  border-radius: 8px;
  box-shadow: 0 6px 12px rgba(0,0,0,0.3);
  z-index: 1000;
  font-family: Arial, sans-serif;
  font-weight: bold;
  font-size: 18px;
}

/* Notification animations */
.notification-enter-active {
  animation: notification-in 0.3s ease-out forwards;
}

.notification-leave-active {
  animation: notification-out 0.3s ease-in forwards;
}

@keyframes notification-in {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.5);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}

@keyframes notification-out {
  0% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.5);
  }
}
</style>