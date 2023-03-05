import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faSquare,
  faGrip,
  faMagnifyingGlass,
  faServer,
} from "@fortawesome/free-solid-svg-icons";

library.add(faSquare, faGrip, faMagnifyingGlass, faServer);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(store)
  .use(router)
  .mount("#app");
