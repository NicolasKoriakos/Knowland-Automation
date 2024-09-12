Feature: Property Set Manager

  Background: Login
    Given I am on Knowland Login Page
    When I access with my credentials "testinguser@gmail.com", "June@2024"
    And I choose unlimited_markets client on client
    Then I am on Knowland Home Page

  @KA17 @BuildPropertySets @NotAutomated @Regression @PropertySetFeature
  Scenario: Search Properties and Confirm Data
    When I use the filters to search for hotels
    Then I confirm the map and list update with the applied filters
    When I expand a property card
    Then I view the "Property Overview" and confirm it loads correctly

  @KA18 @AddPropertyToCompSet @NotAutomated @Regression @PropertySetFeature
  Scenario: Add Single Hotel to Comp Set
    When I click the "+ icon" to add a single hotel to an existing comp set
    Then I confirm the hotel is added to the comp set successfully

  @KA19 @AddPropertiesInBulkToCompSet @NotAutomated @Regression @PropertySetFeature
  Scenario: Add Multiple Properties to Comp Set
    When I use the checkboxes to select multiple properties
    And I click the "+ icon" at the top of the list
    Then I confirm the selected properties are added in bulk to the comp set

  @KA20 @CreateNewCompSet @NotAutomated @Regression @PropertySetFeature
  Scenario: Create New Comp Set
    When I click the "+ icon"
    And I create a new comp set from the dropdown
    Then I confirm the new comp set is created and the selected property is added to it

  @KA21 @SearchSingleProperty @NotAutomated @Regression @PropertySetFeature
  Scenario: Property Search to Find a Single Property
    When I use the "Property Search" typeahead feature to locate a single property
    Then I confirm the property is found successfully

  @KA22 @ZoomToLocation @NotAutomated @Regression @PropertySetFeature
  Scenario: Zoom to Search Location
    When I search for a city name in the "Zoom to" box at the top right corner of the map
    Then I confirm the map updates to that location
    And I confirm properties in that area are populated
