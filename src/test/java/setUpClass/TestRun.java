package setUpClass;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
@RunWith(Cucumber.class)
@CucumberOptions(features = {"."},tags= {"@signup_test,@afterlogin_add_paitent "},

//plugin = {"com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-reports/report.html"},

plugin = { "html:target/site/cucumber-pretty",
"json:target/cucumber.json" }, 
glue = { "helpers", "setUpClass.StepDefinition" }, 
monochrome = true)
public class TestRun {

	@BeforeClass
	public static void beforeClass() throws Exception {
		BrowserSetUp.before_Class();
		
	}
	@AfterClass
	public static void afterClass() throws Exception {
//		BrowserSetUp.after_Class();
	
	}
 
}

















