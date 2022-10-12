import IMG_ROADMAP_BANNER from "../assets/roadmap-images/roadmap-banner.png";
import IMG_ROADMAP_STAGE_1 from "../assets/roadmap-images/stage-1.png";
import IMG_ROADMAP_STAGE_1_MONKEY from "../assets/roadmap-images/stage-1-monkey.png";
import IMG_ROADMAP_STAGE_2 from "../assets/roadmap-images/stage-2.png";
import IMG_ROADMAP_STAGE_3 from "../assets/roadmap-images/stage-3.png";
import IMG_ROADMAP_STAGE_4 from "../assets/roadmap-images/stage-4.png";
import IMG_ROADMAP_STAGE_4_DOOR from "../assets/roadmap-images/stage-4-door.png";
import IMG_ROADMAP_STAGE_4_FLOOR from "../assets/roadmap-images/stage-4-floor.png";

export interface RoadmapImgData {
    name: string;
    img: string;
    id: string;
    meta: {
        class: string;
        style?:string;
    };
}


export const roadmapSpacerHeight = 192.21932;
export const roadmapImgData: RoadmapImgData[] = [
    {
        name: "roadmap-banner",
        img: IMG_ROADMAP_BANNER,
        id: "4098ea83-015b-47da-bde8-ca1b96d8dbd6",
        meta: {
            class: "",
        },
    },
    {
        name: "roadmap-stage-1",
        img: IMG_ROADMAP_STAGE_1,
        id: "c3b7e786-cabf-4545-a0f4-53beda85615e",
        meta: {
            class: "",
        },
    },
    {
        name: "roadmap-stage-1-monkey",
        img: IMG_ROADMAP_STAGE_1_MONKEY,
        id: "c644578e-2d73-4e52-9620-6ee2b8b37da8",
        meta: {
            class: "",
        },
    },
    {
        name: "roadmap-stage-2",
        img: IMG_ROADMAP_STAGE_2,
        id: "9590668b-f736-4a00-8910-7c371c1c2ac7",
        meta: {
            class: "",
        },
    },
    {
        name: "roadmap-stage-3",
        img: IMG_ROADMAP_STAGE_3,
        id: "4aaffc90-4aeb-48ac-87df-3d04f39e99ab",
        meta: {
            class: "",
        },
    },
    {
        name: "roadmap-stage-4",
        img: IMG_ROADMAP_STAGE_4,
        id: "a14a192f-59d3-4df5-ba7d-0559b829967d",
        meta: {
            class: "",
        },
    },
    {
        name: "roadmap-stage-4-door",
        img: IMG_ROADMAP_STAGE_4_DOOR,
        id: "39f19fe4-4fd5-4b95-8b2e-13701ae9c898",
        meta: {
            class: "",
        },
    },
    {
        name: "roadmap-stage-4-floor",
        img: IMG_ROADMAP_STAGE_4_FLOOR,
        id: "4d8373a2-33d5-43ff-b372-c6c64abe3d92",
        meta: {
            class: "",
        },
    },
];
