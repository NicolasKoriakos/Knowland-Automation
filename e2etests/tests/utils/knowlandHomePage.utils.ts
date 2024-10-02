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
  KNOWLAND = "Knowland",
  NAME_INITIALS = "name_initials",
  SEARCH_SETTINGS = "search_settings",
  DASHBOARD_ACCOUNT_NAME = "dashboard_account_name",
  MY_PROPERTY_ATTRIBUTE = "my_property_attribute",
  MENU = "menu",
  MAGNIFYING_GLASS_BUTTON = "magnifying_glass_button",
  ACCOUNTS_AND_EVENTS = "Accounts&Events",
  NEW_CUSTOM_SEARCH = "New_Custom_Search",
  RECENT_SEARCHES_LINK = "Recent_Searches_Link",
  TOOLS = "tools",
  USAGE_REPORT = "usage_report",
  COMPETITIVE_SET_MANAGER = "competitive_set_manager",
}

export const ElementMap: Record<ElementEnum, string> = {
  [ElementEnum.NAME_INITIALS]: "id=user-initials",
  [ElementEnum.SEARCH_SETTINGS]: "id=search_settings",
  [ElementEnum.DASHBOARD_ACCOUNT_NAME]: "id=header-title-dashboard",
  [ElementEnum.MY_PROPERTY_ATTRIBUTE]:"//div[@class='client ng-tns-c3686997790-0']",
  [ElementEnum.MENU]: "structural_navigation-bar_hamburger",
  [ElementEnum.MAGNIFYING_GLASS_BUTTON]:"Structural_SearchActions_recentSearchButton",
  [ElementEnum.ACCOUNTS_AND_EVENTS]: "id=edit-btn-Accounts-&-Events",
  [ElementEnum.NEW_CUSTOM_SEARCH]: "id=new_custom_search",
  [ElementEnum.RECENT_SEARCHES_LINK]: ".relevance-sort-tooltip", 
  [ElementEnum.KNOWLAND]: "xpath=//img[@alt='KNOWLAND']",
  [ElementEnum.TOOLS]:"xpath=//button[@class='tw-inline-flex tw-items-center tw-text-sm tw-font-medium ng-tns-c1916064576-7']//*[name()='svg']//*[name()='path' and contains(@class,'ng-tns-c19')]",
  [ElementEnum.USAGE_REPORT]: "id=usage_report",
  [ElementEnum.COMPETITIVE_SET_MANAGER]:"id=comp_set_manager"
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
