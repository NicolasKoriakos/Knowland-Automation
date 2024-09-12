Feature: Smart Search

    Background: Login
        Given I am on Knowland Login Page
        When I access with my credentials "testinguser@gmail.com", "June@2024"
        When I choose unlimited_markets client on client
        Then I am on Knowland Home Page

    @KA02 @CreateNewSearch @NotAutomated @Regression @SmartSearchFeature
    Scenario: Create New Search
        When I click on "Accounts&Events" in the top navigation bar
        And I click on "New Custom Search"
        And I fill out filters from all 3 top tabs
        Then I confirm the estimated accounts count updates as filters are applied
        When I click on "Run Search"
        Then I verify the search results are displayed

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


