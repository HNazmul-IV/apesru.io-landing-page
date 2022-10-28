<script lang="ts">
    import TeamMemberCard from "./../../lib/TeamMemberCard.svelte";
    import IMG_APESRU_BG from "../../assets/images/apesru-team-bg.png";
</script>

<section id="section-team">
    <div class="team-title w-100 ">
        <div class="bg w-100">
            <img loading="{'lazy'}" class="img-fluid w-100" src="{IMG_APESRU_BG}" alt="" />
        </div>
        <div class="title">
            <h1 class=" text-uppercase text-center text-transparent">Apesrus Team</h1>
        </div>
    </div>
    <div class="team-members">
        <div class="team-members-container container-2k ">
            <div class="two-head-cards">
                <div class="head-cards">
                    <TeamMemberCard smallCard="{false}" />
                </div>
                <div class="head-cards katun-card">
                    <TeamMemberCard
                        smallCard="{false}"
                        data="{{
                            name: 'KATUN',
                            subtitle: 'CO - Founder / Artist',
                            avatar: IMG_APESRU_BG,
                            id: '84a2b343-d1ce-4eb2-8db7-b9346c248ac4',
                            brief: `tO DATE, HE HAS CREATED HIS OWN ART COLLECTIVE 4 STAGES WITH BRAND COLLABORATIONS WITH VANS, MARSHALL, NEW ERA, SONY- AND A NOTABLE ROASTER OF RENOWNED ARTISTS SUCH AS GRAMMY WINNERS CHRIS BROWN, DUA LIPA, AND POST MALONE TO NAME A FEW. WITH A GROWING WORLDWIDE PRESENCE, KATUN'S WORK IS SURE TO MAKE A MARK IN YOUR CITY SOON!`,
                        }}" />
                </div>
            </div>

            <div class="team-members-mixed-cards">
                <div class="team-members-grid row  g-4 row-cols-2 row-cols-sm-3 row-cols-lg-2  row-cols-xl-2 row-cols-xxl-3">
                    {#each [...new Array(15)] as teamMember}
                        <div class="col">
                            <TeamMemberCard />
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
