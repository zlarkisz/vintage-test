import SubmitApi from "@/services/submit.service";

export default class ApiService {
  constructor({ $axios }) {
    this.SubmitApi = new SubmitApi($axios);
  }
}
