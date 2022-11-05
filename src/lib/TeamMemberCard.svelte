<script lang="ts">
    import Collapse from "bootstrap/js/dist/collapse";
    import { onMount } from "svelte";
    import TEAM_AVATAR_DEVID from "../assets/images/team-nft-devid.png";

    interface Data {
        name: string;
        subtitle: string;
        avatar: string;
        id: string;
        brief?: string | boolean;
        head?: number;
    }

    export let smallCard = true;
    export let data: Data = <Data>{};
    let briefCollapseElement: HTMLSpanElement;

    function makingPragrapCollapse() {
        let briefCollapse = new Collapse("#brief-" + data.id, {
            toggle: false,
        });
        console.log(briefCollapse);
    }

    // onMount(makingPragrapCollapse);
</script>

<div id="{data.id}" class="team-member-card" class:smallCard>
    <div class="team-member-card__wrapper">
        <div class="d-flex {smallCard ? "align-items-center align-items-lg-start": "align-items-center align-items-md-start align-items-xxl-center"} team-member-card__content-flex">
            <div class="team-member-card__avatar">
                <img loading="lazy" src="{data.avatar}" alt="" />
            </div>
            <div class="team-member-card__content text-light">
                <h1 class="team-member-card__content-name text-uppercase">{@html data.name}</h1>
                <h2 class="team-member-card__content-subtitle mb-2 text-uppercase">{@html data.subtitle}</h2>
                <p class="team-member-card__content-brief font-sans mb-0">
                    {#if typeof data.brief === "string"}
                        <!-- {#if data.brief.length > 630}
                            <span class="">{data.brief.substring(0, 620)}</span> <span class="brief-collapse collapse" id="brief-{data.id}">{data.brief.substring(620, data.brief.length)}</span>
                            <button class="btn btn-sm text-warning fw-bold" data-bs-toggle="collapse" data-bs-target="#brief-{data.id}">...Read More</button>
                        {/if} -->
                        {data.brief}
                    {/if}
                </p>
            </div>
        </div>
    </div>
</div>

<style lang="scss">
    @use "../styles/component" as component;
    @include component.team-member-card();
</style>
