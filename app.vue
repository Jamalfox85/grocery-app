<template>
  <div>
    <NuxtPage />
    <!-- <notifications /> -->
  </div>
</template>

<!-- RESOURCES TO REVISIT -->
<!-- ICON GUIDE: https://icones.js.org/ -->

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
* {
  font-size: 16px;
}
.metric {
  color: #0f084b;
  text-shadow: 1px 1px #baff29;
}
</style>
