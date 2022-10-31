<script lang="ts">
    import { onMount } from "svelte";
    import galleryData from "../../mocks/galleryData";

    const ACTIVE_CLASS = "active";
    const prevActiveElement = () => document.querySelector(".nft-gallery-img-card.nft." + ACTIVE_CLASS);

    function imgToScreen(event: Event) {
        prevActiveElement()?.classList.remove?.(ACTIVE_CLASS);
        this.classList.add(ACTIVE_CLASS);
    }
    function randomizeAppearUp() {
        try {
            let allElements = document.querySelectorAll("#nfts-gallery .nft-gallery-img-card.nft");
            let currentElement: number = 0;
            setInterval(function () {
                prevActiveElement?.()?.classList.remove(ACTIVE_CLASS);
                allElements[currentElement].classList.add(ACTIVE_CLASS);
                currentElement = currentElement >= allElements.length - 1 ? 0 : currentElement + 1;
            }, 3500);
        } catch (e) {
            console.error(e);
        }
    }

    onMount(function () {
        randomizeAppearUp();
    });
</script>

<section id="nfts-gallery">
    <div class="container-1920">
        <div class="gallery-area">
            <div class="gallery-wrapper__wrapper position-relative ">
                {#each $galleryData as data}
                    <div class="nft-gallery-img-card {data.class}" on:click="{imgToScreen}" style="left:{data.positionX}%; top:{data.positionY}%">
                        <img loading="{'lazy'}" src="{data.img}" alt="" />
                    </div>
                {/each}
            </div>
        </div>
    </div>
</section>

<style lang="scss">
    @use "../../styles/pageHome" as main;
    @include main.section-gallery();
</style>
