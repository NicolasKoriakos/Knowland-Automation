// utils/SearchResultsPageUtils.ts

export class SearchPageUtils {
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
  X_TRAILING = "X_Trailing",
  ESTIMATED_ACCOUNTS_COUNTER = "estimated_accounts_counter",
  SAVE_SEARCH = "save_search",
  PROPERTY_ATTRIBUTES = "property_attributes",
  ACCOUNT_ATTRIBUTES = "account_attributes",
  SINGLE_DAY_EVENT = "Single_Day_Event",
  RESTAURANT = "restaurant",
  CORPORATE = "corporate",
  RUN_SEARCH = "run_search",
}

export const ElementMap: Record<ElementEnum, string> = {
  [ElementEnum.SEARCH_RESULTS]: "id=search-results",
  [ElementEnum.PENCIL_ICON]: "xpath=//i[@id='SearchExperiencePaneEdit']",
  [ElementEnum.X_TRAILING]: "xpath=//i[@class='fas fa-times clickable ng-star-inserted']",
  [ElementEnum.ESTIMATED_ACCOUNTS_COUNTER]:"id=Structural_SearchActions_estimatedCount",
  [ElementEnum.SAVE_SEARCH]:"xpath=//i[@class='fas fa-search']",
  [ElementEnum.PROPERTY_ATTRIBUTES]: "id=Structural_Nav-Bar_attributeTab_1",
  [ElementEnum.ACCOUNT_ATTRIBUTES]: "id=Structural_Nav-Bar_attributeTab_2",
  [ElementEnum.SINGLE_DAY_EVENT]: "id=single-day-event",
  [ElementEnum.RESTAURANT]: "xpath=//input[@class='restaurant-checkbox ng-untouched ng-pristine ng-valid']",
  [ElementEnum.CORPORATE]:"xpath=//strong[normalize-space()='Corporate']//input[@type='checkbox']",
  [ElementEnum.RUN_SEARCH]:"id=Structural_SearchActions_recentSearchButton",
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
