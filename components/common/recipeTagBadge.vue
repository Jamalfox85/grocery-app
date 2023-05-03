<template lang="">
  <div v-for="tag in parseTags()" class="recipe-tag-badge">{{ tag }}</div>
</template>
<script>
export default {
  props: ["recipe"],
  data() {
    return {
      tags: [],
    };
  },
  methods: {
    parseTags() {
      let tagArray = [];
      if (this.recipe?.cheap) {
        tagArray.push("Cheap");
      }
      if (this.recipe?.dairyFree) {
        tagArray.push("Dairy Free");
      }
      if (this.recipe?.glutenFree) {
        tagArray.push("Gluten Free");
      }
      if (this.recipe?.sustainable) {
        tagArray.push("Sustainable");
      }
      if (this.recipe?.vegan) {
        tagArray.push("Vegan");
      }
      if (this.recipe?.vegetarian) {
        tagArray.push("Vegetarian");
      }
      if (this.recipe?.veryHealthy) {
        tagArray.push("Healthy");
      }
      if (this.recipe?.veryPopular) {
        tagArray.push("Popular");
      }
      return tagArray;
    },
  },
};
</script>
<style lang="scss" scoped>
.recipe-tag-badge {
  background-color: #baff29;
  color: #0f084b;
  padding: 4px 8px;
  margin-right: 8px;
  border: solid 2px #0f084b;
  border-radius: 8px;
  font-size: 10px;
  font-weight: bold;
}
</style>
