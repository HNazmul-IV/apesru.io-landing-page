<script lang="ts">
    import { onMount } from "svelte";
    import { roadmapImgData as roadmapData, roadmapSpacerHeight } from "../../mocks/roadmapData";
    import LOGO from "../../assets/images/logo.png";
    import IMG_FLYING_PAPER from "../../assets/images/flying-paper.gif";
    import { css_genartaing } from "../../out/cssGenaration";

    let intersectionObserverCallback: IntersectionObserverCallback = function (entries: IntersectionObserverEntry[], observer: IntersectionObserver) {
        const ANIMATION_CLASSNAME = `in-viewport`;

        entries.forEach((element: IntersectionObserverEntry) => {
            if (element.isIntersecting) {
                element.target.classList.add(ANIMATION_CLASSNAME);
            } else if (!element.isIntersecting) {
                element.target.classList.remove(ANIMATION_CLASSNAME);
            }
        });
    };

    onMount(() => {
        let interSectionObserver = new IntersectionObserver(intersectionObserverCallback, { rootMargin: `50% 0px -${window.innerHeight * 0.5}px 0px` });
        document.querySelectorAll(".roadmap-images__image-card").forEach((element) => interSectionObserver.observe(element));
    });

    onMount(css_genartaing);
</script>

<section id="roadmap">
    <div class="roadmap-title pb-5 text-center">
        <div class="logo">
            <img src="{LOGO}" class="w-100" alt="" />
        </div>
        <h1 class="title text-black text-uppercase">Roadmap 2.0</h1>
        <div class="flying-paper ">
            <img loading="lazy" src="{IMG_FLYING_PAPER}" class="w-100" alt="" />
        </div>
    </div>

    <div class="roadmap-images__container">
        <div class="roadmap-images__wrapper">
            {#each roadmapData as roadmap}
                <div class="roadmap-images__image-card {roadmap.name}">
                    <img src="{roadmap.img}" alt="" />
                </div>
            {/each}
            {#each ["middle", "bottom"] as fly_paper_class}
                <div class="roadmap-images__flying-paper {fly_paper_class}">
                    <img loading="lazy" class="" src="{IMG_FLYING_PAPER}" alt="" />
                </div>
            {/each}
        </div>
    </div>
</section>

<style lang="scss">
    @use "../../styles/pageHome" as main;
    @include main.section-roadmap();
</style>
