<script lang="ts">
    import GlobalImageViewer from "../../lib/GlobalImageViewer.svelte";
    import { onMount, onDestroy } from "svelte";
    import galleryData from "../../mocks/galleryData";
    
    // Global Variables;
    let activeIndex = 0;
    let allElement: NodeListOf<HTMLDivElement>;
    let slidingAnimationFrame: number;
    const ACTIVE_CLASS = "active";
    const prevActiveElements = () => document.querySelectorAll(".nft-gallery-img-card.nft." + ACTIVE_CLASS);

    function makeSlideActive(event: Event) {
        prevActiveElements()?.forEach((element) => element.classList.remove?.(ACTIVE_CLASS));
        setTimeout(() => this.classList.add(ACTIVE_CLASS), 0); //Adding class after Previous one Removed;
    }

    //Sliding Elment with Request Animation Frame;
    function elementSliding() {
        function animate() {
            setTimeout(function () {
                allElement[activeIndex]?.click?.();
                activeIndex = activeIndex >= allElement.length - 1 ? 0 : ++activeIndex; // keeping active index under all element Length;
                slidingAnimationFrame = window.requestAnimationFrame(animate);
            }, 3500);
        }
        slidingAnimationFrame = window.requestAnimationFrame(animate);
    }

    //On Mount
    onMount(() => (allElement = document.querySelectorAll<HTMLDivElement>("#nft-collection .nft-gallery-img-card.nft")));
    onMount(elementSliding);

    //On Destroy
    onDestroy(() => window.cancelAnimationFrame(slidingAnimationFrame));
    onDestroy(() => (allElement = document.querySelectorAll("nahikuch")));
</script>

<section id="nft-collection">
    <div class="container-1920">
        <div class="gallery-area">
            <div class="gallery-wrapper__wrapper position-relative ">
                {#each $galleryData as data}
                    <div class="nft-gallery-img-card {data.class}" on:click="{makeSlideActive}" style="left:{data.positionX}%; top:{data.positionY}%">
                        <img loading="{'lazy'}" src="{data.img}" alt="" />
                    </div>
                {/each}
            </div>
        </div>
    </div>
</section>

<!-- <GlobalImageViewer {...{sliderElement:""}}/> -->
<style lang="scss">
    @use "../../styles/pageHome" as main;
    @include main.section-nft-collection();
</style>
