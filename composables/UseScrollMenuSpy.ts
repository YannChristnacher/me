import {useSelectMenu} from "~/composables/UseSelectMenu";

/**
 * Manager for select menu item by scroll event
 */
export const useScrollMenuSpy = () => {

    /**
     * Section block selector
     */
    const section_selector = "section"

    /**
     * Offset scroll for selecting item
     */
    const offset = -30

    onMounted(() => {

        /**
         * Get all sections HTML elements
         * It's used in event handler
         */
        const sections = document.querySelectorAll(section_selector) as  NodeListOf<HTMLElementTagNameMap["section"]>
        document.addEventListener("scroll", (event: Event) => {

            /**
             * Call handler
             */
            onScroll(event, sections)
        })
    })

    /**
     * Event scroll handler
     * @param event
     * @param sections
     */
    const onScroll = (event: Event, sections:  NodeListOf<HTMLElementTagNameMap["section"]>) => {

        /**
         * List of section information
         * position: the current scroll top value
         * id: the id of the section
         */
        const list = [] as  Array<{position: number, id: string}>

        /**
         * Fill the list
         */
        sections.forEach(section => {
            const section_position = section.getBoundingClientRect().top
            const section_id = section.id ?? "noid";
            list.push({
                position: section_position,
                id: section_id
            })
        })

        /**
         * Get only section with scroll top positive
         * It's means section not passed
         */
        const filtered = list.filter((item) => {
            return item.position > offset
        })

        /**
         * Select menu item for the first section of the list
         */
        if (filtered[0])
        {
            useSelectMenu(filtered[0].id)
        }
    }
}