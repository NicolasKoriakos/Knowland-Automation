Feature: Person Icon

  Background: Login
    Given I am on Knowland Login Page
    When I access with my credentials "testinguser@gmail.com", "June@2024"
    When I choose unlimited_markets client on client
    Then I am on Knowland Home Page
    
  @KA01 @automated @Regression @PersonIconFeature
  Scenario: Search Settings
    When I click on "name_initials" element on Home Page
    And I click on "search_settings" element on Home Page
    And I clear "master_account_search_input" element on Account Search Page
    And I send the keys "6462" to the "master_account_search_input" element on Account Search Page
    And I click on "master_account_search_button" element on Account Search Page
    And I click on "apply_and_exit" element on Account Search Page
    Then Verify than "dashboard_account_name" changed to "Marriott Albuquerque" on Home Page
