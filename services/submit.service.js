import constants from "@/dependencies/constants";
import BaseApi from "@/services/base.service";

export default class SubmitApi extends BaseApi {
  submitForm(payload) {
    return this.$axios.post(constants.API.SUBMIT_FORM, payload);
  }
}
