<script lang="ts">
    import { onMount } from "svelte";
    import IMG_WALKING_MONKEY from "../assets/gif/walking-monkey.gif";
    let gsap: GSAP,
        progressbarInner: HTMLSpanElement,
        progressFinish: boolean = false,
        isWindowLoaded: boolean = false;

    //For Quick Selecting HTMLElement;
    const select = <T>(query: string): T => document.querySelector(query) as any;

    function animate() {
        let tl = gsap.timeline({ defaults: { duration: 0.5 } });
        tl.to(".loading-screen__gif > img", { y: -700, x: -260, opacity: 0.1, duration: 1.5, ease: "power3.out" })
            .to(".loading-text", { y: 100, opacity: 0, onComplete: () => (select<HTMLParagraphElement>(".loading-text").innerText = "Loading Finished.") }, "<")
            .to(".loading-text", { y: 0, opacity: 1 }, 1)
            .to(".loading-text", { y: `-${window.innerHeight}px`, opacity: 0, duration: 1 }, 3)
            .to(".progress-bar", { y: `400`, duration: 1, opacity: 0 }, "<")
            .to(".loading-screen", { y: `-${window.innerHeight}`, duration: 0.3, opacity: 0, pointerEvents: "none" })
            .fromTo("main", { opacity: 0, duration: 0.7 }, { opacity: 1, onComplete: () => (progressFinish = true) }, "<");
    }

    function handleProgress() {
        //Event on ProgressBar animation Finished;
        select<HTMLSpanElement>(".progress-bar-inner").addEventListener("animationend", function () {
            if (isWindowLoaded) {
                animate();
            } else {
                window.addEventListener("load", animate);
            }
        });
    }

    onMount(async () => {
        progressbarInner = document.querySelector(".progress-bar-inner");
        gsap = (await import("gsap")).default;

        //updating window loaded state
        window.addEventListener("load", () => (isWindowLoaded = true));
        handleProgress();
    });
</script>

{#if progressFinish === false}
    <div class="loading-screen">
        <div class="loading-screen__content-outer">
            <div class="loading-screen__content">
                <div class="loading-screen__gif">
                    <img src="{IMG_WALKING_MONKEY}" alt="" class="w-100" />
                    <p class="loading-text">ApesRu Loading ...</p>
                </div>
                <div class="loading-screen__loading-progress">
                    <div class="progress-bar"><span class="progress-bar-inner"></span></div>
                </div>
            </div>
        </div>
    </div>
{/if}

<style lang="scss">
    @use "../styles/component" as component;
    @include component.loadingScreen();
</style>
