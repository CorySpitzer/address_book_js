var Contact = function(firstName, lastName, addresses) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.addresses = [];
  // this.fullName = firstName + lastName;
};

Contact.prototype.fullName = function() {
  return this.firstName + ' ' + this.lastName;
};
