/**
 * Manager for select main menu item by dataset "to"
 * @param id
 */
export const useSelectMenu = (id: string) => {

    /**
     * Get the current html element menu item
     */
    const menuItem = document.querySelector("[data-to='"+ id+"']")

    /**
     * If it's already active do noting
     */
    if(menuItem?.classList.contains("active")) return;
    else {

        /**
         * Get all menu items
         */
        const items = document.querySelectorAll(".menuitem");

        /**
         * Remove active class for all
         */
        items.forEach((elem) => elem.classList.remove("active"))

        /**
         * Add the active class on the selected item
         */
        menuItem?.classList.add("active")
    }
}