contactApp.service('contactService', function() {
    this.hi="Hi im service";
    
    this.validateNumber = function(e,data){
        if(!data || data.toString().length!=10) {
            var domId = "#"+e.target.getAttribute('id');
            $(domId).focus();
            console.log("not valid"); 
            return true
        }else{
            console.log("valid");   
            return false
        }
    }
    
    this.validateMail = function(e,data){
        /** Uppercase (A-Z) and lowercase (a-z) English letters. Digits (0-9).Characters ! # $ % & ' * + - / = ? ^ _ ` { | } ~                 Character. ( period, dot or fullstop) provided that it is not the first or last character and it will not come one                 after the other. 
        */
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data))
        {
            console.log("valid");
            return false
        }else{
            var domId = "#"+e.target.getAttribute('id');
            $(domId).focus();
            console.log("not valid");  
            return true
        }
    }
    
});