(function(angular) {
    function ListContactController($scope,contactService) {
      var ctrl = this;

      ctrl.contacts = [];
    
        ctrl.contactListCopy = angular.copy(ctrl.contacts);
        
        ctrl.editContact = function(obj){
            ctrl.isEdit=true;
            ctrl.contact = obj;
        };

         ctrl.update = function(id,contactObj) {
            var tempContacts = ctrl.contacts;
            if(id){
                //var index = tempContacts.indexOf(contactObj);  
                var index = tempContacts.findIndex(function(item) {
                  return item.id == id
                });
                tempContacts.splice(index,1,contactObj);
                        
            }else{
                contactObj.id = tempContacts.length +1;
                tempContacts.push(contactObj);
            }
             
             ctrl.contacts = angular.copy(tempContacts);
             ctrl.isEdit = false;
             ctrl.contact = {};
        };

        ctrl.addNewContact = function(){
            ctrl.isEdit = true;
        };
    
        ctrl.delete = function(index){
            ctrl.contacts.splice(index,1);
        }


    }

    contactApp.component('listContact', {
      templateUrl: 'script/component/view/ListContactTemplate.html',
      controller: ['$scope', 'contactService', ListContactController]

    });
})(window.angular);