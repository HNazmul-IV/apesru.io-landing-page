<script lang="ts">
    import { onMount, tick } from "svelte";
    import { slugs } from "./../../script/Router";
    import LOGO_APESRU from "../../assets/images/logo.png";
    import IMG_SPINNING_LOGO from "../../assets/images/spinning-logo.svg";
    import IMG_MOBILE_VIDEO_POSTER from "../../assets/images/mobile-video-poster.png";

    export let id = "hero-section";
    export let page = "homepage";
    export let background = "https://cdn.discordapp.com/attachments/1019526578398572554/1044103510490370119/Landing_Animation.mp4";
    export let underSection = false;
    export let _sectionClass = "";
    export let bgType: "img" | "video" = "video";
    let videoElement: null | HTMLVideoElement;

    async function changingVideoDynamically() {
        async function changeElement() {
            
            //Which Components Has video type it will Only set The Video Background;
            if (bgType === "video") {
                if (window.innerWidth < 575) {
                    videoElement.poster = IMG_MOBILE_VIDEO_POSTER;
                    await tick();
                    videoElement.src = "https://cdn.discordapp.com/attachments/1019526578398572554/1052918804918837339/Responsive_landing.mp4";
                } else {
                    videoElement.src = background;
                    videoElement.poster = "";
                }
            }
        }
        //If Device is Not a mobile Device then Event will call;
        if (/Mobi/.test(window.navigator.userAgent) !== true) window.addEventListener("resize", changeElement);
        changeElement();
    }

    onMount(changingVideoDynamically);
</script>

<header id="{id}" data-page="{page}" class=" {_sectionClass}">
    <div class="">
        <div class="container-2k-No">
            <div class="hero-section-wrapper position-relative">
                <div class="header-bg">
                    {#if bgType === "img"}
                        <img src="{background}" alt="Apesrus header background" />
                    {:else if bgType === "video"}
                        <video class="header-bg-video"  bind:this="{videoElement}" loop data-auto-play muted="{true}" src="{background}"> </video>
                    {/if}
                </div>

                <slot name="middle-img" />
                {#if $slugs[0] === ""}
                    <div class="spinner-logo d-sm-none">
                        <img src="{IMG_SPINNING_LOGO}" alt="" />
                    </div>
                    <div class="hero-bg-content">
                        <div class="logo home-page-hero-logo">
                            <img src="{LOGO_APESRU}" alt="" class="w-100" />
                        </div>
                        <div class="text text-center" data-gsap="header-lets-go-text">
                            <p class="white-text text-white mb-2">Creating Apes <br />Since 2012</p>
                            <p class="yellow-text text-warning mb-0">More <br />Aru</p>
                        </div>
                        <div class="text-center">
                            <svg data-gsap="heroSection-down-svg-arrow" class="down-svg" viewBox="0 0 39 26" fill="white" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.499999 7.09091L19.4091 26L38.3182 7.09091L31.2273 -1.51039e-07L19.4091 11.8182L7.59091 8.82139e-07L0.499999 7.09091Z" fill="inherit" fill-opacity="1">
                                </path>
                            </svg>
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
                    <!-- <img src="{IMG_WALKING_MONKEY}" alt="" class="w-100" /> -->
                </div>
                <div class="behind-text">
                    <h3 class="text text-muted">ApesRUs On the Go</h3>
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
