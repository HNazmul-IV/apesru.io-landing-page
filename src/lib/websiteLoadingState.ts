import { writable } from "svelte/store";

export const homePageLoadingState = writable([
    {
        component: "Hero",
        loaded: false,
    },
    {
        component: "About",
        loaded: false,
    },
    {
        component: "Roadmap",
        loaded: false,
    },
    {
        component: "",
        loaded: false,
    },
    {
        component: "",
        loaded: false,
    },
    {
        component: "",
        loaded: false,
    },
    {
        component: "",
        loaded: false,
    },
]);
