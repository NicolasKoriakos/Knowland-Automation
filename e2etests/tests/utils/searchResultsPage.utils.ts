// utils/SearchResultsPageUtils.ts

export class SearchResultsPageUtils {
  /**
   * Get the element for the specified ID.
   *
   * @param id The ID of the element.
   * @returns The corresponding element for the specified ID.
   */
  public static getElement(id: string): string {
    try {
      const elementEnum = ElementEnum.getElementById(id);
      if (!elementEnum) throw new Error(`Element with ID '${id}' not found.`);
      return ElementMap[elementEnum];
    } catch (error) {
      console.error(error);
      // Return a default value or an empty string if the element is not found
      return "default-element-selector"; // Replace with your default string or fallback
    }
  }
}

export enum ElementEnum {
  SEARCH_RESULTS = "search_results",
  PENCIL_ICON = "pencil_icon",
  SEARCH_ACTIONS = "search_actions",
  SAVE_SCHEDULE = "save_schedule",
  SAVE_SCHEDULE_OPTION = "save_schedule_option",
  CONTAINER = "container",
}

export const ElementMap: Record<ElementEnum, string> = {
  [ElementEnum.SEARCH_RESULTS]: "id=search-results",
  [ElementEnum.PENCIL_ICON]: "xpath=//i[@title='Edit Search']",
  [ElementEnum.SEARCH_ACTIONS]: "id=search-actions",
  [ElementEnum.SAVE_SCHEDULE]: "xpath=//span[normalize-space()='Schedule']",
  [ElementEnum.SAVE_SCHEDULE_OPTION]: "4",
  [ElementEnum.CONTAINER]:"xpath=//div[@class='main-container ng-star-inserted']",
};

export namespace ElementEnum {
  /**
   * Get the element enum corresponding to a specific ID.
   *
   * @param id The ID of the element to retrieve.
   * @returns The element enum corresponding to the given ID.
   */
  export function getElementById(id: string): ElementEnum {
    // Find the matching element for the given ID
    for (const key of Object.values(ElementEnum)) {
      if (typeof key === "string" && id.toLowerCase() === key.toLowerCase()) {
        return key as ElementEnum;
      }
    }
    // Return a default value if no matching element is found
    return "" as ElementEnum; // Or any default string you prefer
  }
}
