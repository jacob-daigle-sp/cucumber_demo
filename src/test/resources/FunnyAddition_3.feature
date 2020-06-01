Feature: Addition is tested
  Scenario Outline: user provides two integer values a and b, the sum should be c
    Given two summable integers <a> and <b>
    When the user adds both values
    Then the resulting value should be positive
    And the resulting sum should be greater than <a>
    And the resulting sum should be greater than <b>

    Examples:
      | a | b |
      | 1 | 1 |
      | 2 | 2 |
      | 4 | 4 |