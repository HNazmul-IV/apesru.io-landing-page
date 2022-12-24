import { writable } from "svelte/store";

export const slugs = writable<string[]>(getSlugs());

export function getSlugs() {
    return window.location.pathname.split("/").slice(1);
}

export function navigate(path: string, state?: any) {
    window.history.pushState(state, null, path);
    slugs.set(getSlugs());
}

export function hashNavigate(path: string, state?: any) {
    const { pathname, hash } = new URL(`${location.origin}${path}`);
    navigate(pathname, state);
    if (hash) {
        setTimeout(() => {
            const a = document.createElement("a");
            a.href = hash;
            a.click();
        }, 100);
    }
}

addEventListener("popstate", function () {
    slugs.set(getSlugs());
});
