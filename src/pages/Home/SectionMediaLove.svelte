<script lang="ts">
    import { media_gallery_data } from "./../../mocks/media-gallery-data";
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
            <Swiper breakpoints="{swiperOptions.breakpoints}" autoplay="{false}" modules="{[Autoplay, Navigation]}" centeredSlides="{true}" loop="{true}" id="media-slider">
                {#each media_gallery_data as data, index}
                    <SwiperSlide>
                        <a href="{data.buttonLink}" target="_blank" class="media-slider-card d-block text-decoration-none">
                            <div class="card-bg d-inline-block">
                                <img loading="{'lazy'}" src="{data.bg}" class="object-center" alt="" />
                            </div>
                            <div class="overlay"></div>
                            <div class="card-content">
                                <div class="logos text-center text-white mx-auto">
                                    <div class="logo logo-1">
                                        <img src="{data.logo1}" alt="" />
                                    </div>
                                    <div class="cross d-inline-flex h-100 align-items-center">
                                        <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M12.5742 19.528L8.75819 14.224L4.72619 19.528L0.286194 16.48L5.49419 9.712L0.934194 3.4L5.01419 0.735999L8.66219 5.584L12.5022 0.568L16.9182 3.472L11.9742 9.976L17.1822 16.912L12.5742 19.528Z"
                                                fill="white"></path>
                                        </svg>
                                    </div>
                                    <div class="logo logo-2">
                                        <img src="{data.logo2}" alt="" />
                                    </div>
                                </div>
                                <div class="title text-center mt-5">
                                    <h1 class="text-light text-uppercase">{@html data.title}</h1>
                                </div>
                                <div class="button text-center mt-5 pt-3">
                                    <a href="{data.buttonLink}" target="_blank">Dig The Deal</a>
                                </div>
                            </div>
                        </a>
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
