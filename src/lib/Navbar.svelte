<script lang="ts">
    import Collapse from "bootstrap/js/dist/collapse";
    import { hashNavigate, navigate, slugs } from "../script/Router";
    import { fade } from "svelte/transition";
    import { onMount } from "svelte";
    import LOGO from "../assets/images/logo.png";

    let shrink = false;
    let navbar: HTMLElement;
    let navCollapse: Collapse;
    const shrinkNavbar = () => (shrink = window.scrollY > 50);
    shrinkNavbar();

    onMount(() => window.addEventListener("scroll", shrinkNavbar));
    onMount(() => {
        let navbarCollapseElement = document.getElementById("nav-item-collapse");
        navCollapse = new Collapse("#nav-item-collapse", {
            toggle: false,
        });
        navbarCollapseElement.addEventListener("shown.bs.collapse", () => navbar.classList.add("dynamic-border"));
        navbarCollapseElement.addEventListener("hidden.bs.collapse", () => navbar.classList.remove("dynamic-border"));
        window.addEventListener("resize", () => navCollapse.hide());
    });

    const navbarLinkdata = [
        {
            name: "Home",
            link: "/",
            colorProfile: "danger d-lg-none d-xxl-block ",
            separatePage: true,
            pageSlug: "all",
            onClick(path: string) {
                scrollTo({ top: 0 });
                navigate(path);
            },
        },
        {
            name: "About",
            link: "/#about",
            colorProfile: "warning",
            separatePage: false,
            pageSlug: "/",
            onClick(path: string) {
                hashNavigate(path);
            },
        },
        {
            name: "NFT&nbsp;Collection",
            link: "/#nft-collection",
            colorProfile: "success",
            separatePage: false,
            pageSlug: "/",
            onClick(path: string) {
                hashNavigate(path);
            },
        },
        {
            name: "Partners ",
            link: "/#partners",
            colorProfile: "info",
            separatePage: false,
            pageSlug: "/",
            onClick(path: string) {
                hashNavigate(path);
            },
        },
        {
            name: "Roadmap&nbsp;2.0",
            link: "/#roadmap",
            colorProfile: "primary",
            separatePage: false,
            pageSlug: "/",
            onClick(path: string) {
                hashNavigate(path);
            },
        },
        {
            name: "Promo&nbsp;Video",
            link: "/#video",
            colorProfile: "danger",
            separatePage: false,
            pageSlug: "/",
            onClick(path: string) {
                hashNavigate(path);
            },
        },
        {
            name: "Team",
            link: "/#team",
            colorProfile: "warning",
            separatePage: false,
            pageSlug: "/",
            onClick(path: string) {
                hashNavigate(path);
            },
        },
        {
            name: "epz",
            link: "/epz",
            colorProfile: "primary",
            separatePage: true,
            pageSlug: "/epz",
            onClick(path: string) {
                scrollTo({ top: 0 });
                setTimeout(() => navigate(path), 1000);
            },
        },
    ];
</script>

<nav class="navbar navbar-expand-lg position-fixed    w-100 top-0 start-0 p-0 px-3 p-lg-0" class:shrink="{shrink}" bind:this="{navbar}">
    <div class="container-fluid p-1 p-md-2">
        <a class="navbar-brand text-light fw-normal" href="/#"><img class="logo d-sm-none" data-gsap="navbar-logo" src="{LOGO}" alt="APESRUS Brand Logo" /></a>
        <button class="navbar-toggler text-warning" type="button" data-bs-toggle="collapse" data-bs-target="#nav-item-collapse">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"
                ><path
                    fill="currentColor"
                    d="M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm64 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zm384 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z"
                ></path
                ></svg>
        </button>
        <div class="collapse navbar-collapse" id="nav-item-collapse">
            <ul class="navbar-nav mx-auto px-3F py-5 py-lg-0" on:click="{() => window.innerWidth < 992 && navCollapse.hide()}">
                {#each navbarLinkdata as link}
                    <li class="nav-item" in:fade>
                        <button on:click|preventDefault="{() => link.onClick(link.link)}" class="nav-link fw-bold text-center text-lg-start btn  text-{link.colorProfile} text-uppercase">
                            {@html link.name}
                        </button>
                    </li>
                {/each}
                <li class="nav-item ms-lg-4 text-center">
                    <a href="https://marketplace.apesrus.io/" target="_blank" class="btn btn-warning nav-link-button px-4 text-uppercase">MarketPlace</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

<style lang="scss">
    @use "../styles/utils" as *;

    :global {
        .dynamic-border {
            @include media-breakpoint-down(lg) {
                border-bottom: 4px solid $primary !important;
                background: $black !important;
            }
        }
    }

    .nav-link-button {
        box-shadow: 0px 0px 13px 1px #faa61c;
        border-radius: 14px;
    }
    nav.navbar {
        --base-transition: 0.3s;
        transition: var(--base-transition);
        z-index: $nav-z-index;
        background: black;
        .navbar-nav {
            @include media-breakpoint-down(lg) {
                transform: translateX(0px);
            }
        }

        .nav-item {
            .nav-link {
                border: none;
                background: transparent;
                text-align: center;
                padding: 10px 15px;

                &:hover {
                    color: white !important;
                }
                @include media-breakpoint-down(lg) {
                    width: 100%;
                }
            }
        }

        .logo {
            height: 75px;
            transition: var(--base-transition);
            // transform: translate(39.78645833333333vw, 25.625vw) scale(2.2);
            opacity: 0;
            pointer-events: none;
            @include media-breakpoint-down(lg) {
                height: 60px;
            }
            @include media-breakpoint-down(sm) {
                opacity: 1;
                pointer-events: all;
            }
        }

        &.shrink {
            background: transparentize($color: #000000, $amount: 0.3);
            border: 1px solid rgb(58, 58, 58);
            backdrop-filter: blur(20px);
            @include media-breakpoint-up(lg) {
                padding: 0.5rem 5rem !important;
                border: none !important;
            }
            @include xs {
                .logo {
                    height: 50px;
                }
            }
        }

        @include media-breakpoint-up(lg) {
            padding: 1.5rem 5rem !important;
            background: transparent;
        }
    }
</style>
