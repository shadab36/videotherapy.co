package object_Element;

import org.openqa.selenium.By;

public class Add_New_Patient_element {
	public static By Add_Patient=By.xpath("//span[@class='title'][text()='Add Patient']");
	public static By FN=By.id("firstNameInput");
	public static By LN=By.id("lastNameInput");
	public static By Radio_button=By.xpath("//input[@type='radio']");
	public static By Email=By.id("emailInput");
	public static By Next_page=By.xpath("//span[text()='Next']");
	public static By weight=By.id("weightInput");
	public static By heightInput=By.id("heightInput");
	public static By affected=By.xpath("(//button[@type='button'])[2]");
	public static By affected_part=By.xpath("(//div[@role='menu'])[2]//div//div//div//div");
	public static By Related_symptoms=By.cssSelector("div.multiSelectionChip");
	public static By patient_suffered_duartion=By.cssSelector("div.durationPicker div.durationTypeWrapper>div");
	public static By create_paln=By.xpath("//span[text()='Create Care Plan']");
	
	//Add new WorkOut Element
	
	public static By Play_library=By.cssSelector(".headerMenuItem>a[href='#training-library']");
//	public static By FN=By.id("firstNameInput");
//	public static By LN=By.id("lastNameInput");
//	public static By Radio_button=By.xpath("//input[@type='radio']");
//	public static By Email=By.id("emailInput");
//	public static By Next_page=By.xpath("//span[text()='Next']");
//	public static By weight=By.id("weightInput");
}
