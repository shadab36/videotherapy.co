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
  "duration": 9438262700,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_step.click_on_Sign_up_button()"
});
formatter.result({
  "duration": 740519100,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_step.Clinician_image()"
});
formatter.result({
  "duration": 1785962400,
  "status": "passed"
});
formatter.after({
  "duration": 153800,
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
  "duration": 2843290100,
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
  "duration": 1699683100,
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
  "duration": 1705465500,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_step.select_Terms_Conditions_check_box()"
});
formatter.result({
  "duration": 33881200,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_step.click_on_SignUp_CTA()"
});
formatter.result({
  "duration": 1091160500,
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
  "duration": 50496600,
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
  "duration": 45038600,
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
  "duration": 63730300,
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
  "duration": 80034300,
  "status": "passed"
});
formatter.after({
  "duration": 43600,
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
  "duration": 2739663500,
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
  "duration": 1797056800,
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
  "duration": 1823797200,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_step.select_Terms_Conditions_check_box()"
});
formatter.result({
  "duration": 34984200,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_step.click_on_SignUp_CTA()"
});
formatter.result({
  "duration": 630250400,
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
  "duration": 37796900,
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
  "duration": 46463600,
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
  "duration": 58295900,
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
  "duration": 93416400,
  "status": "passed"
});
formatter.after({
  "duration": 65400,
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
  "duration": 2871064700,
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
  "duration": 1935603600,
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
  "duration": 1797906000,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_step.select_Terms_Conditions_check_box()"
});
formatter.result({
  "duration": 12200900,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_step.click_on_SignUp_CTA()"
});
formatter.result({
  "duration": 586338400,
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
  "duration": 33376800,
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
  "duration": 35140500,
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
  "duration": 28154100,
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
  "duration": 62814400,
  "status": "passed"
});
formatter.after({
  "duration": 71400,
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
  "duration": 2701570400,
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
  "duration": 1937699200,
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
  "duration": 1778682000,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_step.select_Terms_Conditions_check_box()"
});
formatter.result({
  "duration": 53456300,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_step.click_on_SignUp_CTA()"
});
formatter.result({
  "duration": 597788100,
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
  "duration": 43206800,
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
  "duration": 43403600,
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
  "duration": 36485500,
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
  "duration": 61041300,
  "status": "passed"
});
formatter.after({
  "duration": 80500,
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
  "duration": 2758392200,
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
  "duration": 1841915500,
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
  "duration": 1779807400,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_step.select_Terms_Conditions_check_box()"
});
formatter.result({
  "duration": 33111300,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_step.click_on_SignUp_CTA()"
});
formatter.result({
  "duration": 654557900,
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
  "duration": 33479100,
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
  "duration": 34163800,
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
  "duration": 31926800,
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
  "duration": 44107800,
  "status": "passed"
});
formatter.after({
  "duration": 112600,
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
  "duration": 2869720700,
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
  "duration": 2014518100,
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
  "duration": 1975320100,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_step.select_Terms_Conditions_check_box()"
});
formatter.result({
  "duration": 18356700,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_step.click_on_SignUp_CTA()"
});
formatter.result({
  "duration": 710145000,
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
  "duration": 84405100,
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
  "duration": 36130500,
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
  "duration": 31686700,
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
  "duration": 50684000,
  "status": "passed"
});
formatter.after({
  "duration": 87700,
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
  "duration": 1595675000,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_step.click_on_Sign_up_button()"
});
formatter.result({
  "duration": 640025600,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_step.Clinician_image()"
});
formatter.result({
  "duration": 1724321500,
  "status": "passed"
});
formatter.after({
  "duration": 37500,
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
        "seleniumqa",
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
  "name": "Enter Email \"seleniumqa\".",
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
  "duration": 2788104000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "seleniumqa",
      "offset": 13
    }
  ],
  "location": "SignUp_step.enter_new_mail(String)"
});
formatter.result({
  "duration": 2733864200,
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
  "duration": 1932129500,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_step.select_Terms_Conditions_check_box()"
});
formatter.result({
  "duration": 122701500,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_step.click_on_SignUp_CTA()"
});
formatter.result({
  "duration": 630416900,
  "status": "passed"
});
formatter.after({
  "duration": 428400,
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
  "duration": 9943979400,
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
  "duration": 783192200,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_step.fill_last_name_and_select_radio_button()"
});
formatter.result({
  "duration": 2820658000,
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
  "duration": 720163200,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_step.select_Degree_and_Experience_Title()"
});
formatter.result({
  "duration": 3008989000,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_step.experience_title()"
});
formatter.result({
  "duration": 3584970700,
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
  "duration": 702533000,
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
  "duration": 1717334400,
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
  "duration": 611338500,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_step.click_on_Finish_Button()"
});
formatter.result({
  "duration": 1166995200,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_step.profile()"
});
formatter.result({
  "duration": 5543705200,
  "status": "passed"
});
formatter.match({
  "location": "SignUp_step.logout()"
});
formatter.result({
  "duration": 3738456600,
  "status": "passed"
});
formatter.after({
  "duration": 80000,
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
  "duration": 8715280100,
  "status": "passed"
});
formatter.after({
  "duration": 64700,
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
  "duration": 4173179000,
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
  "duration": 1483616400,
  "status": "passed"
});
formatter.match({
  "location": "Add_New_Patient.select_Gender()"
});
formatter.result({
  "duration": 2200314600,
  "status": "passed"
});
formatter.match({
  "location": "Add_New_Patient.enter_Email_address()"
});
formatter.result({
  "duration": 2056075600,
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
  "duration": 2148490200,
  "status": "passed"
});
formatter.match({
  "location": "Add_New_Patient.enter_user_and_Weight()"
});
formatter.result({
  "duration": 1299178100,
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
  "duration": 2235669900,
  "status": "passed"
});
formatter.match({
  "location": "Add_New_Patient.select_main_affected_body_part()"
});
formatter.result({
  "duration": 5902358800,
  "status": "passed"
});
formatter.match({
  "location": "Add_New_Patient.select_additional_involved_body_part()"
});
formatter.result({
  "duration": 2179758900,
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
  "duration": 2254844300,
  "status": "passed"
});
formatter.match({
  "location": "Add_New_Patient.select_Related_symptoms()"
});
formatter.result({
  "duration": 2770818000,
  "status": "passed"
});
formatter.match({
  "location": "Add_New_Patient.select_patient_suffered_from_this_problem_option()"
});
formatter.result({
  "duration": 5086307400,
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
  "duration": 708472900,
  "status": "passed"
});
formatter.after({
  "duration": 54500,
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
  "duration": 4524586700,
  "status": "passed"
});
formatter.match({
  "location": "Add_Workout.add_workout()"
});
formatter.result({
  "duration": 1678818900,
  "status": "passed"
});
formatter.match({
  "location": "Add_Workout.enter_Workout_name_and_add_Muscles_strength()"
});
formatter.result({
  "duration": 22156264000,
  "status": "passed"
});
formatter.match({
  "location": "Add_Workout.muscles_strength()"
});
formatter.result({
  "duration": 4351640100,
  "status": "passed"
});
formatter.match({
  "location": "Add_Workout.finish_the_workout()"
});
formatter.result({
  "duration": 24796339400,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#trainingEditor \u003e div.trainingTabHeader \u003e span:nth-child(5) \u003e div \u003e div \u003e button \u003e div \u003e div \u003e span\"}\n  (Session info: chrome\u003d74.0.3729.108)\n  (Driver info: chromedriver\u003d74.0.3729.6 (255758eccf3d244491b8a1317aa76e1ce10d57e9-refs/branch-heads/3729@{#29}),platform\u003dWindows NT 10.0.17763 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027AMW-G1\u0027, ip: \u0027169.254.33.173\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 74.0.3729.6 (255758eccf3d24..., userDataDir: C:\\WINDOWS\\TEMP\\scoped_dir1...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:60426}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 74.0.3729.108, webStorageEnabled: true}\nSession ID: fd9af2632690de24d657c4a731140e1a\n*** Element info: {Using\u003dcss selector, value\u003d#trainingEditor \u003e div.trainingTabHeader \u003e span:nth-child(5) \u003e div \u003e div \u003e button \u003e div \u003e div \u003e span}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:317)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:411)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:309)\r\n\tat setUpClass.StepDefinition.Add_Workout.finish_the_workout(Add_Workout.java:138)\r\n\tat ✽.Then Finish the workout.(src/test/resources/3Add_Workout.feature:8)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 420642000,
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
