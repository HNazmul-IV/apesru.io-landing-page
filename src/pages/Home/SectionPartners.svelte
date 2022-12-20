<script lang="ts">
    import LOGO_1 from "../../assets/logos/wwf.png";
    import LOGO_2 from "../../assets/logos/the-sandbox.png";
    import LOGO_3 from "../../assets/logos/sothebys.png";
    import LOGO_4 from "../../assets/logos/superfarm.png";
    import LOGO_5 from "../../assets/logos/nifty-slab.png";
    import LOGO_6 from "../../assets/logos/hype.png";
    import LOGO_7 from "../../assets/logos/new-err.png";
    import LOGO_8 from "../../assets/logos/triton-poker.png";
    import LOGO_9 from "../../assets/logos/ismtoys.png";
    import LOGO_10 from "../../assets/logos/def-jam.png";
    import LOGO_11 from "../../assets/logos/obey.png";
    import LOGO_12 from "../../assets/logos/machinations.png";
    import IMG_PARTNER_TITLE from "../../assets/images/partner-title.png";

    const partners = [LOGO_1, LOGO_2, LOGO_3, LOGO_4, LOGO_5, LOGO_6, LOGO_7, LOGO_8, LOGO_9, LOGO_10, LOGO_11, LOGO_12];
</script>

<section id="partners">
    <div class="title text-center">
        <img loading="lazy" src="{IMG_PARTNER_TITLE}" alt="Partner Logo" />
    </div>
    <div class="partners-logo-container p-0 p-md-4">
        <div class="partners-logo-grid">
            {#each partners as partner}
                <div class="partner-logo">
                    <img loading="{'lazy'}" src="{partner}" alt="" />
                </div>
            {/each}
        </div>
    </div>
</section>

<style lang="scss">
    @use "../../styles/pageHome" as main;
    @include main.section-partners();
</style>
