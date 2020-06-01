$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/FunnyAddition_3.feature");
formatter.feature({
  "name": "Addition is tested",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "user provides two integer values a and b, the sum should be c",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "two summable integers \u003ca\u003e and \u003cb\u003e",
  "keyword": "Given "
});
formatter.step({
  "name": "the user adds both values",
  "keyword": "When "
});
formatter.step({
  "name": "the resulting value should be positive",
  "keyword": "Then "
});
formatter.step({
  "name": "the resulting sum should be greater than \u003ca\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "the resulting sum should be greater than \u003cb\u003e",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "a",
        "b"
      ]
    },
    {
      "cells": [
        "1",
        "1"
      ]
    },
    {
      "cells": [
        "2",
        "2"
      ]
    },
    {
      "cells": [
        "4",
        "4"
      ]
    }
  ]
});
formatter.scenario({
  "name": "user provides two integer values a and b, the sum should be c",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "two summable integers 1 and 1",
  "keyword": "Given "
});
formatter.match({
  "location": "mypackage.FunnyAdditionTestSteps.summable(int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user adds both values",
  "keyword": "When "
});
formatter.match({
  "location": "mypackage.FunnyAdditionTestSteps.sumTwoValues()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the resulting value should be positive",
  "keyword": "Then "
});
formatter.match({
  "location": "mypackage.FunnyAdditionTestSteps.checkPositive()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the resulting sum should be greater than 1",
  "keyword": "And "
});
formatter.match({
  "location": "mypackage.FunnyAdditionTestSteps.checkLargerSum(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the resulting sum should be greater than 1",
  "keyword": "And "
});
formatter.match({
  "location": "mypackage.FunnyAdditionTestSteps.checkLargerSum(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user provides two integer values a and b, the sum should be c",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "two summable integers 2 and 2",
  "keyword": "Given "
});
formatter.match({
  "location": "mypackage.FunnyAdditionTestSteps.summable(int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user adds both values",
  "keyword": "When "
});
formatter.match({
  "location": "mypackage.FunnyAdditionTestSteps.sumTwoValues()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the resulting value should be positive",
  "keyword": "Then "
});
formatter.match({
  "location": "mypackage.FunnyAdditionTestSteps.checkPositive()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the resulting sum should be greater than 2",
  "keyword": "And "
});
formatter.match({
  "location": "mypackage.FunnyAdditionTestSteps.checkLargerSum(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the resulting sum should be greater than 2",
  "keyword": "And "
});
formatter.match({
  "location": "mypackage.FunnyAdditionTestSteps.checkLargerSum(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user provides two integer values a and b, the sum should be c",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "two summable integers 4 and 4",
  "keyword": "Given "
});
formatter.match({
  "location": "mypackage.FunnyAdditionTestSteps.summable(int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user adds both values",
  "keyword": "When "
});
formatter.match({
  "location": "mypackage.FunnyAdditionTestSteps.sumTwoValues()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the resulting value should be positive",
  "keyword": "Then "
});
formatter.match({
  "location": "mypackage.FunnyAdditionTestSteps.checkPositive()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the resulting sum should be greater than 4",
  "keyword": "And "
});
formatter.match({
  "location": "mypackage.FunnyAdditionTestSteps.checkLargerSum(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the resulting sum should be greater than 4",
  "keyword": "And "
});
formatter.match({
  "location": "mypackage.FunnyAdditionTestSteps.checkLargerSum(int)"
});
formatter.result({
  "status": "passed"
});
});