sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("stk.starterkit.controller.CustomersList", {
        onInit() {
        },
        onCustomerPress: function(oEvent) {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("CustomerDetails", {
                   CustomerID: oEvent.getSource().getBindingContext().getObject().CustomerID
               }
               )
        },
        onPerformance: function(oEvent){
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("EmployeeList", {
            });
        }
        
    });
});