Feature: Property Set Manager

  Background: Login
    Given I am on Knowland Login Page
    When I access with my credentials "testinguser@gmail.com", "June@2024"
    And I choose unlimited_markets client on client
    Then I am on "Knowland" Home Page
    When I click on "tools" element on Home Page
    And I click on "competitive_set_manager" element on Home Page

  @KA17 @BuildPropertySets @NotAutomated @Regression @PropertySetFeature
  Scenario: Search Properties and Confirm Data
    When I check "map_list_container" on Competitive Set Manager
    And I click on "location_drop" element on Competitive Set Manager
    And I click on "airport_filter" element on Competitive Set Manager
    And I click on "outside" element on Competitive Set Manager
    Then I confirm the "map_list_container" page updates
    When I click on "property_card" element on Competitive Set Manager
    Then I check that the "overview" contains the filter "airport"

  @KA18 @AddPropertyToCompSet @NotAutomated @Regression @PropertySetFeature
  Scenario: Add Single Hotel to Comp Set
    When I check "add_icon" on Competitive Set Manager
    And  I click on "add_icon" on Competitive Set Manager
    And I click on "existing_compset" element on Competitive Set Manager
    Then I confirm the "add_icon" page updates
    When I select "checkbox" "1", "2" and "3" 
    And I click on "top_add_icon"

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
