Feature: Person Icon

  Background: Login
    Given I am on Knowland Login Page
    When I access with my credentials "testinguser@gmail.com", "June@2024"
    When I choose unlimited_markets client on client
    Then I am on Knowland Home Page
  @1  
  Scenario: Search Settings
    When I click on Name Initials button "id=user-initials"
    When I chooce Search Settings option "id=search_settings" 
    When I search Master Account ID "6462"
    Then Verify that "id=header-title-dashboard" contains "Marriott Albuquerque"