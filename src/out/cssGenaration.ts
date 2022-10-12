const newData = [];

function px_to_parcentage(C: number, W: number): number {
    console.log(C, W);
    return (100 * W) / C;
}
function remove_px(ct: string): number {
    console.log(ct);
    return parseInt(ct.replace("px", ""));
}

function css_genartaing() {
    let allCards = document.querySelectorAll(".nft-gallery-img-card > img");
    let css = "";
    allCards.forEach((element: HTMLImageElement, index: number) => {
        element.addEventListener("load", function () {
            console.log(window.getComputedStyle(element).width);
            css += `
                    &.nft-${index + 1}{
                        width:${px_to_parcentage(1530, remove_px(window.getComputedStyle(element).width))}%;
                        aspect-ratio: 1 / 1;
                        &> img{
                            width:100%;
                            height:100%;
                        }
                    }
                `;
            newData.push({
                element: element,
                width: px_to_parcentage(1530, remove_px(window.getComputedStyle(element).width)),
            });
            if (newData.length === allCards.length) {
                console.log(css);
            }
        });
    });
}

export {};
