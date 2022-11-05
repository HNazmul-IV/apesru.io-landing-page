<script lang="ts">
    import PlayPauseIcon from "../../assets/icon/play-pause-icon.svelte";
    import IMG_VIDEO_THUMB from "../../assets/images/video-thumbnail.png";
</script>

<section id="video">
    <div class="title py-0 py-md-5">
        <h1 class=" text-center text-black mb-5 text-uppercase">ApusRus video</h1>
    </div>

    <div class="video-area">
        <div class="video-container mx-auto">
            <!-- <img loading="{'lazy'}" src="{IMG_VIDEO_THUMB}" class="w-100" alt="" /> -->
            <video src="/assets/nft-promos.mp4" controls preload="auto" poster="{IMG_VIDEO_THUMB}" class="video">
                <track kind="captions" />
            </video>
            <div class="play-pause-icon">
                <PlayPauseIcon />
            </div>
        </div>
    </div>
</section>


<style lang="scss">
    @use "../../styles/pageHome" as main;
    @include main.section-video();
</style>
