sap.ui.define([
    "sap/ui/core/mvc/Controller",
   
],
    function (Controller) {
        "use strict";
        
        return Controller.extend("stk.HTML5Module.controller.CreateCustomer", {
            onInit: function () {
               

            },
          
            createCustomer: function(oEvent){
             
                var sId = this.byId("CustomerID").getValue();
                var sName = this.byId("CustomerName").getValue();
                this.getView().getModel().create("/Customers",{
                    CustomerID: sId,
                    CompanyName: sName
                });
            },
   
        });
    });