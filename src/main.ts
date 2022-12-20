import "./styles/bootstrap.scss";
import "./styles/app.scss";
import "./styles/global.scss";
import "./lib/gsap-animations";
// import "bootstrap/js/dist/collapse";
import App from "./App.svelte";

const app = new App({
    target: document.body,
});

export default app;
