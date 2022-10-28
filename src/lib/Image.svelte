<script context="module" lang="ts">
    // export function imageReader(image: Blob): { data: string; loaded: boolean; error: Error["message"] } {
    //     let returnData = { data: "", loaded: false, error: "" };
    //     const reader = new FileReader();

    //     function handleEvent(this: FileReader, event: ProgressEvent<FileReader>) {
    //         console.log(event.type);
    //         returnData = { data: this.result as string, loaded: true, error: "" };
    //     }

    //     reader.addEventListener("load", handleEvent);
    //     reader.addEventListener("loadstart", handleEvent);
    //     reader.addEventListener("loadend", handleEvent);

    //     reader.readAsDataURL(image);

    //     return returnData;
    // }
    export function imageReader(file: Blob) {
        return new Promise<{ data: string; loaded: boolean; error: Error["message"] }>(function (resolve, reject) {
            const reader = new FileReader();

            function handleFileReaderEvent(this: FileReader, event: ProgressEvent<FileReader>) {
                console.log(this.result);
                resolve({ data: this.result as string, loaded: true, error: "" });
            }

            reader.addEventListener("load", handleFileReaderEvent);

            reader.readAsDataURL(file);
        });
    }
</script>

<script lang="ts">
    import { onMount } from "svelte";
    import IMG_1 from "../assets/images/about_big_monky.png";

    export let src: URL | string = IMG_1;
    export let imageDataUrl: string = "";
    export let imageLoaded = false;

    export async function loadImage(source: string) {
        let blob = await (await fetch(source)).blob();
        console.log(blob);
        return imageReader(blob);
    }
    let imageElement: HTMLImageElement;

    onMount(async () => {
        const { data, loaded, error } = await loadImage(src as string);
        imageElement.src = data;
        imageDataUrl = data;
        imageLoaded = loaded;
    });
</script>

<img src="" bind:this="{imageElement}" alt="" />
