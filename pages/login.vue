<template lang="">
  <div class="login_wrapper">
    <div class="login-left">
      <div class="app-logo">Grocery App</div>
      <!--Create Account Side -->
      <div class="create-account-group">
        <div class="header">
          <h1 class="text-4xl">Create an account</h1>
          <h2>Let's start saving you money today!</h2>
        </div>
        <div class="form"></div>
        <div class="buttons">
          <button class="create-account-bttn">
            <p>Create Account</p>
          </button>
          <button class="google-bttn">
            <Icon name="logos:google-icon" />
            <p>Continue with Google</p>
          </button>
          <button class="apple-bttn">
            <Icon name="uil:apple" />
            <p>Continue with Apple</p>
          </button>
        </div>
      </div>
    </div>
    <div class="login-right">
      <div class="switch-to-login-bttn">Log In</div>
      <img class="spiral-img" src="../assets/images/spiral.svg" />
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.login_wrapper {
  height: 100vh;
  width: 100%;
  padding: 1em;
  display: flex;
  .login-left {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    .app-logo {
      margin-bottom: 4em;
    }
    .create-account-group {
      margin-left: 1em;
      padding: 1em;
      .header {
        margin-bottom: 2em;
      }
      .form {
        height: 30vh;
        width: 100%;
        border: solid 2px green;
        margin-bottom: 2em;
      }
      .buttons {
        display: flex;
        flex-direction: column;
        align-items: center;
        .create-account-bttn,
        .google-bttn,
        .apple-bttn {
          height: 60px;
          width: 70%;
          border-radius: 48px;
          background-color: #baff29;
          display: flex;
          margin: 0.5em 0;
          font-weight: bold;
          display: flex;
          justify-content: center;
          align-items: center;
          p {
            font-size: 16px;
          }
          svg {
            font-size: 1.5em;
            margin-right: 0.25em;
          }
        }
        .google-bttn {
          background-color: #fff;
          border: solid 1px #888;
          font-weight: normal;
        }
        .apple-bttn {
          background-color: #000;
          color: #fff;
          font-weight: normal;
        }
      }
    }
  }
  .login-right {
    height: 100%;
    width: 60%;
    background-color: #0f084b;
    border-radius: 48px;
    margin-left: auto;
    padding: 1em;
    display: flex;
    position: relative;
    overflow: hidden;
    .switch-to-login-bttn {
      background-color: #baff29;
      border-radius: 48px;
      width: fit-content;
      padding: 0.75em 1.5em;
      margin: 0 0 auto auto;
      font-weight: bold;
    }
    .spiral-img {
      position: absolute;
      width: 100%;
      animation: rotate 5s normal linear infinite;
    }
  }
}

@keyframes rotate {
  0% {
    -webkit-transform: rotate3d(0, 0, 1, 0deg);
    transform: rotate3d(0, 0, 1, 0deg);
  }
  25% {
    -webkit-transform: rotate3d(0, 0, 1, 90deg);
    transform: rotate3d(0, 0, 1, 90deg);
  }
  50% {
    -webkit-transform: rotate3d(0, 0, 1, 180deg);
    transform: rotate3d(0, 0, 1, 180deg);
  }
  75% {
    -webkit-transform: rotate3d(0, 0, 1, 270deg);
    transform: rotate3d(0, 0, 1, 270deg);
  }
  100% {
    -webkit-transform: rotate3d(0, 0, 1, 360deg);
    transform: rotate3d(0, 0, 1, 360deg);
  }
}
</style>
