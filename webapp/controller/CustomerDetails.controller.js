sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "stk/starterkit/model/formatter"
], (Controller, Formatter) => {
    "use strict";

    return Controller.extend("stk.starterkit.controller.CustomerDetails", {
        formatter: Formatter,
        onInit() {
           var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
               oRouter.getRoute("CustomerDetails").attachPatternMatched(this._onPatternMatched, this);
        },
        _onPatternMatched: function (oEvent) {
            this.getView().bindElement({
                path: "/Customers('" + oEvent.getParameter("arguments").CustomerID + "')",
                parameters:{
                    exapnd: "Orders"
                }

            });
            
        },
        onPress: function(oEvent){
            if (!this.pDialog) {
                this.pDialog = this.loadFragment({
                    name: "stk.starterkit.view.ContactInfoDialog"
                });
            } 
            this.pDialog.then(function(oDialog) {
                oDialog.open();
            });
        },
        onCloseDialog: function(oEvent){
            this.byId("contactDialog").close()
        }
    });
});