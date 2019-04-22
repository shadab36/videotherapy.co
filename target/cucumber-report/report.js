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
  "duration": 8777587100,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_step.click_on_Sign_up_button()"
});
formatter.result({
  "duration": 727476200,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_step.Clinician_image()"
});
formatter.result({
  "duration": 1690418900,
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
  "duration": 2773118300,
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
  "duration": 1671343700,
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
  "duration": 1667737700,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_step.select_Terms_Conditions_check_box()"
});
formatter.result({
  "duration": 23599600,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_step.click_on_SignUp_CTA()"
});
formatter.result({
  "duration": 783628500,
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
  "duration": 38917200,
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
  "duration": 30403900,
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
  "duration": 24300200,
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
  "duration": 50864700,
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
  "duration": 2703584100,
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
  "duration": 1637987800,
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
  "duration": 1637776900,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_step.select_Terms_Conditions_check_box()"
});
formatter.result({
  "duration": 13285500,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_step.click_on_SignUp_CTA()"
});
formatter.result({
  "duration": 567527700,
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
  "duration": 22401500,
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
  "duration": 37233500,
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
  "duration": 34572400,
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
  "duration": 96637800,
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
  "duration": 2771300800,
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
  "duration": 1701529400,
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
  "duration": 1636968800,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_step.select_Terms_Conditions_check_box()"
});
formatter.result({
  "duration": 16284600,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_step.click_on_SignUp_CTA()"
});
formatter.result({
  "duration": 574703400,
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
  "duration": 21832000,
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
  "duration": 25466900,
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
  "duration": 27388000,
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
  "duration": 53179700,
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
  "duration": 2651990300,
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
  "duration": 1735185900,
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
  "duration": 1635155700,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_step.select_Terms_Conditions_check_box()"
});
formatter.result({
  "duration": 7811300,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_step.click_on_SignUp_CTA()"
});
formatter.result({
  "duration": 559046800,
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
  "duration": 22025400,
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
  "duration": 20066100,
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
  "duration": 18905000,
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
  "duration": 34168900,
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
  "duration": 2686562300,
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
  "duration": 1716163900,
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
  "duration": 1644054800,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_step.select_Terms_Conditions_check_box()"
});
formatter.result({
  "duration": 10746900,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_step.click_on_SignUp_CTA()"
});
formatter.result({
  "duration": 568039400,
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
  "duration": 25718300,
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
  "duration": 42390900,
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
  "duration": 28328500,
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
  "duration": 33422500,
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
  "duration": 2641133800,
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
  "duration": 1755742600,
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
  "duration": 1682531500,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_step.select_Terms_Conditions_check_box()"
});
formatter.result({
  "duration": 11200200,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_step.click_on_SignUp_CTA()"
});
formatter.result({
  "duration": 577319200,
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
  "duration": 19857100,
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
  "duration": 17650700,
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
  "duration": 22665100,
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
  "duration": 32725800,
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
  "duration": 2156953700,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_step.click_on_Sign_up_button()"
});
formatter.result({
  "duration": 616982900,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_step.Clinician_image()"
});
formatter.result({
  "duration": 1629186900,
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
        "test",
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
  "name": "Enter Email \"test\".",
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
  "duration": 2721461600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 13
    }
  ],
  "location": "SignUp_step.enter_new_mail(String)"
});
formatter.result({
  "duration": 2408051900,
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
  "duration": 1715741900,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_step.select_Terms_Conditions_check_box()"
});
formatter.result({
  "duration": 22268400,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_step.click_on_SignUp_CTA()"
});
formatter.result({
  "duration": 614295000,
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
  "duration": 9633075200,
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
  "duration": 675628900,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_step.fill_last_name_and_select_radio_button()"
});
formatter.result({
  "duration": 2375145800,
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
  "duration": 625033900,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_step.select_Degree_and_Experience_Title()"
});
formatter.result({
  "duration": 2747382100,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_step.experience_title()"
});
formatter.result({
  "duration": 3418650400,
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
  "duration": 610120900,
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
  "duration": 1581221400,
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
  "duration": 587987300,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_step.click_on_Finish_Button()"
});
formatter.result({
  "duration": 1113156100,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_step.profile()"
});
formatter.result({
  "duration": 1075397600,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_step.logout()"
});
formatter.result({
  "duration": 24988409000,
  "error_message": "org.openqa.selenium.ElementNotVisibleException: element not interactable\n  (Session info: chrome\u003d73.0.3683.103)\n  (Driver info: chromedriver\u003d73.0.3683.68 (47787ec04b6e38e22703e856e101e840b65afe72),platform\u003dWindows NT 10.0.17763 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027AMW-G1\u0027, ip: \u002710.0.75.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 73.0.3683.68 (47787ec04b6e3..., userDataDir: C:\\Users\\ALMOIN~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:64175}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 73.0.3683.103, webStorageEnabled: true}\nSession ID: 9fdca5e4a7f450ee567a689af9da6c4b\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:276)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat setUpClass.StepDefinition.SignUp_step.setclickmethod(SignUp_step.java:349)\r\n\tat setUpClass.StepDefinition.SignUp_step.logout(SignUp_step.java:304)\r\n\tat ✽.Then Click on Logout button.(src/test/resources/1Signup.feature:54)\r\n",
  "status": "failed"
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
  "duration": 20308317300,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"(//a[text()\u003d\u0027Log In\u0027])[2]\"}\n  (Session info: chrome\u003d73.0.3683.103)\n  (Driver info: chromedriver\u003d73.0.3683.68 (47787ec04b6e38e22703e856e101e840b65afe72),platform\u003dWindows NT 10.0.17763 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027AMW-G1\u0027, ip: \u002710.0.75.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 73.0.3683.68 (47787ec04b6e3..., userDataDir: C:\\Users\\ALMOIN~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:64175}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 73.0.3683.103, webStorageEnabled: true}\nSession ID: 9fdca5e4a7f450ee567a689af9da6c4b\n*** Element info: {Using\u003dxpath, value\u003d(//a[text()\u003d\u0027Log In\u0027])[2]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:317)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:419)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\r\n\tat setUpClass.StepDefinition.SignUp_step.login(SignUp_step.java:323)\r\n\tat ✽.Then Login the application.(src/test/resources/1Signup.feature:57)\r\n",
  "status": "failed"
});
formatter.uri("src/test/resources/2Add_New_Patient.feature");
formatter.feature({
  "line": 2,
  "name": "Sign up test on the videotherapy.co application",
  "description": "",
  "id": "sign-up-test-on-the-videotherapy.co-application",
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
  "id": "sign-up-test-on-the-videotherapy.co-application;",
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
  "name": "Click on \"Next\" button.",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter user \"Height\" and Weight.",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Select main affected body part.",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Click on \"Next\" button.",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Select additional involved body part.",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Click on \"Next\" button.",
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
  "name": "Click on \"create care plan\".",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("src/test/resources/3Add_Workout.feature");
formatter.feature({
  "line": 2,
  "name": "Sign up test on the videotherapy.co application",
  "description": "",
  "id": "sign-up-test-on-the-videotherapy.co-application",
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
  "id": "sign-up-test-on-the-videotherapy.co-application;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "Click on play \"LIBRARY\" button.",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "Click on \"Add Workout\" button.",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Enter Workout name and add Muscles strength.",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Finish the workout.",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("src/test/resources/4Assignworkout_to_ a_patient.feature");
formatter.feature({
  "line": 1,
  "name": "Assign workout to a patient",
  "description": "",
  "id": "assign-workout-to-a-patient",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Assign workout to a patient.",
  "description": "",
  "id": "assign-workout-to-a-patient;assign-workout-to-a-patient.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "Click on \"attach\" icon.",
  "keyword": "When "
});
formatter.step({
  "line": 4,
  "name": "Click on patientItem list.",
  "keyword": "Then "
});
formatter.step({
  "line": 5,
  "name": "Click on  Assign to patients Button.",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Click on \"Procced\" option.",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Slect the current date and slect the start time.",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Submit the applicaton.",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});