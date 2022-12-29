<script lang="ts">
    import GlobalImageViewer from "../../lib/GlobalImageViewer.svelte";
    import { onMount, onDestroy } from "svelte";
    import galleryData, { type GalleryObject } from "../../mocks/galleryData";
    import { get } from "svelte/store";

    // Global Variables;
    let activeIndex = 0;
    let allElement: NodeListOf<HTMLDivElement>;
    let slidingAnimationFrame: number;
    const ACTIVE_CLASS = "active";
    let activeSlideObject = get(galleryData)[activeIndex];
    const prevActiveElements = () => document.querySelectorAll(".nft-gallery-img-card.nft." + ACTIVE_CLASS);

    function makeSlideActive(this: HTMLDivElement, event: Event) {
        prevActiveElements()?.forEach((element) => element.classList.remove?.(ACTIVE_CLASS));

        //Adding class after Previous one Removed;
        setTimeout(() => this.classList.add(ACTIVE_CLASS), 0);

        // getting active data from Clicked NFT item.
        activeSlideObject = JSON.parse(this.dataset.meta);
    }

    //Sliding Elment with Request Animation Frame;
    function elementSliding() {
        function animate() {
            setTimeout(function () {
                allElement[activeIndex]?.click?.();

                // keeping active index under all element Length;
                activeIndex = activeIndex >= allElement.length - 1 ? 0 : ++activeIndex;
                slidingAnimationFrame = window.requestAnimationFrame(animate);
            }, 3500);
        }
        slidingAnimationFrame = window.requestAnimationFrame(animate);
    }

    onMount(() => (allElement = document.querySelectorAll<HTMLDivElement>("#nft-collection .nft-gallery-img-card.nft")));
    onMount(elementSliding);

    onDestroy(() => window.cancelAnimationFrame(slidingAnimationFrame));
    onDestroy(() => (allElement = document.querySelectorAll("nahikuch")));
</script>

<section id="nft-collection">
    <div class="container-1920">
        <div class="gallery-area">
            <div class="gallery-wrapper__wrapper position-relative ">
                {#each $galleryData as data}
                    <div
                        class="nft-gallery-img-card {data.class}"
                        data-meta="{JSON.stringify(data)}"
                        title="{activeSlideObject.class !== data.class ? 'Click To View Larger' : ''}"
                        on:click="{activeSlideObject.class !== data.class && makeSlideActive}"
                        style="left:{data.positionX}%; top:{data.positionY}%">
                        <img loading="{'lazy'}" src="{data.img}" alt="" />
                    </div>
                {/each}
            </div>
        </div>
    </div>
</section>
<style lang="scss">
    @use "../../styles/pageHome" as main;
    @include main.section-nft-collection();
</style>
