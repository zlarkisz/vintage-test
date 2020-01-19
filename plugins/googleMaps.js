import Vue from "vue";
import * as VueGoogleMaps from "~/node_modules/vue2-google-maps/src/main";

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyDRl-tkPA4q3k0ZTS8zWwghSLLIhzAEas0",
    libraries: "places"
  }
});
