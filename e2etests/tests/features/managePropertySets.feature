Feature: Manage Property Sets

  Background: Login
    Given I am on Knowland Login Page
    When I access with my credentials "testinguser@gmail.com", "June@2024"
    And I choose unlimited_markets client on client
    Then I am on "Knowland" Home Page

  @KA23 @ReviewCompSets @NotAutomated @Regression @PropertySetFeature
  Scenario: Review Comp Sets and Property Sets
    When I click on a comp set
    Then I expand it to see the properties included in the set

  @KA24 @ManageCompSet @NotAutomated @Regression @PropertySetFeature
  Scenario: Manage a Comp Set
    When I click the "trash can" icon to delete a property from a comp set
    Then I confirm the property is removed successfully
    When I click the "pencil icon" to edit the name of a comp set
    And I save the new name
    Then I confirm the comp set name is updated
    When I delete a comp set
    Then I confirm it is removed from the list
    When I change my default comp set using the "radio button"
    Then I confirm the default comp set changes in the Account Loyalty widget on the Dashboard

  @KA25 @CloneCompSet @NotAutomated @Regression @PropertySetFeature
  Scenario: Clone a Comp Set from Another User
    When I use the user filter to view another user's comp sets
    And I click the "clone" option on one of their comp sets
    Then I go back to my comp sets
    And I confirm the cloned set is now visible in my list
