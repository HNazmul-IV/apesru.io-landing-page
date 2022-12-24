<script lang="ts">
    import LoadingScreen from "./lib/LoadingScreen.svelte";
    import { slugs } from "./script/Router";
    import Footer from "./pages/Home/Footer.svelte";
    import { onMount, type SvelteComponent } from "svelte";

    let HomePage: typeof SvelteComponent, EpzPage: typeof SvelteComponent, Navbar: typeof SvelteComponent;

    onMount(async () => {
        HomePage = (await import("./pages/Home/index.svelte")).default;
        EpzPage = (await import("./pages/Epz/index.svelte")).default;
        Navbar = (await import("./lib/Navbar.svelte")).default;
        await import("./script/element-details");
    });
</script>

<LoadingScreen />
<svelte:component this="{Navbar}" />
<main>
    {#if $slugs[0] === "epz"}
        <svelte:component this="{EpzPage}" />
    {:else}
        <svelte:component this="{HomePage}" />
    {/if}
</main>
<Footer />
