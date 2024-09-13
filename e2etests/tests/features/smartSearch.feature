Feature: Smart Search

    Background: Login
        Given I am on Knowland Login Page
        When I access with my credentials "testinguser@gmail.com", "June@2024"
        When I choose unlimited_markets client on client
        Then I am on Knowland Home Page

    @KA02 @CreateNewSearch @NotAutomated @Regression @SmartSearchFeature
    Scenario: Create New Search
        When I click on "Accounts&Events" element on Home Page
        And I click on "New_Custom_Search" element on Home Page
        And I click on "Single_Day_Event" and confirm that "estimated_accounts_counter" chenges
        And I click on "property_attributes" element on Home Page
        And I click on "restaurant" and confirm that "estimated_accounts_counter" chenges
        And I click on "account_attributes" element on Home Page
        And I click on "corporate" and confirm that "estimated_accounts_counter" chenges
        When I click on "run_search" element on Home Page
        Then I verify the "search_results" are displayed on Search Results Page

    @KA03 @EditExistingSearch @NotAutomated @Regression @SmartSearchFeature
    Scenario: Edit Existing Search
        When I click on the "pencil icon" to edit an existing search
        And I update a few filters
        When I click on "Run Search"
        Then I confirm the search results are updated

    @KA04 @ScheduleSearch @NotAutomated @Regression @SmartSearchFeature
    Scenario: Schedule a Search
        When I click on the "search actions" dropdown from the search results
        And I click on "Schedule"
        And I set up the scheduler and save
        Then I confirm the search moves to the "Scheduled Searches" section in the left pane

    @KA05 @ViewSearchResults @NotAutomated @Regression @SmartSearchFeature
    Scenario: View Search Results
        When I disable a filter using the left pane highlights
        Then I confirm the search results update
        When I change the page sort to view results by booking count
        And I expand a booking to view booking details
        When I click on the "people icon" to assign an account
        And I add it to an account set
        Then I export the search results


