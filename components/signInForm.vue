<template lang="">
  <FormKit
    type="form"
    id="signInForm"
    @submit="signIn()"
    submit-label="Log In"
    :submit-attrs="{
      inputClass: 'log-in-form-submit',
    }"
  >
    <div class="form_wrapper">
      <FormKit
        type="text"
        name="email"
        id="email"
        validation="required|email"
        label="Email address"
        inner-class="input-wrapper"
        label-class="label-text"
        help-class="help-text"
      />
      <FormKit
        type="password"
        name="password"
        id="password"
        validation="required"
        label="Password"
        outer-class="form-input-wrapper"
        inner-class="input-wrapper"
        label-class="label-text"
        help-class="help-text"
      />
    </div>
  </FormKit>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    signIn(formValues) {
      console.log(formValues);
      console.log("SIGNED IN");
      this.$formkit.reset("signInForm");
    },
  },
};
</script>
<style lang="scss">
/* Wrappers */
.form_wrapper {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2em;
}
.formkit-outer {
  width: 100%;
}
.formkit-inner {
  width: 100%;
  padding: 1em;
  .formkit-input {
    border-bottom: solid 2px rgb(200, 198, 198);
    width: 100%;
    &:focus {
      border-bottom: solid 2px #000;
      outline: none;
    }
  }
}

.log-in-form-submit {
  height: 60px;
  width: 100%;
  border-radius: 48px;
  background-color: #baff29;
  display: flex;
  margin: 0.5em 0;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #9ee011;
    transition: 0.1s ease-in;
  }
}

/* Text */
.label-text {
  font-size: 16px;
  font-weight: bold;
}

/* Error State */
.formkit-message {
  color: red;
  font-size: 10px;
  margin-bottom: 12px;
}
[data-invalid] .label-text {
  color: red;
}
</style>
