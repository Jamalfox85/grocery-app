<template lang="">
  <div class="top_panel_wrapper">
    <div class="logo">LOGO</div>
    <div class="panel-right">
      <div class="profile-bubble">
        <Icon name="ic:baseline-person" />
      </div>
      <div class="notification-bell">
        <Icon name="material-symbols:notifications-rounded" />
        <div class="unread-message"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    searchRecipes() {
      console.log("PING");
    },
  },
};
</script>
<style lang="scss" scoped>
.top_panel_wrapper {
  position: sticky;
  width: 100%;
  height: 60px;
  top: 0;
  background-color: #0f084b;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em 2em;
  z-index: 2;
  .logo {
    color: #baff29;
    font-weight: 900;
  }
  .panel-right {
    display: flex;
    align-items: center;
    .profile-bubble {
      height: 40px;
      width: 40px;
      background-color: #fff;
      border-radius: 50%;
      margin-right: 1em;
      display: flex;
      svg {
        width: 75%;
        height: 75%;
        margin: auto;
        color: #0f084b;
      }
    }
    .notification-bell {
      display: flex;
      position: relative;
      animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
      svg {
        margin: auto;
        font-size: 1.5em;
        color: #baff29;
      }
      .unread-message {
        height: 10px;
        width: 10px;
        border-radius: 50%;
        background-color: pink;
        position: absolute;
        top: 0;
        right: 0;
        animation: unread-message 1000ms;
        animation-iteration-count: infinite;
      }
    }
  }
}
@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
@keyframes unread-message {
  from {
    background-color: pink;
  }
  50% {
    background-color: hotpink;
  }
  to {
    background-color: pink;
  }
}
</style>
