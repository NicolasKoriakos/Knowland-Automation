// utils/KnowlandHomePageUtils.ts

export class CompetitiveSetManagerPageUtils {
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
    AIRPORT_FILTER = "airport_filter",
    MAP_LIST_CONTAINER = "map_list_container",
    LOCATION_DROP = "location_drop",
    OUTSIDE = "outside",
    PROPERTY_CARD = "property_card",
    OVERVIEW = "overview",
    ADD_ICON = "add_icon",
    EXISTING_COMPSET = "existing_compset",
    CHECKBOX = "checkbox",
  }
  
  export const ElementMap: Record<ElementEnum, string> = {
    [ElementEnum.AIRPORT_FILTER]: "id=location_drop_Airport",
    [ElementEnum.MAP_LIST_CONTAINER]:".map-list-container",
    [ElementEnum.LOCATION_DROP]:"xpath=//div[@id='location_drop']//div[@id='location_drop']",
    [ElementEnum.OUTSIDE]:"xpath=//form[@class='header-top ng-untouched ng-pristine ng-invalid']",
    [ElementEnum.PROPERTY_CARD]:"id=property-toggle-panel84",
    [ElementEnum.OVERVIEW]: "xpath=//div[@class='overviewSection']",
    [ElementEnum.ADD_ICON]: ".add-button-container comp-set-background ng-star-inserted",
    [ElementEnum.EXISTING_COMPSET]: "xpath=//span[@class='compset-name']",
    [ElementEnum.CHECKBOX]: ".checkbox",
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
  