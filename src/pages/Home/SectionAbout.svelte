<script lang="ts">
    import IMG_BIG_MONKEY from "../../assets/images/about_big_monky.png";
    import IMG_ABOUT_DESC_DOWN_MONKEY from "../../assets/images/about-desc-down-monkey.png";
    import LOGO from "../../assets/images/logo.png";


</script>

<section id="about">
    <div class="row w-100 m-0">
        <div class="col-12 col-xl-6 col-lg-5 p-0">
            <div class="big-monkey">
                <img src="{IMG_BIG_MONKEY}" alt="" />
            </div>
        </div>
        <div class="col-12 col-xl-6 col-lg-6 offset-lg-1 offset-xl-0 p-0 about-desc align-self-center">
            <div class="col-11 text-center text-lg-start col-lg-12 col-xl-10 mx-auto mx-lg-0">
                <div class="logo mx-auto mb-2">
                    <img src="{LOGO}" alt="" class="w-100" />
                </div>
                <div class="desc text-white ">
                    <p>
                        Swinging through the metaverse with 8,444 apes in 2022, Apes R Us features bold, fun and unique NFTs to match your personality and style. Our apes encompass everyday traits
                        along with some of your favourite characters you may have loved over the years of growing up.
                    </p>
                    <p>
                        The artwork that we have created is purely hand-drawn illustrations by Katun, a popular graffiti artist based in Malaysia that has stretched his wings globally over the last
                        couple of years. He has worked with renowned artists such as Chris Brown, Dua Lipa, Post Malone and has also worked with brands such as Vans, Marshall, Footlocker, KFC, Oppo
                        and many more. Katun has taken his craft to a whole new level being the lone designer for the collection of meticulously designed NFTs for our first Apes R Us release.
                    </p>
                    <p>
                        We are a small dynamic team that exudes the key values of integrity within our art, loyalty within our community members and the longevity of our collection— we are here to
                        stay.
                    </p>
                    <p class="text-warning">
                        Apes R Us has created brand based collaborations by being the first NFT project to bring WWF-Malaysia into the metaverse and we will be revealing more soon. Joining our
                        community means more than just art, it also provides community-based exclusive access to many portals throughout our roadmap that you will be able to unlock as we move forward
                        and we’re excited to see each and every one of you join our journey.
                    </p>
                </div>
                <div class="desc_down_monkey w-100">
                    <img src="{IMG_ABOUT_DESC_DOWN_MONKEY}" class="w-100" alt="" />
                </div>
            </div>
        </div>
    </div>
</section>

<style lang="scss">
    @use "../../styles/pageHome" as main;
    @include main.section-about();
</style>
