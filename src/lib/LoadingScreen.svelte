<script lang="ts">
    import { onMount } from "svelte";
    import IMG_WALKING_MONKEY from "../assets/gif/walking-monkey.gif";
    let gsap: GSAP,
        progressbarInner: HTMLSpanElement,
        startAnimation = false,
        progressFinish: boolean = false,
        animationFinished = false,
        isWindowLoaded: boolean = false;

    $: if (startAnimation) {
        animate();
    }

    //For Quick Selecting HTMLElement;
    const select = <T>(query: string): T => document.querySelector(query) as any;

    function animate() {
        let tl = gsap.timeline({ defaults: { duration: 0.5 } });
        tl.to(".loading-screen__content", { opacity: 0 })
            .to(".loading-screen__content-outer", { y: `-100vh`, duration: 0.7, ease: "power2.out" }, "<80%")
            .to(".loading-screen", { y: `-100vh`, duration: 0.7, ease: "power3.out", onComplete: () => (progressFinish = false) }, "<80%");
    }

    function handleProgress() {
        //Event on ProgressBar animation Finished;
        select<HTMLSpanElement>(".progress-bar-inner").addEventListener("animationend", function () {
            animationFinished = true;
            if (isWindowLoaded || document.readyState === "complete") {
                startAnimation = true;
            }
        });
        window.addEventListener("load", () => {
            if (startAnimation === false) return (startAnimation = true);
            return;
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
                    <p class="loading-text">ApesRUs Loading ...</p>
                </div>
                <div class="loading-screen__loading-progress">
                    <!-- <div class="progress-bar"><span class="progress-bar-inner" style="animation-duration: {netEffectiveType === '3g' ? '15s' : netEffectiveType === '2g' ? '25s' : '5s'}"></span></div> -->
                    <div class="progress-bar"><span class="progress-bar-inner" style="animation-duration: 3s"></span></div>
                </div>
            </div>
        </div>
    </div>
{/if}

<style lang="scss">
    @use "../styles/component" as component;
    @include component.loadingScreen();
</style>
