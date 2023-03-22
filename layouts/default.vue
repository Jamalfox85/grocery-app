<template lang="">
  <div class="layout_wrapper">
    <topPanel />
    <sidePanel />
    <div class="slot">
      <slot />
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.layout_wrapper {
  min-height: 100vh;
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.slot {
  display: flex;
  flex-grow: 1;
  padding: 2em;
  width: calc(100% - 200px);
}
</style>
