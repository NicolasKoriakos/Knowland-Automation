Feature: Meeting Space Mix

  Background: Login
    Given I am on Knowland Login Page
    When I access with my credentials "testinguser@gmail.com", "June@2024"
    And I choose unlimited_markets client on client
    Then I am on "Knowland" Home Page

  @KA33 @MeetingSpaceMix @NotAutomated @Regression @MeetingSpaceMixFeature
  Scenario: Meeting Space Mix Page Loads and Filters Update
    When I navigate to the "Meeting Space Mix" page
    And I change the "date" filter
    And I change the "comp set" filter
    Then I confirm the page updates correctly based on the filters

  @KA34 @GraphClickSearch @NotAutomated @Regression @MeetingSpaceMixFeature
  Scenario: Graph Interaction
    When I click on a graph (excluding social graphs)
    Then I confirm that the click action triggers a search
