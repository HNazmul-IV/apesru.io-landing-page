<script lang="ts">
    import HomePage from "./pages/Home/index.svelte";
    import EpzPage from "./pages/Epz/index.svelte";
    import { slugs } from "./script/Router";
    import Navbar from "./lib/Navbar.svelte";
    import Footer from "./pages/Home/Footer.svelte";
    $: console.log($slugs);
</script>

<Navbar />
<main>
    {#if $slugs[0] === "epz"}
        <EpzPage />
    {:else}
        <HomePage />
    {/if}
</main>
<Footer />
