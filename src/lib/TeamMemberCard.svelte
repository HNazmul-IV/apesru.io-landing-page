<script lang="ts">
    import TEAM_AVATAR_DEVID from "../assets/images/team-nft-devid.png";
    export let smallCard = true;
    export let data = {
        id: "fd1faca0",
        name: "Devid k",
        subtitle: "Co Founder",
        brief: `CO-FOUNDER OF APES R US, DAVID KU EMERGED INTO THE METAVERSE LAST YEAR ALONGSIDE HIS COLLECTIVE 4 STAGES. WITH HIS PASSIONS OF COLLECTING ART FOR MANY YEARS, HE FOUND HIMSELF
                    VERSED IN A SPACE THAT EXTENUATES ALL THINGS STREET ART — WHICH IN TURN HEEDED HIS INTEREST WITHIN THE GROWING TREND THAT BOOMED IN THE WEB3, PARTICULARLY IN NFTS.`,
        avatar: TEAM_AVATAR_DEVID,
    };
</script>

<div id="{data.id}" class="team-member-card" class:smallCard>
    <div class="team-member-card__wrapper">
        <div class="d-flex align-items-center team-member-card__content-flex">
            <div class="team-member-card__avatar">
                <img loading="lazy" src="{data.avatar}" alt="" />
            </div>
            <div class="team-member-card__content text-light">
                <h1 class="team-member-card__content-name ">{data.name}</h1>
                <h2 class="team-member-card__content-subtitle mb-2 text-uppercase">{data.subtitle}</h2>
                <p class="team-member-card__content-brief font-sans mb-0">
                    {data.brief}
                </p>
            </div>
        </div>
    </div>
</div>

<style lang="scss">
    @use "../styles/component" as component;
    @include component.team-member-card();
</style>
