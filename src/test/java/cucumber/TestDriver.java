package cucumber;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(plugin = {"pretty", "html:target/cucumber", "junit:target/junit-report.xml"},
		features="src/test/resources/FunnyAddition_3.feature",
		glue = "mypackage",
		strict = true)
public class TestDriver {

}
