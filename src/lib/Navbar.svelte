<script lang="ts">
    import Collapse from "bootstrap/js/dist/collapse";
    import { onMount } from "svelte";
    import LOGO from "../assets/images/logo.png";

    let shrink = false;
    let navbar: HTMLElement;
    let navCollapse: Collapse;

    onMount(() => window.addEventListener("scroll", () => (shrink = window.scrollY > 50)));
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
            link: "/#",
            colorProfile: "danger d-lg-none d-xxl-block ",
        },
        {
            name: "About",
            link: "/#",
            colorProfile: "warning",
        },
        {
            name: "NFT&nbsp;Collection",
            link: "/#",
            colorProfile: "success",
        },
        {
            name: "Partners ",
            link: "/#",
            colorProfile: "info",
        },
        {
            name: "Roadmap&nbsp;2.0",
            link: "/#",
            colorProfile: "primary",
        },
        {
            name: "Promo&nbsp;Video",
            link: "/#",
            colorProfile: "danger",
        },
        {
            name: "Team",
            link: "/#",
            colorProfile: "warning",
        },
        {
            name: "epz",
            link: "/#",
            colorProfile: "primary",
        },
    ];
</script>

<nav class="navbar navbar-expand-lg position-fixed    w-100 top-0 start-0 p-0 px-3 p-lg-0" class:shrink bind:this="{navbar}">
    <div class="container-fluid p-1 p-md-2">
        <a class="navbar-brand text-light fw-normal" href="/#"><img class="logo" src="{LOGO}" alt="APESRUS Brand Logo" /></a>
        <button class="navbar-toggler text-warning" type="button" data-bs-toggle="collapse" data-bs-target="#nav-item-collapse">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"
                ><path
                    fill="currentColor"
                    d="M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm64 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zm384 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z"
                ></path
                ></svg>
        </button>
        <div class="collapse navbar-collapse" id="nav-item-collapse">
            <ul class="navbar-nav ms-auto px-3F py-5 py-lg-0" on:click="{() => window.innerWidth < 992 && navCollapse.hide()}">
                {#each navbarLinkdata as link}
                    <li class="nav-item">
                        <a href="{link.link}" class="nav-link fw-bold text-center text-lg-start   text-{link.colorProfile} text-uppercase">{@html link.name}</a>
                    </li>
                {/each}
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
            }
        }
    }

    nav.navbar {
        --base-transition: 0.3s;
        transition: var(--base-transition);
        z-index: $nav-z-index;
        background: black;

        .logo {
            height: 75px;
            transition: var(--base-transition);
            @include media-breakpoint-down(lg) {
                height: 60px;
            }
        }

        &.shrink {
            background: black;
            border: 1px solid rgb(58, 58, 58);
            @include media-breakpoint-up(lg) {
                padding: 0.5rem 5rem !important;
                border: none !important;
            }
            .logo {
                height: 50px;
            }
        }

        @include media-breakpoint-up(lg) {
            padding: 1.5rem 5rem !important;
            background: transparent;
        }
    }
</style>
