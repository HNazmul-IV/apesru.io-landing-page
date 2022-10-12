<script context="module" lang="ts">
    export function px_to_parcentage(containerWidth: number, elementWidth: number) {
        /**
         * x/100 = 350/1920
         * x = 100 *
         */
    }
</script>

<script lang="ts">
    import { onMount } from "svelte";
    import { roadmapImgData, roadmapSpacerHeight } from "../../mocks/roadmapData";

    let containerElement: HTMLDivElement = document.querySelector("roadmap-images__container");

    let callback: MutationCallback = (mutationList, observer) => {
        console.log(mutationList, observer);
    };

    onMount(() => {
        const observer = new MutationObserver(callback);
        observer.observe(containerElement, { childList: true, attributes: true, subtree: true, attributeOldValue: true, characterData: true, characterDataOldValue: true });
    });
</script>

<section id="roadmap">
    <div class="roadmap-title pb-5">
        <h1 class="text-uppercase text-center display-1 fw-bolder text-warning pb-5">Roadmap</h1>
    </div>

    <div class="roadmap-images">
        <div bind:this="{containerElement}" class="roadmap-images__container">
            <div class="road-images__container-spacer" style="--height:{roadmapSpacerHeight}vw"></div>
            <div class="position-absolute" style="width:19.875%"></div>
            {#each roadmapImgData as imageData}
                <div class="roadmap-images__image img-full {imageData.meta.class} {imageData.name}" >
                    <img loading="lazy" src="{imageData.img}" alt="" />
                </div>
            {/each}
        </div>
    </div>
</section>

<style lang="scss">
    @use "../../styles/pageHome" as main;
    @include main.section-roadmap();
</style>
