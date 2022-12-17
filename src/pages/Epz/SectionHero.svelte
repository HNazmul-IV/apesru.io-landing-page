<script lang="ts">
    import HomePage_SectionHero from "./../Home/SectionHero.svelte";
    import IMG_HERO_BG from "../../assets/images/ezp-hero-bg.png";
    import IMG_HERO_MIDDLE from "../../assets/images/epz-hero-middle-img.png";
</script>

<!-- Using Homepage Hero section For Avoiding Duplication -->
<HomePage_SectionHero background="{IMG_HERO_BG}" bgType="img" page="epz" id="epz-hero" _sectionClass="mb-0">
    <svelte:fragment slot="middle-img">
        <div style="" class="hero-monkey position-absolute">
            <img src="{IMG_HERO_MIDDLE}" class="w-100" alt="" />
        </div>
    </svelte:fragment>
</HomePage_SectionHero>

<style lang="scss">
    @use "../../styles/pageEpz" as main;
    @include main.section-hero();
</style>
