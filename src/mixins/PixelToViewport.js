export const PixelToViewport = {
    name: "PixelToViewport",
    methods: {
        pxToVh(px) {
            return (px / screen.height) * 100
        },
        pxToVw(px) {
            return (px / screen.width) * 100
        },
        VhToPx(vh) {
            return (vh / 100) * screen.height
        },
        VwToPx(vw) {
            return (vw / 100) * screen.width
        }

    }

}
