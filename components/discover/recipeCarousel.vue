<template lang="">
  <div class="carousel_wrapper">
    <p class="carousel-header">{{ title }}</p>
    <div class="carousel-main">
      <recipeCard />
      <recipeCard />
      <recipeCard />
      <recipeCard />
      <recipeCard />
    </div>
  </div>
</template>
<script>
export default {
  props: ["title"],
};
</script>
<style lang="scss">
.carousel_wrapper {
  max-width: 100%;
  border-radius: 16px;
  padding: 0.5em 1.5em;
  position: relative;
  overflow: hidden;
  .carousel-header {
    font-size: 1.25em;
    margin-bottom: 0.5em;
    font-weight: bold;
    color: #0f084b;
  }
  .carousel-main {
    display: flex;
    overflow-x: scroll;
    // width: 1100px;
    position: relative;
    padding-bottom: 1em;
    & > * {
      margin-right: 0.5em;
    }
    /* width */
    &::-webkit-scrollbar {
      width: 10px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
      background: #0f084b;
      border-radius: 8px;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: #7a28cb;
      border-radius: 8px;
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
      background: #9b62d3;
      cursor: pointer;
    }
  }
}
</style>
