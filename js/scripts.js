var Contact = function(firstName, lastName, addresses) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.addresses = [];
  // this.fullName = firstName + lastName;
};

Contact.prototype.fullName = function() {
  return this.firstName + ' ' + this.lastName;
};

var Address = function(street, city, state) {
  this.street = street;
  this.city = city;
  this.state = state;
};

Address.prototype.fullAddress = function() {
  return this.street + ', ' + this.city + ', ' + this.state;
};
