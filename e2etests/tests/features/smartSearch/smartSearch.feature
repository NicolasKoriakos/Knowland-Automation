Feature: Smart Search

    Background: Login
        Given I am on Knowland Login Page
        When I access with my credentials "testinguser@gmail.com", "June@2024"
        When I choose unlimited_markets client on client
        Then I am on Knowland Home Page
        
    @2
    Scenario: New Smart Search
        When I click on Accounts & Events tab "id=edit-btn-Accounts-&-Events"
        When I click on New Custom Search option "id=new_custom_search"
        When I click on Read Single Day check box filter "id=single-day-event"
        When I click on Search button "xpath=//i[@class='fas fa-search']"