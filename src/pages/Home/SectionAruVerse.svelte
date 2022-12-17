<script lang="ts">
    import IMG_ROTATING_HEAD_STATIC from "../../assets/images/rotating-head.png";
    import VIDEO_ROTATING_HEAD from "../../assets/video/rotating-head.mp4";
</script>

<section id="aru-verse" class="">
    <div class="title text-center">
        <h2 class="small-title text-white mb-0 mb-sm-2">Join us as we venture around</h2>
        <h1 class="main-title text-black text-uppercase">the ARUverse</h1>
    </div>

    <div class="gif-image-container">
        <div class="gif-image-wrapper pb-5">
            <div class="gif-image ">
                <video controls="{false}" class="w-100" src="{VIDEO_ROTATING_HEAD}" muted autoplay="{true}" loop="{true}" poster="{IMG_ROTATING_HEAD_STATIC}">
                    <track kind="captions" />
                </video>
            </div>
        </div>
    </div>
</section>

<style lang="scss">
    @use "../../styles/pageHome" as main;
    @include main.section-aru-verse;
</style>
