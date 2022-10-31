<script>
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 370 364">
    <g id="Layer_2" data-name="Layer 2">
        <g id="Play-pause-icon">
            <g id="circle">
                <path
                    class="cls-1"
                    d="M185,362.5A183.88,183.88,0,0,1,55.27,309.66C20.6,275.56,1.5,230.23,1.5,182S20.6,88.44,55.27,54.34a185.67,185.67,0,0,1,259.46,0C349.4,88.44,368.5,133.77,368.5,182s-19.1,93.56-53.77,127.66A183.88,183.88,0,0,1,185,362.5Zm0-330.94A153.43,153.43,0,0,0,76.74,75.65a148.63,148.63,0,0,0,0,212.7,155,155,0,0,0,216.52,0,148.63,148.63,0,0,0,0-212.7A153.43,153.43,0,0,0,185,31.56Z"
                ></path>
            </g>
            <g id="play-pause">
                <path class="cls-2" d="M178.31,156.58H154.36v58.85h23.95Z"></path>
                <path class="cls-2" d="M255.94,164.16l-108-49.28a14.14,14.14,0,0,0-20,12.87V237.44a13,13,0,0,0,18.35,11.79l109.69-50a19.24,19.24,0,0,0,11.26-17.51h0A19.24,19.24,0,0,0,255.94,164.16Z"
                ></path>
            </g>
        </g>
    </g>
</svg>

<style lang="scss">
    @use "../../styles/utils" as *;
    svg {
        --icon-fill: #999ca6;
        cursor: pointer;
        transition: 0.3s;

        #circle,
        #play-pause {
            fill: var(--icon-fill);
            stroke: var(--stroke-fill);
            stroke-width: 5px;
        }

        &:hover {
            --icon-fill: #{$warning};
            --stroke-fill: #{darken($warning, 30)};
            filter: drop-shadow(1px 1px 10px $warning);
            transform: scale(0.9);
        }
    }
</style>
