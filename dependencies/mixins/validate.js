import constants from "../constants";

export default {
  methods: {
    validate(data) {
      if (data.isValidate && data.rule) {
        switch (data.rule) {
          case "name": {
            const length = data.value.length;
            length <= constants.VALIDATION_MIN_INPUT ||
            length > constants.VALIDATION_MAX_INPUT
              ? this.errors.push("name")
              : null;
            break;
          }
          case "email": {
            const isEmail = constants.VALIDATION_EMAIL.test(data.value);
            !isEmail ? this.errors.push("email") : null;
            break;
          }
          case "phone": {
            const length = data.value.length;
            length !== constants.VALIDATION_MIN_PHONE
              ? this.errors.push("phone")
              : null;
            break;
          }
          case "checkbox": {
            !data.value ? this.errors.push("checkbox") : null;
            break;
          }
        }
      }
    }
  }
};
