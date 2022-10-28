<script lang="ts">
    import { onMount } from "svelte";
    import { Swiper, SwiperSlide } from "swiper/svelte";
    import { Autoplay, Navigation } from "swiper";
    import type { SwiperOptions } from "swiper";
    import IMG_MEDIA_CARD_BG from "../../assets/images/media-card-bg.png";
    import IMG_MEDIA_LOVE_TITLE from "../../assets/images/media-love-title.png";
    import "swiper/css";

    let swiperOptions: SwiperOptions = {
        breakpoints: {
            400: {
                spaceBetween: 20,
                slidesPerView: 1.3,
                centeredSlides: false,
            },
            767: {
                spaceBetween: -150,
                slidesPerView: 1.3,
                centeredSlides: true,
            },

            1200: {
                spaceBetween: -300,
                slidesPerView: 2.22,
            },
        },
    };

    let autoplay: any = {
        delay: 2500,
        pauseOnMouseEnter: true,
    };
</script>

<section id="media">
    <div class="title text-center">
        <img src="{IMG_MEDIA_LOVE_TITLE}" loading="lazy" alt="" />
    </div>

    <div class="media-slider-cantainer container-2k">
        <div class="media-slider-area">
            <Swiper breakpoints="{swiperOptions.breakpoints}" autoplay="{autoplay}" modules="{[Autoplay, Navigation]}" centeredSlides="{true}" loop="{true}" id="media-slider">
                {#each [...new Array(10)] as item, index}
                    <SwiperSlide>
                        <div class="media-slider-card">
                            <div class="card-bg d-inline-block">
                                <img loading="{'lazy'}" src="{IMG_MEDIA_CARD_BG}" class="object-center" alt="" />
                            </div>
                            <div class="overlay"></div>
                            <div class="card-content">
                                <div class="title text-center text-white">
                                    <h1 class="display-3">Mashable X ApesRu</h1>
                                </div>
                                <div class="below-title text-center mt-5">
                                    <h1 class="display-1 text-light">Chris Brown <br /> Hires Katun</h1>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                {/each}
            </Swiper>
        </div>
    </div>
</section>

<style lang="scss">
    @use "../../styles/pageHome" as main;
    @include main.section-media();
</style>
