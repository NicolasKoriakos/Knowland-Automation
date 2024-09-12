Feature: Weekly Calendar

  Background: Login
    Given I am on Knowland Login Page
    When I access with my credentials "testinguser@gmail.com", "June@2024"
    And I choose unlimited_markets client on client
    Then I am on Knowland Home Page

  @KA61 @Filters @NotAutomated @Regression @WeeklyCalendarFeature
  Scenario: Filters Update Page
    When I change the comp set filter
    Then I confirm the property list updates
    When I change the date filter
    Then I confirm the calendar updates

  @KA62 @AssignOwner @NotAutomated @Regression @WeeklyCalendarFeature
  Scenario: Assign Owner & Account Set from Calendar
    When I click the assign link in the calendar
    And I save the assignment
    Then I confirm the name shows in the calendar after saving

  @KA63 @Hyperlinks @NotAutomated @Regression @WeeklyCalendarFeature
  Scenario: Hyperlinks Open Correct Pages
    When I click on an Account name
    Then I confirm it opens the Account Details page
    When I click on a Property name
    Then I confirm it opens the Property Details page

  @KA64 @CreateCompSet @NotAutomated @Regression @WeeklyCalendarFeature
  Scenario: Create a New Comp Set
    When I click on the "Create Comp Set" button
    And I enter the information and select "Set as my default competitive set"
    And I click the "Create Comp Set" button
    Then I verify the page loads with the newly created comp set
    When I navigate to the Competitive Set Manager - Manage
    Then I verify the newly created comp set is set to default

  @KA65 @ScheduleCompSet @NotAutomated @Regression @WeeklyCalendarFeature
  Scenario: Schedule, Change, and Delete a Comp Set
    When I click the envelope icon to set up a scheduled comp set calendar
    Then I confirm the icon updates after saving to display the weekday
    When I refresh the page
    Then I confirm the comp set dropdown now displays an envelope icon next to the scheduled comp set
    When I edit the schedule and move it to a different day and save
    And I edit the schedule and delete it
    Then I confirm the icon updates and the dropdown icon is removed (requires a refresh)

  @KA66 @Export @NotAutomated @Regression @WeeklyCalendarFeature
  Scenario: Export Page to Excel
    When I export the page to Excel
    Then I check both tabs and confirm they match the details from the page
