'use strict';

angular
	.module('pasquaJove')
	.controller('MainController', MainController);


MainController.$inject = [];

function MainController() {
	var vm = this;
    
    vm.showContact = false;
    vm.showInscription = false;


    vm.contactUs = contactUs;
    vm.signUp = signUp;

    ////////////////
    function contactUs() {
    	vm.showContact = true;
    	vm.showInscription = false;
    }

    function signUp() {
    	vm.showContact = false;
    	vm.showInscription = true;
    }

}