import { writable } from "svelte/store";

export const slugs = writable<string[]>(getSlugs());

export function getSlugs() {
    return window.location.pathname.split("/").slice(1);
}

export function navigate(path: string, state?: any) {
    window.history.pushState(state, null, path);
    slugs.set(getSlugs());
    console.log("🚀 ~ file: Router.ts ~ line 12 ~ navigate ~ getSlugs()", getSlugs());
}

export function hashNavigate(path: string, state?: any) {
    const { pathname, hash } = new URL(`${location.origin}${path}`);
    navigate(pathname, state);
    if (hash) {
        setTimeout(() => {
            console.log(hash);
            const a = document.createElement("a");
            a.href = hash;
            a.click();
        }, 100);
    }
}

addEventListener("popstate", function () {
    slugs.set(getSlugs());
    console.log("🚀 ~ file: Router.ts ~ line 17 ~ getSlugs", getSlugs());
});
