Feature: Typeahead Top Bar

  Background: Login
    Given I am on Knowland Login Page
    When I access with my credentials "testinguser@gmail.com", "June@2024"
    And I choose unlimited_markets client on client
    Then I am on "Knowland" Home Page

  @KA58 @AccountTypeahead @NotAutomated @Regression @TypeaheadTopBarFeature
  Scenario: Navigate to Account Details Using Typeahead
    When I start typing an account name in the typeahead search bar
    And I select the account from the list
    Then I confirm the Account Details page opens

  @KA59 @PropertyTypeahead @NotAutomated @Regression @TypeaheadTopBarFeature
  Scenario: Navigate to Property Details Using Typeahead
    When I click the down arrow to switch to property search
    And I start typing a property name in the typeahead search bar
    And I select the property from the list
    Then I confirm the Property Details page opens

  @KA60 @SearchTypeahead @NotAutomated @Regression @TypeaheadTopBarFeature
  Scenario: Run a Search Using Typeahead
    When I type a keyword (e.g., "pharma") in the typeahead search bar
    And I click the blue search icon
    Then I confirm it runs an account keyword search and takes me to the search results
