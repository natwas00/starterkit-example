/*global QUnit*/

sap.ui.define([
    "sap/ui/test/opaQunit",
    "./pages/CustomersList"
], function (opaTest) {
    "use strict";

    QUnit.module("Customers List Journey");

    opaTest("Should see the initial page of the app", function (Given, When, Then) {
        // Arrangements
        Given.iStartMyApp();

        // Assertions
        Then.onTheCustomersList.iShouldSeeTheTable();
        Then.onTheCustomersList.iShouldSeeTheCreateButton();

        // Cleanup
        Then.iTeardownMyApp();
    });
    opaTest("Should navigate to create new customer", function (Given, When, Then) {
        // Arrangements
        Given.iStartMyApp();

        // Assertions
        Given.onTheCustomersList.iPressCreate();

        // Cleanup
        Then.iTeardownMyApp();
    });
});
