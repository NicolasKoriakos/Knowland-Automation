Feature: Account Details Page

  Background: Login
    Given I am on Knowland Login Page
    When I access with my credentials "testinguser@gmail.com", "June@2024"
    And I choose unlimited_markets client on client
    Then I am on Knowland Home Page

  @KA06 @AccountDetails @NotAutomated @Regression @AccountDetailsPage
  Scenario: View Account Details Page
    When I click on an "Account name" from the search results page
    Then I confirm it takes me to the "Account Details" page with the search applied
    And I confirm the search is applied for "Booking Analysis", "Past Bookings", and "Estimated Revenue Calculator"
    When I toggle to "Past Bookings" to turn the search off
    Then I view all data
    When I expand a "Function Details"
    Then I confirm the function dates match the booking dates

  @KA07 @BookingAnalysis @NotAutomated @Regression @AccountDetailsPage
  Scenario: Booking Analysis Pie Chart Interaction
    When I drill down into each "pie chart" on the "Booking Analysis" section
    Then I confirm the data updates based on the selection
    When I export the page to "PDF"
    Then I confirm the export is successful

  @KA08 @AssignOwner @NotAutomated @Regression @AccountDetailsPage
  Scenario: Assign Owner and Account Set
    When I click on the "Assign Owner" icon
    And I assign the account to an owner
    When I add the account to an "Account Set"
    And I create a new "Account Set"
   
