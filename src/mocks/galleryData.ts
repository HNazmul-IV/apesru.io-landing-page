import NFT_1 from "../assets/nfts/1.png";
import NFT_2 from "../assets/nfts/2.png";
import NFT_3 from "../assets/nfts/3.png";
import NFT_4 from "../assets/nfts/4.png";
import NFT_6 from "../assets/nfts/5.png";
import NFT_5 from "../assets/nfts/6.png";
import NFT_7 from "../assets/nfts/7.png";
import NFT_8 from "../assets/nfts/8.png";
import NFT_9 from "../assets/nfts/9.png";
import NFT_10 from "../assets/nfts/10.png";
import NFT_11 from "../assets/nfts/11.png";
import NFT_12 from "../assets/nfts/12.png";
import { readable } from "svelte/store";

export interface GalleryObject {
    img: string;
    class: string;
    positionX: number;
    positionY: number;
}

export default readable<GalleryObject[]>([
    {
        img: NFT_1,
        class: "nft nft-1 ",
        positionX: 65,
        positionY: 77,
    },
    {
        img: NFT_2,
        class: "nft nft-2",
        positionX: 44,
        positionY: 0,
    },
    {
        img: NFT_3,
        class: "nft nft-3 ",
        positionX: 0,
        positionY: 52,
    },
    {
        img: NFT_4,
        class: "nft nft-4 ",
        positionX: 10,
        positionY: 37,
    },
    {
        img: NFT_5,
        class: "nft nft-5 ",
        positionX: 14,
        positionY: -2,
    },
    {
        img: NFT_6,
        class: "nft nft-6 ",
        positionX: 70.3,
        positionY: 49,
    },
    {
        img: NFT_7,
        class: "nft nft-7 ",
        positionX: 2,
        positionY: 19,
    },
    {
        img: NFT_8,
        class: "nft nft-8 ",
        positionX: 21,
        positionY: 69,
    },
    {
        img: NFT_9,
        class: "nft nft-9 ",
        positionX: 67,
        positionY: 0,
    },
    {
        img: NFT_10,
        class: "nft nft-10 ",
        positionX: 83,
        positionY: 59,
    },
    {
        img: NFT_11,
        class: "nft nft-11 ",
        positionX: 78,
        positionY: 33,
    },
    {
        img: NFT_12,
        class: "nft nft-12 active",
        positionX: 91.3,
        positionY: 46,
    },
]);
