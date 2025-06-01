/**
 * Composable for managing pointer effect
 */
export const usePointerStyle = () => {

    /**
     * Set selectors
     */
    const layout_selector = "#layout";
    const pointer_container = "#pointer"

    onMounted(() => {

        /**
         * Get HtmlElements
         */
        let root = document.querySelector(layout_selector) as HTMLElement
        let pointer = document.querySelector(pointer_container) as HTMLElement

        /**
         * Add mouse move event
         */
        root.addEventListener('mousemove', (event) => {
            onPointer(event, pointer)
        })
    })

    /**
     * Event mouse move handler
     * @param event
     * @param pointer
     */
    const onPointer = (event: MouseEvent, pointer: HTMLElement|null|undefined) => {

        /**
         * Get current pointer position (absolute)
         */
        const x = event.pageX
        const y = event.pageY

        if(pointer){

            /**
             * Add the style for pointer container
             */
            pointer.style.background = "radial-gradient(600px at " + x +"px "+ y +"px, rgba(29, 78, 216, 0.15), transparent 80%)"
        }
    }
}