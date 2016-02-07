'use strict';

angular
	.module('pasquaJove')
	.controller('MainController', MainController);


MainController.$inject = ['$translate'];

function MainController($translate) {
	var vm = this;
	
	vm.showContact = false;
	vm.showInscription = false;
	vm.additionalInfo = false;

	vm.newInscription = {};
	vm.contactForm = {};


	vm.contactUs = contactUs;
	vm.signUp = signUp;
	vm.clickInfo = clickInfo;
	vm.submitNewUserForm = submitNewUserForm;
	vm.submitContactForm = submitContactForm;
	vm.changeLanguage = changeLanguage;

	////////////////
	function contactUs() {
		vm.showContact = !vm.showContact;
		vm.showInscription = false;
	}

	function signUp() {
		vm.showContact = false;
		vm.showInscription = !vm.showInscription;
	}

	function clickInfo() {
		vm.additionalInfo = !vm.additionalInfo;
	}

	function submitNewUserForm() {
		console.log('user', vm.newInscription);
	}

	function submitContactForm() {
		console.log('contact', vm.contactForm);
	}

	function changeLanguage(lang) {
		$translate.use(lang);
	}

}