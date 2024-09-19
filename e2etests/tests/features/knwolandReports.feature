Feature: Knowland Reports

  Background: Login
    Given I am on Knowland Login Page
    When I access with my credentials "testinguser@gmail.com", "June@2024"
    And I choose unlimited_markets client on client
    Then I am on "Knowland" Home Page

  @KA35 @CompSetKeyAccountRecapReport @NotAutomated @Regression @ReportsFeature
  Scenario: Confirm Report Exports
    When I navigate to the "Comp-Set Key Account Recap Report"
    And I click on "Customize & Export"
    And I select the desired parameters
    Then I confirm the report exports successfully
