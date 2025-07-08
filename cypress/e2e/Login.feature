Feature: Login

    @jtest
    Scenario: Login with valid values
        Given I navigate to eCiplse page
        And I input username and password "<username>" "<password>"
        And I click Login button
        Then Homepage opens
        Examples:
            | username                   | password  |
            | jo_automation@ecapital.com | Welcom02! |