Feature: Administration (Name Initials Dropdown)

  Background: Login
    Given I am on Knowland Login Page
    When I access with my credentials "testinguser@gmail.com", "June@2024"
    And I choose unlimited_markets client on client
    Then I am on "Knowland" Home Page

  @KA26 @ProfileTabs @NotAutomated @Regression @AdminFeature
  Scenario: Profile Tabs Load Data
    When I navigate to the "Profile" section
    Then I confirm "My Assigned Accounts" list only shows my name in the "Assigned To" column
    And I confirm "My Account Sets" list only shows account sets with my name
    And I confirm "My Account Alert" list only shows my account alerts
    And I confirm "My Saved Searches" list only shows my name listed under "owner"
    And I confirm "My Scheduled Searches" list only shows scheduled searches with my name listed under "recipient"

  @KA27 @ProfileUserDetails @NotAutomated @Regression @AdminFeature
  Scenario: View and Edit User Details
    When I navigate to the "Profile: User Details" section
    Then I confirm it displays the logged-in user’s name
    When I click the "edit icon" in the top right corner
    Then I confirm the "edit user" pop-up opens

  @KA28 @TeamManagementPage @NotAutomated @Regression @AdminFeature
  Scenario: Team Management Page Navigation
    When I navigate to the "Team Management" page
    Then I confirm the page loads as expected

  @KA29 @CreateAndEditUser @NotAutomated @Regression @AdminFeature
  Scenario: Create and Edit User
    When I create a new user
    Then I confirm the new user is created successfully
    When I edit an existing user
    Then I confirm the user details are updated successfully

  @KA30 @AssignedAccountsPage @NotAutomated @Regression @AdminFeature
  Scenario: Assigned Accounts Page Navigation
    When I navigate to the "Assigned Accounts" page
    Then I confirm the page loads as expected

  @KA31 @AccountSetsPage @NotAutomated @Regression @AdminFeature
  Scenario: Account Sets Page Navigation
    When I navigate to the "Account Sets" page
    Then I confirm the page loads as expected

  @KA32 @SearchesPage @NotAutomated @Regression @AdminFeature
  Scenario: Searches Page Navigation
    When I navigate to the "Searches" page
    Then I confirm the page loads as expected
