Feature: Usage Report

  Background: Login
    Given I am on Knowland Login Page
    When I access with my credentials "testinguser@gmail.com", "June@2024"
    And I choose unlimited_markets client on client
    Then I am on "Knowland" Home Page
    When I click on "tools" element on Home Page
    And I click on "usage_report" element on Home Page

  @KA14 @UsageReport @NotAutomated @Regression @UsageReportFeature
  Scenario: View Usage Report and Update Filters
    When I check "graphic" on Usage Report Page
    And I click on "date_filter" element on Usage Report Page
    And I click on "first_day" element on Usage Report Page
    And I click on "second_day" element on Usage Report Page
    Then I confirm the "Usage Report" page updates correctly

  @KA15 @ExportUsageReport @Automated @Regression @UsageReportFeature
  Scenario: Export Usage Report
    When I click on "export" element on Usage Report Page
    And I click on "pdf" and verify that the download was successful

  @KA16 @ScheduleUsageReport @Automated @Regression @UsageReportFeature
  Scenario: Schedule a Usage Report
    When I check "graphic" on Usage Report Page
    And I click on "envelope_icon" element on Usage Report Page
    Then I verify that a popup appears when I click on "schedule"
    When I click on "saved_schedule" element on Usage Report Page
    And I click on "delivery_day" element on Usage Report Page
    Then I verify that a popup appears when I click on "update"
    When I click on "saved_schedule" element on Usage Report Page
    And I click on "delete" element on Usage Report Page
    Then I verify that a popup appears when I click on "yes"