Feature: Usage Report

  Background: Login
    Given I am on Knowland Login Page
    When I access with my credentials "testinguser@gmail.com", "June@2024"
    And I choose unlimited_markets client on client
    Then I am on "Knowland" Home Page

  @KA14 @UsageReport @NotAutomated @Regression @UsageReportFeature
  Scenario: View Usage Report and Update Filters
    When I navigate to the "Usage Report" page
    And I change the "date" filter
    And I change the "users" filter
    Then I confirm the "Usage Report" page updates correctly

  @KA15 @ExportUsageReport @NotAutomated @Regression @UsageReportFeature
  Scenario: Export Usage Report
    When I export the "Usage Report" to "PDF"
    And I export the "Usage Report" to "Excel"
    Then I confirm both exports are successful

  @KA16 @ScheduleUsageReport @NotAutomated @Regression @UsageReportFeature
  Scenario: Schedule a Usage Report
    When I click on the "envelope icon" to schedule a usage report
    And I create a new "Scheduled Usage Report"
    Then I confirm the report is saved successfully
    When I edit an existing "Scheduled Usage Report"
    Then I confirm the updated schedule is saved
