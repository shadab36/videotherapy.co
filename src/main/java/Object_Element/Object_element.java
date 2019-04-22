package Object_Element;

import org.openqa.selenium.By;

public class Object_element {
	
	//Login opject and SignUp object
	public static By Join_now=By.xpath("(//a[text()='Join Now'])[2]");
	public static By Clinician=By.cssSelector("#loginForm >a#hide2");
	public static By First_Name=By.id("firstNameT");
	public static By User_Email=By.id("username2T");
	public static By User_password=By.id("password2T");
	public static By sign_up=By.id("signupbtnt");
	public static By Error=By.xpath("(//p[@class='sign-up-issue'])[2]");
	//#root .rendered-btn
	
	
	public static By Close_popup=By.cssSelector(".closePopup>svg");
	public static By Next=By.xpath("(//span[text()='Next'])[2]");
	public static By Last_Name=By.xpath("(//input[@type='text'])[2]");
	public static By Radio=By.xpath("(//input[@type='radio'])[1]");

	
	//dashboard
	public static By Degree_Title=By.xpath("(//*[@class='wizardForm']//button//div)[1]");
	public static By select_degree_Title=By.xpath("(//div[@role='menu'])[2]//div//div//div//div");
	
	public static By Experience=By.cssSelector("div.formParagraph:nth-child(2)>div button>div> svg");
	public static By Select_Experience=By.xpath("(//div[@role='presentation'])[2]//div//div//div//div//div");
	//register
	public static By Registration_code_radio=By.xpath("//input[@type='radio'][@value='false']");
	
	//profile element
	
	public static By profile=By.id("profile_photo");
	
	public static By logout=By.xpath("//div[text()='Log Out']");
	
	
	
	//login element 
public static By close_alert_mesage=By.xpath("//button[@data-type='close']");
public static By Login_link=By.xpath("(//a[text()='Log In'])[2]");
public static By Login_email=By.xpath("(//input[@name='email'])[2]");
public static By Login_pass=By.id("logPassword");
public static By login_cta=By.id("logbut");
	

}