<script lang="ts">
    import { onMount } from "svelte";
    import IMG_1 from "../assets/images/about_big_monky.png";

    export let source: URL | string = IMG_1;
    let imageElement: HTMLImageElement;

    export function loadData(): boolean {
        let loaded: boolean = false;
        fetch(source)
            .then((data) => data.blob())
            .then((result: Blob) => {
                const reader = new FileReader();

                console.log(result);

                reader.addEventListener("load", function () {
                    imageElement.src = this.result as string;
                    loaded = true;
                });

                reader.addEventListener("error", function () {
                    loaded = false;
                });

                reader.readAsDataURL(result);
            });

        return loaded;
    }

    onMount(() => {
        loadData();
    });
</script>

<img src="" bind:this="{imageElement}" alt="" />
