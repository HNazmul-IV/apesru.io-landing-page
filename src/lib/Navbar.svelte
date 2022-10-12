<script lang="ts">
    import { Collapse } from "bootstrap";
    import { onMount } from "svelte";
    import LOGO from "../assets/images/logo.png";

    let shrink = false;
    let navbar: HTMLElement;
    let navbarElements = [];
    let navbarCollapse: HTMLDivElement;

    onMount(() => window.addEventListener("scroll", () => (shrink = window.scrollY > 50)));
    onMount(() => {
        const navCollapse = new Collapse("#navbar-navs-element", {
            toggle: false,
        });

        navbarCollapse.addEventListener("shown.bs.collapse", () => navbar.classList.add("dynamic-border"));
        navbarCollapse.addEventListener("hidden.bs.collapse", () => navbar.classList.remove("dynamic-border"));
        window.addEventListener("resize", () => navCollapse.hide());

        navbarElements.forEach((element: HTMLUListElement) =>
            element.addEventListener("click", () => {
                if (window.getComputedStyle(navbarCollapse).display !== "none") {
                    navCollapse.hide();
                }
            }),
        );
    });
    const navbarLinkdata = [
        {
            name: "Home",
            link: "/#",
            colorProfile: "danger",
        },
        {
            name: "About",
            link: "/#",
            colorProfile: "warning",
        },
        {
            name: "Partners",
            link: "/#",
            colorProfile: "success",
        },
        {
            name: "Apesrus",
            link: "/#",
            colorProfile: "info",
        },
        {
            name: "Apesrus",
            link: "/#",
            colorProfile: "primary",
        },
    ];
</script>

<nav class="navbar navbar-expand-lg position-fixed    w-100 top-0 start-0 p-0 px-3 p-lg-0" class:shrink bind:this="{navbar}">
    <div class="container-fluid p-1 p-md-2">
        <a class="navbar-brand text-light fw-normal" href="/#"><img class="logo" src="{LOGO}" alt="APESRUS Brand Logo" /></a>
        <button
            class="navbar-toggler text-warning"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar-navs-element"
            aria-controls="navbar-navs-element"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"
                ><path
                    fill="currentColor"
                    d="M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm64 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zm384 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z"
                ></path
                ></svg>
        </button>
        <div class="collapse navbar-collapse" bind:this="{navbarCollapse}" id="navbar-navs-element">
            <ul class="navbar-nav ms-auto px-3F py-5 py-lg-0">
                {#each navbarLinkdata as link}
                    <li bind:this="{navbarElements[navbarElements.length]}" class="nav-item">
                        <a href="{link.link}" class="nav-link fw-bold text-center text-lg-start   text-{link.colorProfile} text-uppercase">{link.name}</a>
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
