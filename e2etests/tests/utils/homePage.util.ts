class PageElement {
    
    constructor(id:string, selector:string) {
        this.id = id;
        this.selector = selector;
    }

    static ELEMENTS = [
        new PageElement("master_account_search_input", "#master_account_id_for_override"),
        new PageElement("master_account_search_button", "//i[@class='fas fa-search']"),
        new PageElement("apply_and_exit", "#applyandexit")
    ];

    static getElement(id) {
        return PageElement.ELEMENTS.find(e => e.id === id) || null;
    }
}

// Ejemplo de uso
const element = PageElement.getElement("master_account_search_button");
if (element) {
    console.log(element.selector); // Devuelve: "//i[@class='fas fa-search']"
} else {
    console.log("Element not found");
}