(function(angular) {
    function AddContactController($scope,contactService) {
      var ctrl = this;

        ctrl.addUpdateContact = function(contactObj){
           ctrl.onUpdate({id:contactObj.id,contactObj:contactObj});
        };

        ctrl.cancelAddEdit = function(){
            ctrl.isShow = false;
            ctrl.contact = {};
        };
        
        ctrl.validateMobile = function(e){
           if(contactService.validateNumber(e,ctrl.contact.mobile)){
                ctrl.isMobileValid  = true;
           }else{
               ctrl.isMobileValid  = false;
           }
        }
        
        ctrl.validateMail = function(e){
           if(contactService.validateMail(e,ctrl.contact.email)){
                ctrl.isEmailValid  = true;
           }else{
               ctrl.isEmailValid  = false;
           }
        }

    }

    contactApp.component('addContact', {
      templateUrl: 'script/component/view/AddContactTemplate.html',
      controller: ['$scope', 'contactService', AddContactController],
      bindings: {
        contact :'=',
        onUpdate: '&',
        isShow:'='  
      }
    });
})(window.angular);