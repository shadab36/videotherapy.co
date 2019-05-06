$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/1Signup.feature");
formatter.feature({
  "line": 2,
  "name": "Sign up test on the videotherapy.co application",
  "description": "",
  "id": "sign-up-test-on-the-videotherapy.co-application",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@signup_test"
    }
  ]
});
formatter.scenario({
  "line": 3,
  "name": "",
  "description": "",
  "id": "sign-up-test-on-the-videotherapy.co-application;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "navigate the application URL.",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Click on Join now button.",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Click on Clinician image.",
  "keyword": "Then "
});
formatter.match({
  "location": "SignUp_step.open_the_website_url()"
});
formatter.result({
  "duration": 9454682200,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_step.click_on_Sign_up_button()"
});
formatter.result({
  "duration": 816021000,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_step.Clinician_image()"
});
formatter.result({
  "duration": 2091270600,
  "status": "passed"
});
formatter.after({
  "duration": 427100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Signup test with invalid data.",
  "description": "",
  "id": "sign-up-test-on-the-videotherapy.co-application;signup-test-with-invalid-data.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "Enter User First Name as \"\u003cFirst Name\u003e\".",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter User Email Address as \"\u003cEmail Address\u003e\".",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Enter User Password as \"\u003cPassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Select Terms \u0026 Conditions check box.",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Click on SignUp CTA.",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Verify \"\u003cFirst NameVal\u003e\" validation message for First Name.",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Verify \"\u003cEmail AddressVal\u003e\" validation message for Email Address.",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Verify \"\u003cPasswordVal\u003e\" validation message for Password.",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Verify \"\u003cerrormessage\u003e\" user is already existing or not.",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "sign-up-test-on-the-videotherapy.co-application;signup-test-with-invalid-data.;",
  "rows": [
    {
      "cells": [
        "First Name",
        "Email Address",
        "Password",
        "First NameVal",
        "Email AddressVal",
        "PasswordVal",
        "errormessage"
      ],
      "line": 18,
      "id": "sign-up-test-on-the-videotherapy.co-application;signup-test-with-invalid-data.;;1"
    },
    {
      "cells": [
        "",
        "",
        "",
        "Please fill out this field.",
        "Please fill out this field.",
        "Please fill out this field.",
        ""
      ],
      "line": 19,
      "id": "sign-up-test-on-the-videotherapy.co-application;signup-test-with-invalid-data.;;2"
    },
    {
      "cells": [
        "Test",
        "",
        "",
        "",
        "Please fill out this field.",
        "Please fill out this field.",
        ""
      ],
      "line": 20,
      "id": "sign-up-test-on-the-videotherapy.co-application;signup-test-with-invalid-data.;;3"
    },
    {
      "cells": [
        "Test",
        "Test@@gmail.com",
        "",
        "",
        "A part following \u0027@\u0027 should not contain the symbol \u0027@\u0027.",
        "Please fill out this field.",
        ""
      ],
      "line": 21,
      "id": "sign-up-test-on-the-videotherapy.co-application;signup-test-with-invalid-data.;;4"
    },
    {
      "cells": [
        "Test",
        "Test@gmail.com",
        "",
        "",
        "",
        "Please fill out this field.",
        ""
      ],
      "line": 22,
      "id": "sign-up-test-on-the-videotherapy.co-application;signup-test-with-invalid-data.;;5"
    },
    {
      "cells": [
        "Test",
        "Test@getnada.com",
        "1234",
        "",
        "",
        "Please match the requested format.",
        ""
      ],
      "line": 23,
      "id": "sign-up-test-on-the-videotherapy.co-application;signup-test-with-invalid-data.;;6"
    },
    {
      "cells": [
        "Test",
        "Test@getnada.com",
        "12345678",
        "",
        "",
        "",
        ""
      ],
      "line": 24,
      "id": "sign-up-test-on-the-videotherapy.co-application;signup-test-with-invalid-data.;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 19,
  "name": "Signup test with invalid data.",
  "description": "",
  "id": "sign-up-test-on-the-videotherapy.co-application;signup-test-with-invalid-data.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@signup_test"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "Enter User First Name as \"\".",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter User Email Address as \"\".",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Enter User Password as \"\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Select Terms \u0026 Conditions check box.",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Click on SignUp CTA.",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Verify \"Please fill out this field.\" validation message for First Name.",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Verify \"Please fill out this field.\" validation message for Email Address.",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Verify \"Please fill out this field.\" validation message for Password.",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Verify \"\" user is already existing or not.",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 26
    }
  ],
  "location": "SignUp_step.enter_User_First_Name_as(String)"
});
formatter.result({
  "duration": 2778474700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 29
    }
  ],
  "location": "SignUp_step.enter_User_Email_Address_as(String)"
});
formatter.result({
  "duration": 1729812300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 24
    }
  ],
  "location": "SignUp_step.enter_User_Password_as(String)"
});
formatter.result({
  "duration": 1675437400,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_step.select_Terms_Conditions_check_box()"
});
formatter.result({
  "duration": 28265200,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_step.click_on_SignUp_CTA()"
});
formatter.result({
  "duration": 978643000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please fill out this field.",
      "offset": 8
    }
  ],
  "location": "SignUp_step.verify_validation_message_for_First_Name(String)"
});
formatter.result({
  "duration": 44785500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please fill out this field.",
      "offset": 8
    }
  ],
  "location": "SignUp_step.verify_validation_message_for_Email_Address(String)"
});
formatter.result({
  "duration": 47516900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please fill out this field.",
      "offset": 8
    }
  ],
  "location": "SignUp_step.verify_validation_message_for_Password(String)"
});
formatter.result({
  "duration": 47799200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 8
    }
  ],
  "location": "SignUp_step.error_messge_regitered_user(String)"
});
formatter.result({
  "duration": 68322900,
  "status": "passed"
});
formatter.after({
  "duration": 45200,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Signup test with invalid data.",
  "description": "",
  "id": "sign-up-test-on-the-videotherapy.co-application;signup-test-with-invalid-data.;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@signup_test"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "Enter User First Name as \"Test\".",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter User Email Address as \"\".",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Enter User Password as \"\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Select Terms \u0026 Conditions check box.",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Click on SignUp CTA.",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Verify \"\" validation message for First Name.",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Verify \"Please fill out this field.\" validation message for Email Address.",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Verify \"Please fill out this field.\" validation message for Password.",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Verify \"\" user is already existing or not.",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 26
    }
  ],
  "location": "SignUp_step.enter_User_First_Name_as(String)"
});
formatter.result({
  "duration": 2670021100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 29
    }
  ],
  "location": "SignUp_step.enter_User_Email_Address_as(String)"
});
formatter.result({
  "duration": 1711308200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 24
    }
  ],
  "location": "SignUp_step.enter_User_Password_as(String)"
});
formatter.result({
  "duration": 1629200400,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_step.select_Terms_Conditions_check_box()"
});
formatter.result({
  "duration": 9179300,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_step.click_on_SignUp_CTA()"
});
formatter.result({
  "duration": 580763700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 8
    }
  ],
  "location": "SignUp_step.verify_validation_message_for_First_Name(String)"
});
formatter.result({
  "duration": 54286400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please fill out this field.",
      "offset": 8
    }
  ],
  "location": "SignUp_step.verify_validation_message_for_Email_Address(String)"
});
formatter.result({
  "duration": 47913800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please fill out this field.",
      "offset": 8
    }
  ],
  "location": "SignUp_step.verify_validation_message_for_Password(String)"
});
formatter.result({
  "duration": 48687100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 8
    }
  ],
  "location": "SignUp_step.error_messge_regitered_user(String)"
});
formatter.result({
  "duration": 153222100,
  "status": "passed"
});
formatter.after({
  "duration": 66000,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Signup test with invalid data.",
  "description": "",
  "id": "sign-up-test-on-the-videotherapy.co-application;signup-test-with-invalid-data.;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@signup_test"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "Enter User First Name as \"Test\".",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter User Email Address as \"Test@@gmail.com\".",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Enter User Password as \"\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Select Terms \u0026 Conditions check box.",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Click on SignUp CTA.",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Verify \"\" validation message for First Name.",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Verify \"A part following \u0027@\u0027 should not contain the symbol \u0027@\u0027.\" validation message for Email Address.",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Verify \"Please fill out this field.\" validation message for Password.",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Verify \"\" user is already existing or not.",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 26
    }
  ],
  "location": "SignUp_step.enter_User_First_Name_as(String)"
});
formatter.result({
  "duration": 2777328700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test@@gmail.com",
      "offset": 29
    }
  ],
  "location": "SignUp_step.enter_User_Email_Address_as(String)"
});
formatter.result({
  "duration": 1713868800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 24
    }
  ],
  "location": "SignUp_step.enter_User_Password_as(String)"
});
formatter.result({
  "duration": 1625098800,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_step.select_Terms_Conditions_check_box()"
});
formatter.result({
  "duration": 8737900,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_step.click_on_SignUp_CTA()"
});
formatter.result({
  "duration": 587323200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 8
    }
  ],
  "location": "SignUp_step.verify_validation_message_for_First_Name(String)"
});
formatter.result({
  "duration": 39689400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A part following \u0027@\u0027 should not contain the symbol \u0027@\u0027.",
      "offset": 8
    }
  ],
  "location": "SignUp_step.verify_validation_message_for_Email_Address(String)"
});
formatter.result({
  "duration": 38435700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please fill out this field.",
      "offset": 8
    }
  ],
  "location": "SignUp_step.verify_validation_message_for_Password(String)"
});
formatter.result({
  "duration": 35804700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 8
    }
  ],
  "location": "SignUp_step.error_messge_regitered_user(String)"
});
formatter.result({
  "duration": 50752200,
  "status": "passed"
});
formatter.after({
  "duration": 45000,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Signup test with invalid data.",
  "description": "",
  "id": "sign-up-test-on-the-videotherapy.co-application;signup-test-with-invalid-data.;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@signup_test"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "Enter User First Name as \"Test\".",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter User Email Address as \"Test@gmail.com\".",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Enter User Password as \"\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Select Terms \u0026 Conditions check box.",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Click on SignUp CTA.",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Verify \"\" validation message for First Name.",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Verify \"\" validation message for Email Address.",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Verify \"Please fill out this field.\" validation message for Password.",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Verify \"\" user is already existing or not.",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 26
    }
  ],
  "location": "SignUp_step.enter_User_First_Name_as(String)"
});
formatter.result({
  "duration": 2676760700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test@gmail.com",
      "offset": 29
    }
  ],
  "location": "SignUp_step.enter_User_Email_Address_as(String)"
});
formatter.result({
  "duration": 1750322400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 24
    }
  ],
  "location": "SignUp_step.enter_User_Password_as(String)"
});
formatter.result({
  "duration": 1636372900,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_step.select_Terms_Conditions_check_box()"
});
formatter.result({
  "duration": 9568500,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_step.click_on_SignUp_CTA()"
});
formatter.result({
  "duration": 580171200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 8
    }
  ],
  "location": "SignUp_step.verify_validation_message_for_First_Name(String)"
});
formatter.result({
  "duration": 25236900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 8
    }
  ],
  "location": "SignUp_step.verify_validation_message_for_Email_Address(String)"
});
formatter.result({
  "duration": 21364900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please fill out this field.",
      "offset": 8
    }
  ],
  "location": "SignUp_step.verify_validation_message_for_Password(String)"
});
formatter.result({
  "duration": 23464000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 8
    }
  ],
  "location": "SignUp_step.error_messge_regitered_user(String)"
});
formatter.result({
  "duration": 35986300,
  "status": "passed"
});
formatter.after({
  "duration": 42800,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Signup test with invalid data.",
  "description": "",
  "id": "sign-up-test-on-the-videotherapy.co-application;signup-test-with-invalid-data.;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@signup_test"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "Enter User First Name as \"Test\".",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter User Email Address as \"Test@getnada.com\".",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Enter User Password as \"1234\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Select Terms \u0026 Conditions check box.",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Click on SignUp CTA.",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Verify \"\" validation message for First Name.",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Verify \"\" validation message for Email Address.",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Verify \"Please match the requested format.\" validation message for Password.",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Verify \"\" user is already existing or not.",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 26
    }
  ],
  "location": "SignUp_step.enter_User_First_Name_as(String)"
});
formatter.result({
  "duration": 2672338100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test@getnada.com",
      "offset": 29
    }
  ],
  "location": "SignUp_step.enter_User_Email_Address_as(String)"
});
formatter.result({
  "duration": 1711067800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234",
      "offset": 24
    }
  ],
  "location": "SignUp_step.enter_User_Password_as(String)"
});
formatter.result({
  "duration": 1632312700,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_step.select_Terms_Conditions_check_box()"
});
formatter.result({
  "duration": 7944000,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_step.click_on_SignUp_CTA()"
});
formatter.result({
  "duration": 575549500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 8
    }
  ],
  "location": "SignUp_step.verify_validation_message_for_First_Name(String)"
});
formatter.result({
  "duration": 21120700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 8
    }
  ],
  "location": "SignUp_step.verify_validation_message_for_Email_Address(String)"
});
formatter.result({
  "duration": 25588300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please match the requested format.",
      "offset": 8
    }
  ],
  "location": "SignUp_step.verify_validation_message_for_Password(String)"
});
formatter.result({
  "duration": 31503200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 8
    }
  ],
  "location": "SignUp_step.error_messge_regitered_user(String)"
});
formatter.result({
  "duration": 36658100,
  "status": "passed"
});
formatter.after({
  "duration": 49600,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Signup test with invalid data.",
  "description": "",
  "id": "sign-up-test-on-the-videotherapy.co-application;signup-test-with-invalid-data.;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@signup_test"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "Enter User First Name as \"Test\".",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter User Email Address as \"Test@getnada.com\".",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Enter User Password as \"12345678\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Select Terms \u0026 Conditions check box.",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Click on SignUp CTA.",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Verify \"\" validation message for First Name.",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Verify \"\" validation message for Email Address.",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Verify \"\" validation message for Password.",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Verify \"\" user is already existing or not.",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 26
    }
  ],
  "location": "SignUp_step.enter_User_First_Name_as(String)"
});
formatter.result({
  "duration": 2660805500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test@getnada.com",
      "offset": 29
    }
  ],
  "location": "SignUp_step.enter_User_Email_Address_as(String)"
});
formatter.result({
  "duration": 1713909800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345678",
      "offset": 24
    }
  ],
  "location": "SignUp_step.enter_User_Password_as(String)"
});
formatter.result({
  "duration": 1683694800,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_step.select_Terms_Conditions_check_box()"
});
formatter.result({
  "duration": 9402900,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_step.click_on_SignUp_CTA()"
});
formatter.result({
  "duration": 583482100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 8
    }
  ],
  "location": "SignUp_step.verify_validation_message_for_First_Name(String)"
});
formatter.result({
  "duration": 27344800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 8
    }
  ],
  "location": "SignUp_step.verify_validation_message_for_Email_Address(String)"
});
formatter.result({
  "duration": 27579800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 8
    }
  ],
  "location": "SignUp_step.verify_validation_message_for_Password(String)"
});
formatter.result({
  "duration": 15813100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 8
    }
  ],
  "location": "SignUp_step.error_messge_regitered_user(String)"
});
formatter.result({
  "duration": 42740300,
  "status": "passed"
});
formatter.after({
  "duration": 62100,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "",
  "description": "",
  "id": "sign-up-test-on-the-videotherapy.co-application;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 26,
      "name": "@signupTest_valid"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "Refresh the page.",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Click on Join now button.",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "Click on Clinician image.",
  "keyword": "Then "
});
formatter.match({
  "location": "SignUp_step.refresh_the_page()"
});
formatter.result({
  "duration": 1681932400,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_step.click_on_Sign_up_button()"
});
formatter.result({
  "duration": 682109600,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_step.Clinician_image()"
});
formatter.result({
  "duration": 1632283300,
  "status": "passed"
});
formatter.after({
  "duration": 140600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 31,
  "name": "Data driving for valid sign-up.",
  "description": "",
  "id": "sign-up-test-on-the-videotherapy.co-application;data-driving-for-valid-sign-up.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 32,
  "name": "Enter User First Name as \"\u003cFirst Name\u003e\".",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "Enter Email \"\u003cEmail Address\u003e\".",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "Enter User Password as \"\u003cPassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "Select Terms \u0026 Conditions check box.",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "Click on SignUp CTA.",
  "keyword": "Then "
});
formatter.examples({
  "line": 37,
  "name": "",
  "description": "",
  "id": "sign-up-test-on-the-videotherapy.co-application;data-driving-for-valid-sign-up.;",
  "rows": [
    {
      "cells": [
        "First Name",
        "Email Address",
        "Password"
      ],
      "line": 38,
      "id": "sign-up-test-on-the-videotherapy.co-application;data-driving-for-valid-sign-up.;;1"
    },
    {
      "cells": [
        "Test",
        "seleniumqa169@getnada.com",
        "12345678"
      ],
      "line": 39,
      "id": "sign-up-test-on-the-videotherapy.co-application;data-driving-for-valid-sign-up.;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 39,
  "name": "Data driving for valid sign-up.",
  "description": "",
  "id": "sign-up-test-on-the-videotherapy.co-application;data-driving-for-valid-sign-up.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@signup_test"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "Enter User First Name as \"Test\".",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "Enter Email \"seleniumqa169@getnada.com\".",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "Enter User Password as \"12345678\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "Select Terms \u0026 Conditions check box.",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "Click on SignUp CTA.",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Test",
      "offset": 26
    }
  ],
  "location": "SignUp_step.enter_User_First_Name_as(String)"
});
formatter.result({
  "duration": 2693626100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "seleniumqa169@getnada.com",
      "offset": 13
    }
  ],
  "location": "SignUp_step.enter_new_mail(String)"
});
formatter.result({
  "duration": 2385374900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345678",
      "offset": 24
    }
  ],
  "location": "SignUp_step.enter_User_Password_as(String)"
});
formatter.result({
  "duration": 1731091400,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_step.select_Terms_Conditions_check_box()"
});
formatter.result({
  "duration": 29266200,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_step.click_on_SignUp_CTA()"
});
formatter.result({
  "duration": 591486500,
  "status": "passed"
});
formatter.after({
  "duration": 57100,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "",
  "description": "",
  "id": "sign-up-test-on-the-videotherapy.co-application;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 41,
      "name": "@follow_the_instructions"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "Close the Popup alert message.",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "click on \"Next\" button.",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "Fill last name and select radio button.",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "click on \"Next\" button.",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "Select Degree Title.",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "Select Experience Title.",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "click on \"Next\" button.",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "Select registarion code as \"NO\"",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "click on \"Next\" button.",
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "Click on Finish Button.",
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "Hover on the profile image icon.",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "Click on Logout button.",
  "keyword": "Then "
});
formatter.match({
  "location": "SignUp_step.close_popup()"
});
formatter.result({
  "duration": 9113913500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Next",
      "offset": 10
    }
  ],
  "location": "SignUp_step.click_on_button(String)"
});
formatter.result({
  "duration": 746808600,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_step.fill_last_name_and_select_radio_button()"
});
formatter.result({
  "duration": 2394972500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Next",
      "offset": 10
    }
  ],
  "location": "SignUp_step.click_on_button(String)"
});
formatter.result({
  "duration": 601880100,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_step.select_Degree_and_Experience_Title()"
});
formatter.result({
  "duration": 2743725400,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_step.experience_title()"
});
formatter.result({
  "duration": 3509758600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Next",
      "offset": 10
    }
  ],
  "location": "SignUp_step.click_on_button(String)"
});
formatter.result({
  "duration": 612495200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NO",
      "offset": 28
    }
  ],
  "location": "SignUp_step.select_registarion_code_as(String)"
});
formatter.result({
  "duration": 1579097400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Next",
      "offset": 10
    }
  ],
  "location": "SignUp_step.click_on_button(String)"
});
formatter.result({
  "duration": 588635700,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_step.click_on_Finish_Button()"
});
formatter.result({
  "duration": 1096287100,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_step.profile()"
});
formatter.result({
  "duration": 4980136800,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_step.logout()"
});
formatter.result({
  "duration": 3630407000,
  "status": "passed"
});
formatter.after({
  "duration": 45600,
  "status": "passed"
});
formatter.scenario({
  "line": 56,
  "name": "",
  "description": "",
  "id": "sign-up-test-on-the-videotherapy.co-application;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 57,
  "name": "Login the application.",
  "keyword": "Then "
});
formatter.match({
  "location": "SignUp_step.login()"
});
formatter.result({
  "duration": 7112505300,
  "status": "passed"
});
formatter.after({
  "duration": 37400,
  "status": "passed"
});
formatter.uri("src/test/resources/2Add_New_Patient.feature");
formatter.feature({
  "line": 2,
  "name": "Add new Patient videotherapy.co application",
  "description": "",
  "id": "add-new-patient-videotherapy.co-application",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@afterlogin_add_paitent"
    }
  ]
});
formatter.scenario({
  "line": 3,
  "name": "",
  "description": "",
  "id": "add-new-patient-videotherapy.co-application;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Add the new \"Add Patient\".",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Enter \"FirstName\" and \"LastName\".",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Select Gender",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Enter Email address.",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Click on Next \"Next\" button.",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter user Height and Weight.",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Click on Next \"Next\" button.",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Select main affected body part.",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Select additional involved body part.",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Click on Next \"Next\" button.",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "select Related symptoms.",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Select patient suffered from this problem option.",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Click on create care plan \"create care plan\".",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Add Patient",
      "offset": 13
    }
  ],
  "location": "Add_New_Patient.add_the_new(String)"
});
formatter.result({
  "duration": 3563237800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "FirstName",
      "offset": 7
    },
    {
      "val": "LastName",
      "offset": 23
    }
  ],
  "location": "Add_New_Patient.enter_and(String,String)"
});
formatter.result({
  "duration": 1321155600,
  "status": "passed"
});
formatter.match({
  "location": "Add_New_Patient.select_Gender()"
});
formatter.result({
  "duration": 2113766500,
  "status": "passed"
});
formatter.match({
  "location": "Add_New_Patient.enter_Email_address()"
});
formatter.result({
  "duration": 1744048000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Next",
      "offset": 15
    }
  ],
  "location": "Add_New_Patient.click_on_button(String)"
});
formatter.result({
  "duration": 2125567700,
  "status": "passed"
});
formatter.match({
  "location": "Add_New_Patient.enter_user_and_Weight()"
});
formatter.result({
  "duration": 1045153900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Next",
      "offset": 15
    }
  ],
  "location": "Add_New_Patient.click_on_button(String)"
});
formatter.result({
  "duration": 2137088000,
  "status": "passed"
});
formatter.match({
  "location": "Add_New_Patient.select_main_affected_body_part()"
});
formatter.result({
  "duration": 5398726200,
  "status": "passed"
});
formatter.match({
  "location": "Add_New_Patient.select_additional_involved_body_part()"
});
formatter.result({
  "duration": 2096287700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Next",
      "offset": 15
    }
  ],
  "location": "Add_New_Patient.click_on_button(String)"
});
formatter.result({
  "duration": 2142941400,
  "status": "passed"
});
formatter.match({
  "location": "Add_New_Patient.select_Related_symptoms()"
});
formatter.result({
  "duration": 2633793900,
  "status": "passed"
});
formatter.match({
  "location": "Add_New_Patient.select_patient_suffered_from_this_problem_option()"
});
formatter.result({
  "duration": 24025322900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create care plan",
      "offset": 27
    }
  ],
  "location": "Add_New_Patient.click_on(String)"
});
formatter.result({
  "duration": 763728700,
  "status": "passed"
});
formatter.after({
  "duration": 174400,
  "status": "passed"
});
formatter.uri("src/test/resources/3Add_Workout.feature");
formatter.feature({
  "line": 2,
  "name": "Add new Workout Library",
  "description": "",
  "id": "add-new-workout-library",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Add__new_Workout"
    }
  ]
});
formatter.scenario({
  "line": 3,
  "name": "",
  "description": "",
  "id": "add-new-workout-library;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Click on play LIBRARY \"LIBRARY\" button.",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Click on Add Workout button.",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Enter Workout name.",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Select the Muscles strength.",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Finish the workout.",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "LIBRARY",
      "offset": 23
    }
  ],
  "location": "Add_Workout.click_on_play_button(String)"
});
formatter.result({
  "duration": 4451804200,
  "status": "passed"
});
formatter.match({
  "location": "Add_Workout.add_workout()"
});
formatter.result({
  "duration": 1019913900,
  "status": "passed"
});
formatter.match({
  "location": "Add_Workout.enter_Workout_name_and_add_Muscles_strength()"
});
formatter.result({
  "duration": 21363339700,
  "status": "passed"
});
formatter.match({
  "location": "Add_Workout.muscles_strength()"
});
formatter.result({
  "duration": 23074858300,
  "status": "passed"
});
formatter.match({
  "location": "Add_Workout.finish_the_workout()"
});
formatter.result({
  "duration": 38263152200,
  "status": "passed"
});
formatter.after({
  "duration": 54500,
  "status": "passed"
});
formatter.uri("src/test/resources/4Assignworkout_to_ a_patient.feature");
formatter.feature({
  "line": 2,
  "name": "Assign workout to a patient",
  "description": "",
  "id": "assign-workout-to-a-patient",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Assign_to_patient"
    }
  ]
});
formatter.scenario({
  "line": 3,
  "name": "Assign workout to a patient.",
  "description": "",
  "id": "assign-workout-to-a-patient;assign-workout-to-a-patient.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Click on attach \"attach\" icon.",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Click on patientItem list.",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Click on Assign to patients Button.",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Click on Procced \"Procced\" option.",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Select the current date and select the start time.",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Submit the applicaton.",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "attach",
      "offset": 17
    }
  ],
  "location": "Assignworkout_Patient.click_on_icon(String)"
});
