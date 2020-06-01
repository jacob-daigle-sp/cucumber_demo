package mypackage;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

import static org.junit.Assert.assertTrue;

public class FunnyAdditionTestSteps {
	private int sum;
	private int a_value,b_value;

	//FunnAddition_1
	@When("^value (-?\\d+) and value (-?\\d+) are added")
	public void addGivenNumbers(int a, int b){
		sum = FunnyAddition.add(a,b);
	}

	@Then("^Then the resulting sum should be (-?\\d+)")
	public void checkCSum(int targetSum){
		assertTrue(targetSum == sum);
	}


	//FunnyAddition_2
	@Given("^two valid integers (-?\\d+) and (-?\\d+)")
	public void givenTwoNumbers(int a, int b){
		a_value = a;
		b_value = b;
	}

	@When("^the user adds both values")
	public void sumTwoValues(){
		sum = FunnyAddition.add(a_value, b_value);
	}

	@Then("^the resulting value should be (-?\\d+)")
	public void checkSumC(int c){
		assertTrue(c == sum);
	}

	//FunnyAddition_3
	@Given("^two summable integers (-?\\d+) and (-?\\d+)")
	public void summable(int a, int b){
		a_value = a;
		b_value = b;

		int someValue = a + b;
		assertTrue(someValue > 0);
	}

	@Then("^the resulting value should be positive")
	public void checkPositive(){
		sum = FunnyAddition.add(a_value, b_value);
		assertTrue(sum > 0);
	}

	@And("^the resulting sum should be greater than (-?\\d+)")
	public void checkLargerSum(int addValue){
		sum = FunnyAddition.add(a_value, b_value);
		assertTrue(sum > addValue);
	}





//

//
//	@And("^the resulting sum should be (-?\\d+)")
//	public void checkSum(int targetSum) {
//		assertTrue(sum == targetSum);
//	}
//
//
//	@And("^both integers are positive")
//	public void checkPositiveValues(){
//		assertTrue(a_value >= 0);
//		assertTrue(b_value >= 0);
//	}
//
//
//	@And("^the resulting value should be (-?\\d+)")
//	public void checkSumValue(int c){
//		assertTrue(c == sum);
//	}
//
//	@Then("^resulting sum should be positive")
//	public void checkSumPositive(){
//		assertTrue(sum >= 0);
//	}


}
