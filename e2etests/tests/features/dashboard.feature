Feature: Dashboard

  Background: Login
    Given I am on Knowland Login Page
    When I access with my credentials "testinguser@gmail.com", "June@2024"
    And I choose unlimited_markets client on client
    Then I am on "Knowland" Home Page

  @KA36 @RunSearch @NotAutomated @Regression @DashboardFeature
  Scenario: Run a Search
    When I click on a search from "My Searches" to run the search
    And I click on "New SmartSearch" button
    And I fill out the search parameters
    And I run the search
    Then I should be taken to the search results

  @KA37 @TopOpportunities @NotAutomated @Regression @DashboardFeature
  Scenario: Update Filters and Click Account Link in Top Opportunities
    When I update the filters in the "Top Opportunities" widget
    Then I confirm the results update based on the new filters
    When I click on an account name
    Then I confirm it takes me to the account details with the applied filter

  @KA38 @TopUsage @NotAutomated @Regression @DashboardFeature
  Scenario: Top Usage Widget Loads
    Then I confirm the "Top Usage" widget loads
    And I see my name below each graph

  @KA39 @BenchmarkingUsage @NotAutomated @Regression @DashboardFeature
  Scenario: Benchmarking Usage Widget Loads
    Then I confirm the "Benchmarking Usage" widget loads as expected

  @KA40 @RecentAccounts @NotAutomated @Regression @DashboardFeature
  Scenario: Recent Accounts Widget Loads
    Then I confirm the "Recent Accounts" widget loads
    When I click on an account
    Then I confirm it opens the account details

  @KA41 @PropertyStatusChanges @NotAutomated @Regression @DashboardFeature
  Scenario: Property Status Changes Widget Loads
    Then I confirm the "Property Status Changes" widget loads
    And I update the filters if needed to see results

  @KA42 @CustomizeLayout @NotAutomated @Regression @DashboardFeature
  Scenario: Update and Reset Dashboard Layout
    When I update the dashboard layout and save changes
    And I reset the layout back to default
    Then I confirm the layout resets to default settings

  @KA43 @AccountLoyaltyWidget @NotAutomated @Regression @DashboardFeature
  Scenario: Account Loyalty Widget
    Then I confirm the "Account Loyalty" widget loads
    And I toggle to "Year to Date" and confirm the widget updates
    When I update the filters
    Then I confirm the widget updates with the new filters
    When I click on an account link
    Then I confirm it opens the account details
    When I click "View All Accounts"
    Then I confirm filters carry over to search results
    And I confirm I can edit the search with the "Account Loyalty" filters
    And I confirm I can schedule the search

  @KA44 @ViewedAccountsTracker @NotAutomated @Regression @DashboardFeature
  Scenario: Viewed Accounts Tracker Widget
    Then I confirm the "Viewed Accounts Tracker" widget loads
    And I update the filters
    Then I confirm the widget updates with the new filters
    When I click on an account link
    Then I confirm it opens the account details

  @KA45 @NewToMarket @NotAutomated @Regression @DashboardFeature
  Scenario: New to Market Widget
    Then I confirm the "New to Market" widget loads
    And I update the filters
    Then I confirm the widget updates with the new filters
    When I click on an account link
    Then I confirm it opens the account details
    When I click "View All Accounts"
    Then I confirm filters carry over to search results
    And I confirm I can edit the search with the "New to Market" filter
    And I confirm I can schedule the search

  @KA46 @MarketSnapshot @NotAutomated @Regression @DashboardFeature
  Scenario: Market Snapshot Widget
    Then I confirm the "Market Snapshot" widget loads
    When I toggle to "Mix"
    Then I confirm the widget updates
    And I update the filters
    Then I confirm the widget updates with the new filters
    When I click on "View Market Snapshot"
    Then I confirm it opens the Market Snapshot
