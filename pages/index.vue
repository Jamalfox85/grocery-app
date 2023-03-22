<template lang="">
  <div>
    <NuxtLayout>
      <div class="main_wrapper">
        <h1>test</h1>
      </div>
      <!-- <h1>Home Page</h1>
    <button @click="userLogout">Logout</button>
    <NuxtLink to="/login">Login page</NuxtLink> -->
      <!-- <topPanel />
    <sidePanel /> -->
    </NuxtLayout>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: "auth",
});
</script>
<style lang="scss">
.main_wrapper {
  height: 2090px;
  // position: absolute;
  // left: 50%;
}
</style>
