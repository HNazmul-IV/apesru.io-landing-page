<script lang="ts">
    import { scale } from "svelte/transition";
    import { onMount } from "svelte";
    import PlayPauseIcon from "../../assets/icon/play-pause-icon.svelte";
    import IMG_VIDEO_THUMB from "../../assets/images/video-thumbnail.png";
    import type { InterSectingDetails } from "../../script/element-details";

    let videoElement: HTMLVideoElement;
    let videoState: "play" | "pause" = "pause";
    let videoMuted = true;

    // const unMuteVideo = ((element:HTMLVideoElement) => element.muted = false)
    async function controlVideo() {
        let { addEvent } = await import("../../script/element-details");

        addEvent(videoElement, "intersecting", function (e: CustomEvent<InterSectingDetails>) {
            console.log(e.detail.isInterSecting);
            if (e.detail.isInterSecting) {
                videoElement.play();
                videoState = "play";
                setInterval(() => (videoMuted = false), 500);
            } else if (!e.detail.isInterSecting) {
                videoElement.pause();
                videoState = "pause";
            }
        });

        addEvent(videoElement, "play", () => (videoState = "play"));
        addEvent(videoElement, "pause", () => (videoState = "pause"));
        addEvent(videoElement, "ended", () => videoElement.load());
        addEvent(videoElement, "click", () => videoState === "play" && videoElement.pause());
    }

    try {
        onMount(controlVideo);
    } catch (e) {
        console.log(e);
    }
</script>

<section id="video">
    <div class="title py-0 py-md-5">
        <h1 class=" text-center text-black mb-5 text-uppercase">ApusRus video</h1>
    </div>
    <div class="video-area">
        <div class="video-container mx-auto">
            <!-- <img loading="{'lazy'}" src="{IMG_VIDEO_THUMB}" class="w-100" alt="" /> -->
            <video bind:this="{videoElement}" class="video observe" src="/assets/nft-promos.mp4" muted="{videoMuted}" data-case="observe" preload="auto" poster="{IMG_VIDEO_THUMB}">
                <track kind="captions" />
            </video>
            {#if videoState === "pause"}
                <div transition:scale class="play-pause-icon">
                    <PlayPauseIcon on:click="{() => (videoElement.play(), (videoElement.muted = false))}" />
                </div>
            {/if}
        </div>
    </div>
</section>

<style lang="scss">
    @use "../../styles/pageHome" as main;
    @include main.section-video();
</style>
