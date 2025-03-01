sap.ui.define([
	"sap/ui/test/Opa5"
], function (Opa5) {
	"use strict";
	var sViewName = "CustomersList";
	
	Opa5.createPageObjects({
		onTheViewPage: {

			actions: {},

			assertions: {

				iShouldSeeThePageView: function () {
					return this.waitFor({
						id: "CustomersList1",
						timeout: 30000,
						viewName: sViewName,
						success: function () {
							Opa5.assert.ok(true, "The " + sViewName + " view is displayed");
						},
						errorMessage: "Did not find the " + sViewName + " view"
					});
				},
				iShouldSeeTheCarousel: function () {
                    return this.waitFor({
                        id: "button1",
                        viewName: sViewName,
                        success: function () {
                            Opa5.assert.ok(true, "The carousel is displayed");
                        },
                        errorMessage: "Did not find the carousel"
                    });
                }
			}
		}
	});

});
