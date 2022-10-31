<script lang="ts">
    import { onMount } from "svelte";
    import IMG_1 from "../../assets/images/artwork-gallery-img (3).png";
    import IMG_2 from "../../assets/images/artwork-gallery-img (4).png";
    import IMG_3 from "../../assets/images/artwork-gallery-img (5).png";
    import IMG_4 from "../../assets/images/artwork-gallery-img (6).png";
    import IMG_5 from "../../assets/images/artwork-gallery-img (7).png";
    import IMG_6 from "../../assets/images/artwork-gallery-img (8).png";
    import IMG_7 from "../../assets/images/artwork-gallery-img (9).png";
    import IMG_8 from "../../assets/images/artwork-gallery-img (10).png";

    const images = [
        {
            image: IMG_3,
            gridColumn: "1 / 6",
            gridRow: "1 / 5",
            class: "object-start",
        },
        {
            image: IMG_1,
            gridColumn: " 6 / 9",
            gridRow: "1 / 5",
            class: "object-top",
        },
        {
            image: IMG_7,
            gridColumn: "9 / 13",
            gridRow: "1 / 7",
            class: "object-start",
        },
        {
            image: IMG_2,
            gridColumn: "1 / 6",
            gridRow: "5 / 11 ",
            class: "",
        },
        {
            image: IMG_5,
            gridColumn: "6 / 13",
            gridRow: "7 / 11",
            class: "",
        },
        {
            image: IMG_6,
            gridColumn: "1 / 8",
            gridRow: "11 / 17",
            class: "",
        },
        {
            image: IMG_4,
            gridColumn: "8 / 13",
            gridRow: "11 / 17",
            class: "object-top",
        },
        {
            image: IMG_8,
            gridColumn: "6 / 9",
            gridRow: "5 / 7",
            class: "object-top rounded-2",
        },
    ];
</script>

<section id="artwork-gallery">
    <div class="artwork-gallery-container">
        <div class="artwork-gallery-grid">
            {#each images as image, index}
                <div class="artwork-gallery-img-card card-{index + 1} {image.class}" style="">
                    <img src="{image.image}" loading="{'lazy'}" alt="ApesRus Branding" />
                </div>
            {/each}
        </div>
    </div>
</section>

<style lang="scss">
    @use "../../styles/pageHome" as main;
    @include main.section-artwork-gallery;
</style>
