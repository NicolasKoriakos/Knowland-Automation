Feature: Smart Search

    Background: Login
        Given I am on Knowland Login Page
        When I access with my credentials "testinguser@gmail.com", "June@2024"
        When I choose unlimited_markets client on client
        Then I am on Knowland Home Page
        
    @2
    Scenario: New Smart Search
        When I click on "Accounts_and_Events" element on Home Page
        When I click on "new_custom_search" element on Home Page
        When I click on "single-day-event" element and check that the "search_counter" has changed
      

