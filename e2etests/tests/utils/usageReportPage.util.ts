// utils/AccountSearchPageUtils.ts

export class UsageReportPageUtils {
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
  DATE_FILTER = "date_filter",
  MONTH_FILTER ="month_filter",
  YEAR_FILTER = "year_filter",
  FIRST_DAY = "first_day",
  SECOND_DAY = "second_day",
  GRAPHIC = "graphic",
  EXPORT = "export",
  PDF = "pdf",
  ENVELOPE_ICON = "envelope_icon",
  SCHEDULE = "schedule",
  SAVED_SCHEDULE = "saved_schedule",
  DELIVERY_DAY = "delivery_day",
  UPDATE = "update",
  DELETE = "delete",
  YES = "yes"
}

export const ElementMap: Record<ElementEnum, string> = {
  [ElementEnum.DATE_FILTER]:"id=usage-btn-range-picker",
  [ElementEnum.MONTH_FILTER]:"xpath=//select[@title='Select month']",
  [ElementEnum.YEAR_FILTER]:"xpath=//select[@title='Select year']",
  [ElementEnum.FIRST_DAY]:'.custom-day ng-star-inserted:nth-of-type(7)',
  [ElementEnum.SECOND_DAY]:".ngb-dp-day ng-star-inserted(14)",
  [ElementEnum.GRAPHIC]: ".highcharts-container",
  [ElementEnum.EXPORT]: "xpath=//i[@class='fas fa-file-export']",
  [ElementEnum.PDF]: "//option[normalize-space()='PDF']",
  [ElementEnum.ENVELOPE_ICON]:"xpath=//i[@id='schedule_usage_report']",
  [ElementEnum.SCHEDULE]: "//span[@class='ng-star-inserted']",
  [ElementEnum.SAVED_SCHEDULE]: "//span[@class='ng-star-inserted']",
  [ElementEnum.DELIVERY_DAY]: "//div[normalize-space()='Tue']",
  [ElementEnum.UPDATE]: "//span[normalize-space()='Update']",
  [ElementEnum.DELETE]: "//button[normalize-space()='Delete']",
  [ElementEnum.YES]: "//button[normalize-space()='Yes']"
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
