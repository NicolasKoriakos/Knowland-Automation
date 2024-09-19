Feature: Portfolio Capture

  Background: Login
    Given I am on Knowland Login Page
    When I access with my credentials "testinguser@gmail.com", "June@2024"
    And I choose unlimited_markets client on client
    Then I am on "Knowland" Home Page

  @KA52 @CompSetCapture @NotAutomated @Regression @PortfolioCaptureFeature
  Scenario: Comp Set Capture Data Loads
    When I navigate to the "Comp Set Capture" section
    And I update the filters
    Then I confirm the data updates based on the new filters
    When I switch to "Bottom Performers"
    Then I confirm the data updates accordingly

  @KA53 @MarketCapture @NotAutomated @Regression @PortfolioCaptureFeature
  Scenario: Market Capture Data Loads
    When I navigate to the "Market Capture" section
    And I update the filters
    Then I confirm the data updates based on the new filters
    When I switch to "Bottom Performers"
    Then I confirm the data updates accordingly

  @KA54 @MarketPace @NotAutomated @Regression @PortfolioCaptureFeature
  Scenario: Market Pace Data Loads
    When I navigate to the "Market Pace" section
    And I update the filters
    Then I confirm the data updates based on the new filters
    When I switch to "Bottom Performers"
    Then I confirm the data updates accordingly

  @KA55 @Chart @NotAutomated @Regression @PortfolioCaptureFeature
  Scenario: Chart Data Loads and Sorts
    When I navigate to the "Chart" section
    And I update the filters
    Then I confirm the data updates based on the new filters
    When I sort the chart data
    Then I confirm the chart updates accordingly

  @KA56 @ChangeCompSet @NotAutomated @Regression @PortfolioCaptureFeature
  Scenario: Change Comp Set
    When I change a comp set
    Then I confirm the pop-up opens as expected
    And I update the comp set
    Then I confirm the data updates based on the new comp set

  @KA57 @Export @NotAutomated @Regression @PortfolioCaptureFeature
  Scenario: Export Chart to Excel
    When I navigate to the "Chart" section
    And I click on "Export"
    Then I confirm the chart exports to Excel successfully
