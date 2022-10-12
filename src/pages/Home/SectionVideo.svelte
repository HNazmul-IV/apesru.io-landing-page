<script lang="ts">
    import PlayPauseIcon from "../../assets/icon/play-pause-icon.svelte";
    import IMG_VIDEO_THUMB from "../../assets/images/video-thumbnail.png";
</script>

<section id="video-section">
    <div class="title py-5">
        <h1 class="display-2 text-center text-white mb-5">ApusRus video</h1>
    </div>

    <div class="video-area">
        <div class="video-container border mx-auto">
            <img loading="{'lazy'}" src="{IMG_VIDEO_THUMB}" alt="" />
            <div class="play-pause-icon">
                <PlayPauseIcon />
            </div>
        </div>
    </div>
</section>

<!-- 
    

 -->
<style lang="scss">
    @use "../../styles/pageHome" as main;
    @include main.section-video();
</style>
