<template lang="">
  <FormKit
    type="form"
    id="createAccountForm"
    @submit="createAccount"
    submit-label="Create Account"
    :submit-attrs="{
      inputClass: 'create-account-form-submit',
    }"
  >
    <div class="form_wrapper">
      <FormKit
        type="text"
        name="first_name"
        id="first_name"
        validation="required"
        label="First Name"
        outer-class="form-input-wrapper half-row-input-group"
        inner-class="input-wrapper"
        label-class="label-text"
        help-class="help-text"
      />
      <FormKit
        type="text"
        name="last_name"
        id="last_name"
        validation="required"
        label="Last Name"
        outer-class="form-input-wrapper half-row-input-group"
        inner-class="input-wrapper"
        label-class="label-text"
        help-class="help-text"
      />
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
        validation="?length:8|required"
        label="Password"
        outer-class="form-input-wrapper half-row-input-group"
        inner-class="input-wrapper"
        label-class="label-text"
        help-class="help-text"
      />
      <FormKit
        type="password"
        name="password_confirm"
        id="password_confirm"
        validation="required|confirm"
        label="Confirm Password"
        outer-class="form-input-wrapper half-row-input-group"
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
    createAccount(formValues) {
      console.log(formValues);
      console.log("ACCOUNT CREATED");
      this.$formkit.reset("createAccountForm");
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
  &.half-row-input-group {
    width: 50%;
  }
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

.create-account-form-submit {
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
}

/* Text */
.label-text {
  font-size: 16px;
  font-weight: bold;
}

/* Error State */
.formkit-message {
  color: red;
}
[data-invalid] .label-text {
  color: red;
}
</style>
