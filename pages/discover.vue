<template lang="">
  <div>
    <NuxtLayout>
      <div class="discover_wrapper">
        <div class="discover-header">
          <h1 class="discover-title">Discover</h1>
          <form @submit.prevent="handleSearch" class="discover-search">
            <input class="search-input" type="text" v-model="pendingSearch" />
            <button class="submit-search" type="submit">
              <Icon name="ic:round-search" />
            </button>
          </form>
        </div>
        <div class="discover-main" v-if="!searchTerm">
          <recipeCarousel
            class="carousel_wrapper"
            :title="'Featured Recipes'"
          />
          <recipeCarousel :title="'Quick & Easy Recipes'" />
          <recipeCarousel :title="'Vegan Dishes'" />
          <!-- <recipeCard /> -->
        </div>
        <div class="discover-main-search" v-else>
          <Icon
            class="cancel-search"
            name="ic:baseline-cancel"
            @click="resetResults()"
          />Search term:
          {{ searchTerm }}
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchTerm: "",
      pendingSearch: "",
    };
  },
  methods: {
    handleSearch() {
      this.searchTerm = this.pendingSearch;
      this.pendingSearch = "";
    },
    resetResults() {
      this.searchTerm = "";
    },
  },
};
</script>
<style lang="scss" scoped>
.discover_wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  .discover-header {
    height: 40px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2em;
    .discover-title {
      color: #0f084b;
      font-weight: 900;
      font-size: 2em;
    }
    .discover-search {
      display: flex;
      width: 300px;
      height: 2em;
      border-radius: 8px;
      .search-input {
        width: 80%;
        height: 100%;
        padding: 0 0.5em;
        border-radius: 8px;
        border: solid 2px #0f084b;
      }
      .submit-search {
        width: 20%;
        height: 100%;
        background-color: #0f084b;
        color: #baff29;
        display: flex;
        border-radius: 8px;
        margin-left: 0.5em;
        svg {
          font-size: 2em;
          margin: auto;
        }
      }
    }
  }
  .discover-main {
    .carousel_wrapper {
      margin-bottom: 2em;
    }
  }
  .discover-main-search {
    display: flex;
    align-items: center;
    .cancel-search {
      margin-right: 0.5em;
      font-size: 1.25em;
      cursor: pointer;
      &:hover {
        color: #7a28cb;
      }
    }
  }
}
</style>
