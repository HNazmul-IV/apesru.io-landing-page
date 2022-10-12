<script lang="ts">
    import IMG_HERO_BG from "../../assets/images/hero-bg.png";
    import IMG_HERO_MONKEY from "../../assets/images/hero-monkey.png";
    import IMG_HERO_TEXT from "../../assets/images/hero-text.png";
</script>

<header id="hero-section" class="mb-4">
    <div class="container-2k">
        <div class="hero-section-wrapper position-relative">
            <div class="header-bg">
                <img src="{IMG_HERO_BG}" alt="Apesrus hedare background" />
            </div>
            <div class="hero-monkey position-absolute">
                <img src="{IMG_HERO_MONKEY}" alt="" />
            </div>
        </div>
    </div>

    <div class="hero-text-wrapper">
        <div class="hero-text text-center">
            <img src="{IMG_HERO_TEXT}" alt="" draggable="false" />
            <h2 class="hero-text-subtitle text-uppercase">polychromatic primates.</h2>
        </div>
    </div>
</header>

<style lang="scss">
    @use "../../styles/pageHome" as main;
    @include main.section-hero();
</style>
