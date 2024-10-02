Feature: Smart Search

    Background: Login
        Given I am on Knowland Login Page
        When I access with my credentials "testinguser@gmail.com", "June@2024"
        When I choose unlimited_markets client on client
        Then I am on "Knowland" Home Page

    @KA02 @CreateNewSearch @Automated @Regression @SmartSearchFeature
    Scenario: Create New Search
        When I click on "Accounts&Events" element on Home Page
        And I click on "New_Custom_Search" element on Home Page
        And I click on "Single_Day_Event" and confirm that "estimated_accounts_counter" changes
        And I click on "property_attributes" element on Search Page
        And I click on "restaurant" and confirm that "estimated_accounts_counter" changes
        And I click on "account_attributes" element on Search Page
        And I click on "corporate" and confirm that "estimated_accounts_counter" changes
        When I click on "run_search" element on Search Page
        Then I verify the "search_results" are displayed on Search Results Page

    @KA03 @EditExistingSearch @Automated @Regression @SmartSearchFeature
    Scenario: Edit Existing Search
        When I click on first "Recent_Searches_Link" on Home Page
        And I check "search_results"
        And I click on "pencil_icon" element on Search Results Page
        And I click on "Single_Day_Event" and confirm that "estimated_accounts_counter" changes
        Then I click on "save_search" element on Search Page
        Then I verify that "search_results" changes

    @KA04 @ScheduleSearch @Automated @Regression @SmartSearchFeature
    Scenario: Schedule a SearchPage
        When I click on first "Recent_Searches_Link" on Home Page
        And I check "container"
        And I click on "search_actions" element on Search Results Page
        And I click on "Schedule" dropdown element
        And I click on "schedule_button" element on Search Results Page 
        Then I verify that "container" changes

    @KA05 @ViewSearchResults @NotAutomated @Regression @SmartSearchFeature
    Scenario: View Search Results
        When I click on first "Recent_Searches_Link" on Home Page
        And I check "search_results"
        And I click on first "check" on pane highlights
        Then I verify that "search_results" changes
        Then I confirm the search results update
        When I change the page sort to view results by booking count
        And I expand a booking to view booking details
        When I click on the "people icon" to assign an account
        And I add it to an account set
        Then I export the search results
