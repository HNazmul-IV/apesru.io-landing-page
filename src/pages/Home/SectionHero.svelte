<script lang="ts">
    import { slugs } from "./../../script/Router";
    import IMG_HERO_BG from "../../assets/images/hero-bg.png";
    import IMG_HERO_MONKEY from "../../assets/images/hero-monkey.png";
    import IMG_WALKING_MONKEY from "../../assets/images/walking-monkey.gif";
    import IMG_LEFT_SIDE_MONKEY from "../../assets/images/hero-left-side-monkey.png";
    import IMG_RIGHT_SIDE from "../../assets/images/hero-right-side.png";
    import LOGO_APESRU from "../../assets/images/logo.png";

    export let id = "hero-section";
    export let page = "homepage";
    export let background = "https://cdn.discordapp.com/attachments/1019526578398572554/1044103510490370119/Landing_Animation.mp4";
    export let middleImg = IMG_HERO_MONKEY;
    export let underSection = false;
    export let _sectionClass = "";
    export let bgType: "img" | "video" = "video";
</script>

<header id="{id}" data-page="{page}" class=" {_sectionClass}">
    <div class="theme-border border-bottom">
        <div class="container-2k">
            <div class="hero-section-wrapper position-relative">
                <div class="header-bg">
                    {#if bgType === "img"}
                        <img src="{background}" alt="Apesrus hedare background" />
                    {:else if bgType === "video"}
                        <video class="header-bg-video" loop autoplay="{true}" muted="{true}" src="{background}"></video>
                    {/if}
                </div>

                <slot name="middle-img" />
                {#if false}
                    <div class="position-absolute text-white border bottom-0 start-0 w-100 border-white">
                        <div class="d-flex w-100 border border-danger justify-content-between align-items-end">
                            <div class="">
                                <!-- <img src="{IMG_LEFT_SIDE_MONKEY}" alt="apesru-monkey" /> -->
                            </div>
                            <div class="text-center">
                                <div class="">
                                    <img src="{LOGO_APESRU}" alt="" />
                                </div>
                                <div class="">
                                    <p>Apes Are the Best ?</p>
                                    <div class="text-warning">
                                        <h4 class="">Let's Go</h4>
                                        <h3 class="">ApesRu</h3>
                                    </div>
                                </div>
                                <div class="">
                                    <svg width="39" height="26" viewBox="0 0 39 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.499999 7.09091L19.4091 26L38.3182 7.09091L31.2273 5.64217e-07L19.4091 11.8182L7.59091 1.5974e-06L0.499999 7.09091Z" fill="white" fill-opacity="0.5"
                                        ></path>
                                    </svg>
                                </div>
                            </div>
                            <div class="">
                                <!-- <img src="{IMG_RIGHT_SIDE}" alt="apesru-light" /> -->
                            </div>
                        </div>
                    </div>
                {/if}
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
