<template>
  <a 
    href="/tipping"
    class="sponsor-button"
  >
    <svg width="200" height="50" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" rx="8" ry="8" fill="#9C27B0"/>
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" fill="white" font-weight="bold">打赏作者</text>
    </svg>
  </a>
</template>

<style scoped>
.sponsor-button {
  display: flex;
  align-items: center;
  margin-left: 16px;
  text-decoration: none;
}

.sponsor-button svg {
  height: 32px;
  width: auto;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .sponsor-button {
    display: none; /* 在小屏幕上隐藏 */
  }
}
</style>