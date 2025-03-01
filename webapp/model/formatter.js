sap.ui.define([],function(){
    "use-strict";
    return{
        formatName: function(sFirstName, sLastName){
            let lastNamePart = sLastName.split(/[- ]/)[0]; // We separate by a space or a dash and take only the first part
            return sFirstName[0] + ". " + lastNamePart;
        },
        formatOrdersNum: function(sOrders){
            return sOrders.length;
        }
    }
})