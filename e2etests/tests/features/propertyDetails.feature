Feature: Property Detail Page

  Background: Login
    Given I am on Knowland Login Page
    When I access with my credentials "testinguser@gmail.com", "June@2024"
    And I choose unlimited_markets client on client
    Then I am on Knowland Home Page

  @KA12 @PropertyDetailPage @NotAutomated @Regression @PropertyFeature
  Scenario: View Property Details Page
    When I click on a "property hyperlink" from the search results or any other page
    Then I confirm it opens the "Property Details" page successfully
    And I confirm the "Past Bookings" section is visible

  @KA13 @AddToCompSet @NotAutomated @Regression @PropertyFeature
  Scenario: Add Property to Comp Set
    When I click on the "gear icon" to add the property to a comp set
    Then I confirm the comp set icon count updates correctly
