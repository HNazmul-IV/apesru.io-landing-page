<script lang="ts">
    export let mode: "viewer" | "slider" = "viewer";
    // export let sliderParent = "";
    // export let sliderElement = "";
    let elements: Element | NodeListOf<Element>;
</script>

<div class="global-image-{mode} position-fixed w-100 h-100 top-0 start-0 bg-black"></div>

<style lang="scss">
    @use "../styles/component" as main;
    @include main.global-image-viewer();
</style>
