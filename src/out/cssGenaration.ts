function px_to_parcentage(C: number, W: number): number {
    console.log(C, W);
    return (100 * W) / C;
}
function remove_px(ct: string): number {
    return parseInt(ct.replace("px", ""));
}

function aspect_ratio(container_width: string, width: string, base_divider = 12) {
    let each_divider_width = remove_px(container_width) / base_divider;
    return `12 / ${(remove_px(container_width) / each_divider_width).toFixed(3)}`;
}

function css_genartaing() {
    let allCards = document.querySelectorAll(".roadmap-images__flying-paper");
    let container_element = document.querySelector(".roadmap-images__wrapper");
    let css = "";
    allCards.forEach((element: HTMLImageElement, index: number) => {
        const { width, height, top, left } = window.getComputedStyle(element);
        const { width: container_width, height: container_height } = window.getComputedStyle(container_element);
        css += `
            &.${element.classList}{
                width: ${px_to_parcentage(remove_px(width), remove_px(container_width))}%;
                aspect-ratio:${aspect_ratio(container_width, width)};
                top: ${px_to_parcentage(remove_px(container_height), remove_px(top)).toFixed(3)}%;
                left:${px_to_parcentage(remove_px(container_width), remove_px(left)).toFixed(3)}%;
            }
        `;
        if (index === allCards.length - 1) {
            console.log(css);
        }
    });
}

export { css_genartaing };
