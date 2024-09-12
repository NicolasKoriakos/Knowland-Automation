Feature: Market Snapshot

  Background: Login
    Given I am on Knowland Login Page
    When I access with my credentials "testinguser@gmail.com", "June@2024"
    And I choose unlimited_markets client on client
    Then I am on Knowland Home Page

  @KA47 @MarketKPIs @NotAutomated @Regression @MarketSnapshotFeature
  Scenario: Market KPIs Data Loads and Filters Update
    When I navigate to the "Market KPIs" section
    And I update the filters
    Then I confirm the data updates based on the new filters

  @KA48 @MarketSegmentation @NotAutomated @Regression @MarketSnapshotFeature
  Scenario: Market Segmentation Data Loads and Filters Update
    When I navigate to the "Market Segmentation" section
    And I update the filters
    Then I confirm the data updates based on the new filters
    When I toggle to "Mix"
    Then I confirm the chart updates to Mix%

  @KA49 @Top10Industries @NotAutomated @Regression @MarketSnapshotFeature
  Scenario: Top 10 Industries by Number of Bookings
    When I navigate to the "Top 10 Industries by # of Bookings" section
    And I update the filters
    Then I confirm the data updates based on the new filters
    When I click on the booking count
    Then I confirm it opens a search with the booking count

  @KA50 @MeetingSizeTrends @NotAutomated @Regression @MarketSnapshotFeature
  Scenario: Meeting Size Trends by Booking Count
    When I navigate to the "Meeting Size Trends by Booking Count" section
    And I update the filters
    Then I confirm the data updates based on the new filters
    When I toggle to "By Guest Rooms"
    Then I confirm the chart updates
    When I click on the booking count
    Then I confirm it opens a search with the booking count

  @KA51 @Export @NotAutomated @Regression @MarketSnapshotFeature
  Scenario: Export Page to PDF
    When I navigate to the "Market Snapshot" page
    And I click on "Export"
    Then I confirm the page exports to PDF successfully
