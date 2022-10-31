<script lang="ts">
    import TeamMemberCard from "./../../lib/TeamMemberCard.svelte";
    import IMG_APESRU_BG from "../../assets/images/apesru-team-bg.png";
    import { teamMemberData } from "../../mocks/team_member_data";
</script>

<section id="section-team" class="border-bottom theme-border">
    <div class="team-title w-100 ">
        <div class="bg w-100">
            <img loading="{'lazy'}" class="img-fluid w-100" src="{IMG_APESRU_BG}" alt="" />
        </div>
        <div class="title">
            <h1 class=" text-uppercase text-center text-transparent">Apesrus <br /> Gang</h1>
        </div>
    </div>
    <div class="team-members">
        <div class="team-members-container container-2k ">
            <div class="two-head-cards">
                <div class="head-cards">
                    <TeamMemberCard smallCard="{false}" data="{teamMemberData[0]}" />
                </div>
                <div class="head-cards katun-card">
                    <TeamMemberCard smallCard="{false}" data="{teamMemberData.find((value) => value.head === 2)}" />
                </div>
            </div>

            <div class="team-members-mixed-cards">
                <div class="team-members-grid row  g-4 row-cols-2 row-cols-sm-3 row-cols-lg-2  row-cols-xl-2 row-cols-xxl-3">
                    {#each teamMemberData.slice(2, teamMemberData.length) as teamMember}
                        <div class="col">
                            <TeamMemberCard data="{teamMember}" />
                        </div>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</section>

<style lang="scss">
    @use "../../styles/pageHome" as main;
    @include main.section-team();
</style>
