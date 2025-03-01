sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "stk/starterkit/model/formatter",
    "sap/m/MessageToast",
  ], (Controller, Formatter, MessageToast) => {
    "use strict";
  
    return Controller.extend("stk.starterkit.controller.EmployeeList", {
        formatter: Formatter,
        onInit() {
          this.oResourceBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
          var oModel = new sap.ui.model.json.JSONModel();
          oModel.loadData("/generate_insult.php", {
              lang: "en",
              type: "json"
          }).then(() => {
              this.getView().setModel(oModel, "insultModel");
          }).catch((oError) => {
              console.error("Error while loading model: ", oError);
          });
        },

        onMotivate: function (oEvent) {
          var oSource = oEvent.getSource();
          MessageToast.show(this.oResourceBundle.getText("motivation.success"));
          var oEmployee = oSource.getBindingContext().getObject();
          var sEmail = oEmployee.FirstName + "." + oEmployee.LastName + "@abctest.com";
          var sSubject = this.oResourceBundle.getText("motivation.emailSubject");
          var sBody = this.oResourceBundle.getText("motivation.emailBody");
          sap.m.URLHelper.triggerEmail(sEmail, sSubject, sBody);
                 
      },
      onFire: function (oEvent) {

        var oSource = oEvent.getSource();
        var that = this;
        var oModel = new sap.ui.model.json.JSONModel();
        oModel.loadData("/generate_insult.php", {
            lang: "en",
            type: "json"
        }).then(function () {
            MessageToast.show(that.oResourceBundle.getText("fire.failure"));
            var oEmployee = oSource.getBindingContext().getObject();
            var sEmail = oEmployee.FirstName + "." + oEmployee.LastName + "@abctest.com";
            var sSubject = that.oResourceBundle.getText("fire.emailSubject");
            var sBody = oModel.getData().insult;
            sap.m.URLHelper.triggerEmail(sEmail, sSubject, sBody);
        });
    }
    });
  });