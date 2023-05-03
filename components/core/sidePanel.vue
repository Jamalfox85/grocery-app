<template lang="">
  <div class="side_panel_wrapper">
    <nav class="side-navigation">
      <p :class="{ active: isActivePage('/') }" @click="switchPage('/')">
        <Icon name="material-symbols:home" />Home
      </p>
      <p
        :class="{ active: isActivePage('/discover', '/recipeDetails') }"
        @click="switchPage('/discover')"
      >
        <Icon name="material-symbols:search-rounded" />Discover
      </p>
      <p
        :class="{ active: isActivePage('/favorites') }"
        @click="switchPage('/favorites')"
      >
        <Icon name="material-symbols:star-rounded" />Favorites
      </p>
      <p
        :class="{ active: isActivePage('/myrecipes') }"
        @click="switchPage('/myrecipes')"
      >
        <Icon name="material-symbols:folder-rounded" />My Recipes
      </p>
      <p
        :class="{ active: isActivePage('/mycookbooks') }"
        @click="switchPage('/mycookbooks')"
      >
        <Icon name="material-symbols:menu-book " />My Cookbooks
        <!-- <Icon name="material-symbols:folder-rounded" />My Recipes -->
      </p>
      <p
        :class="{ active: isActivePage('/settings') }"
        class="settings"
        @click="switchPage('/settings')"
      >
        <Icon name="material-symbols:settings" />Settings
      </p>
      <p class="logout" @click="userLogout">
        <Icon name="material-symbols:exit-to-app" />Logout
      </p>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // pages: [
      //   {
      //     name: 'Home',
      //     route: '/',
      //     icon: 'material-symbols:home'
      //   },
      //   {
      //     name: 'Discover',
      //     route: '/discover',
      //     icon: 'material-symbols:search-rounded'
      //   },
      //   {
      //     name: 'Favorites',
      //     route: '/favorites',
      //     icon: 'material-symbols:star-rounded'
      //   },
      //   {
      //     name: 'My Recipes',
      //     route: '/myrecipes',
      //     icon: 'material-symbols:folder-rounded'
      //   },
      // ]
    };
  },
  methods: {
    isActivePage(route, subroute) {
      if (route === this.currentRoute || subroute === this.currentRoute) {
        return true;
      }
    },
    switchPage(path) {
      return navigateTo({ path: path });
    },
    async userLogout() {
      const { error } = await this.auth.signOut();
      if (error) return;
      await this.router.push("/login");
    },
  },
  setup() {
    const { auth } = useSupabaseClient();
    const router = useRouter();
    const currentRoute = router.currentRoute.value.path;
    return {
      auth,
      router,
      currentRoute,
    };
  },
};
</script>
<style lang="scss" scoped>
.side_panel_wrapper {
  position: sticky;
  height: calc(100vh - 60px); /* 60px = height of topBar */
  width: 200px;
  top: 60px; /* 60px = height of topBar */
  background-color: #0f084b;
  padding: 4em 0;
  &::after {
    content: "";
    height: 50px;
    width: 50px;
    position: absolute;
    top: -25px;
    right: -25px;
    border-radius: 50%;
    background-color: #0f084b;
  }
  .side-navigation {
    color: #fff;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    p {
      font-size: 1.25em;
      margin-bottom: 1.25em;
      display: flex;
      align-items: center;
      padding: 0.5em 1em;
      cursor: pointer;
      svg {
        font-size: 1.25em;
        margin-right: 8px;
      }
      &.active {
        background-color: #766ac1;
        color: #baff29;
      }
      &:hover {
        color: #baff29;
      }
    }
    .settings {
      margin-top: auto;
    }
  }
}
</style>
