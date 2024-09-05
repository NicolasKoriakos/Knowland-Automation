// utils/KnowlandHomePageUtils.ts

export class KnowlandHomePageUtils {
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
  NAME_INITIALS = "name_initials",
  SEARCH_SETTINGS = "search_settings",
  DASHBOARD_ACCOUNT_NAME = "dashboard_account_name",
  MY_PROPERTY_ATTRIBUTE = "my_property_attribute",
  MENU = "menu",
  CREATE_NEW_SEARCH = "create_new_search",
  ACCOUNT_ATTRIBUTES = "account_attributes",
  ADDRESS_FILTER = "address_filter",
  SEARCH_COUNTER = "search_counter",
  CITY_FIELD = "city_field",
  ESTIMATED_ACCOUNTS_COUNTER = "estimated_accounts_counter",
  MAGNIFYING_GLASS_BUTTON = "magnifying_glass_button",
}

export const ElementMap: Record<ElementEnum, string> = {
  [ElementEnum.NAME_INITIALS]: "id=user-initials",
  [ElementEnum.SEARCH_SETTINGS]: "id=search_settings",
  [ElementEnum.DASHBOARD_ACCOUNT_NAME]: "id=header-title-dashboard",
  [ElementEnum.MY_PROPERTY_ATTRIBUTE]:
    "//div[@class='client ng-tns-c3686997790-0']",
  [ElementEnum.MENU]: "structural_navigation-bar_hamburger",
  [ElementEnum.CREATE_NEW_SEARCH]: "create_s_search",
  [ElementEnum.ACCOUNT_ATTRIBUTES]: "Structural_Nav-Bar_attributeTab_2",
  [ElementEnum.ADDRESS_FILTER]: "widget-btnAddress",
  [ElementEnum.SEARCH_COUNTER]: "#Structural_SearchActions_estimatedCount",
  [ElementEnum.CITY_FIELD]: "input[placeholder='Enter City']",
  [ElementEnum.ESTIMATED_ACCOUNTS_COUNTER]:
    "Structural_SearchActions_estimatedCount",
  [ElementEnum.MAGNIFYING_GLASS_BUTTON]:
    "Structural_SearchActions_recentSearchButton",
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
