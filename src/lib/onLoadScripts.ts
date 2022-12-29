try {
    const allAutoPlayVideos: NodeListOf<HTMLVideoElement> = document.querySelectorAll("video[data-auto-play]");
    allAutoPlayVideos.forEach(function (element: HTMLVideoElement) {
        if (element.tagName === "VIDEO") {
            element.play();
        }
    });
} catch (e) {
    console.log(e);
}

export {};
