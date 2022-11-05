<script lang="ts">
    import IMG_HERO_BG from "../../assets/images/hero-bg.png";
    import IMG_HERO_MONKEY from "../../assets/images/hero-monkey.png";
    import IMG_WALKING_MONKEY from "../../assets/images/walking-monkey.gif";

    export let id = "hero-section";
    export let page = "homepage";
    export let bgImg = IMG_HERO_BG;
    export let middleImg = IMG_HERO_MONKEY;
    export let underSection = false;
    export let _sectionClass = "";
</script>

<header id="{id}" data-page="{page}" class=" {_sectionClass}">
    <div class="theme-border border-bottom">
        <div class="container-2k">
            <div class="hero-section-wrapper position-relative">
                <div class="header-bg">
                    <img src="{bgImg}" alt="Apesrus hedare background" />
                </div>

                <slot name="middle-img">
                    <div style="" class="hero-monkey position-absolute">
                        <img src="{middleImg}" alt="" />
                    </div>
                </slot>
            </div>
        </div>
    </div>

    {#if underSection}
        <div class="walking-monkey theme-border border-bottom">
            <div class="walking-monkey__area">
                <div class="walking-monkey__image">
                    <img src="{IMG_WALKING_MONKEY}" alt="" class="w-100" />
                </div>
                <div class="behind-text">
                    <h3 class="text text-muted">Apesru On the Go</h3>
                </div>
            </div>
        </div>
    {/if}

    <!-- <div class="hero-text-wrapper">
        <div class="hero-text text-center">
            <img src="{IMG_HERO_TEXT}" alt="" draggable="false" />
            <h2 class="hero-text-subtitle text-uppercase">polychromatic primates.</h2>
        </div>
    </div> -->
</header>

<style lang="scss">
    @use "../../styles/pageHome" as main;
    @include main.section-hero();
</style>
