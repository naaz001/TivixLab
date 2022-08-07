Feature: TivixLab Feature

    User want to validate TivixLab Scenarios
    Background:
        Given User navigate to Tivixlab page

    Scenario: User search for Car in a specific Country/city with Valid Pickup and Dropdown Dates
        And User select country
        And User select city
        And User type model detail
        And User select Valid Pickup Dates
        And User select Valid DropOff Dates
        When User click on search button
        Then Results are displayed
        And User Validate the url

    Scenario: User search for Car with Invalid Pickup and Dropdown Dates
        And User select country
        And User select city
        And User type model detail
        And User select Invalid Pickup Dates
        And User select Invalid DropOff Dates
        When User click on search button
        Then Message is displayed
        And User Validate the Message
    Scenario: User search for Car  without providing Pickup and Dropdown Dates
        When User select country,city and model details and click on search buttton
        Then Alert Message is displayed
        And User Validate the Alert Message
    Scenario: User rent Car
        
        When User search for car
        When User click on rent button
        Then User can see Car details
        And  User Validate the Url
   # Scenario Outline: User provide personal data
       #When User click on rent option
      #  And User entered
      #| Name    |  LastName     |  CardNumber |    Email                  |
      #| naaz    |   khan        |  23456      |naazshikalgar234@gmail.com |
       #And User click on rent Button
       
    Scenario: User provide personal data without filling Card credentials
    And User search for car and click on rent to get car details
    When User click on rent option
        And User entered credentials
      | Name    |  LastName     |  CardNumber |    Email                  |
      | naaz    |   khan        |  23456      |naazshikalgar234@gmail.com |
       And User click on rent Button
       Then Alert displayed
       And User Validate Alert 
