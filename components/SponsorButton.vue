<template>
  <a 
    href="https://ifdian.net/order/create?user_id=8a03ea64ebc211ebad0e52540025c377" 
    target="_blank" 
    class="sponsor-button"
  >
    <img 
      width="200" 
      src="https://pic1.afdiancdn.com/static/img/welcome/button-sponsorme.png" 
      alt="赞助作者" 
    />
  </a>
</template>

<style scoped>
.sponsor-button {
  display: flex;
  align-items: center;
  margin-left: 16px;
}

.sponsor-button img {
  height: 32px;
  width: auto; /* 保持图片比例 */
}

/* 移动端适配 */
@media (max-width: 768px) {
  .sponsor-button {
    display: none; /* 在小屏幕上隐藏 */
  }
}
</style>