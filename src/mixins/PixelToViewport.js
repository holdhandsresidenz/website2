export const PixelToViewport = {
    name: "PixelToViewport",
    methods: {
        pxToVh(px) {
            return (px / window.innerWidth) * 100
        },
        pxToVw(px) {
            return (px / window.innerWidth) * 100
        },
        VhToPx(vh) {
            return (vh / 100) * window.innerWidth
        },
        VwToPx(vw) {
            return (vw / 100) * window.innerWidth
        }

    }

}
