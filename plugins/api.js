import ApiService from "@/services/api.service";

export default (ctx, inject) => {
  const api = new ApiService({
    $axios: ctx.$axios
  });
  ctx.$api = api;
  inject("api", api);
};
