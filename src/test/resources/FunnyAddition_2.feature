Feature: Addition is tested
  Scenario Outline: user provides two integer values a and b, the sum should be c
    Given two valid integers <a> and <b>
    When the user adds both values
    Then the resulting value should be <c>

    Examples:
      | a | b | c|
      | 1 | 1 | 2|
      | 2 | 2 | 4|
      | 4 | 4 | 8|