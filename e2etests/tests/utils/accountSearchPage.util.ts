// utils/AccountSearchPageUtils.ts

export class AccountSearchPageUtils {
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
  MASTER_ACCOUNT_SEARCH_INPUT = "master_account_search_input",
  SEARCH_BUTTON = "master_account_search_button",
  APPLY_AND_EXIT = "apply_and_exit",
}

export const ElementMap: Record<ElementEnum, string> = {
  [ElementEnum.MASTER_ACCOUNT_SEARCH_INPUT]:"id=master_account_id_for_override",
  [ElementEnum.SEARCH_BUTTON]: "id=master_account_id_search",
  [ElementEnum.APPLY_AND_EXIT]: "id=applyandexit",
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
