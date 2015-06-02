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

$(document).ready(function () {
  $("#add-address").click(function() {
    $("#new-addresses").append(
      '<div class="new-address">' +
         '<div class="form-group">' +
           '<label for="new-street">Street</label>' +
           '<input type="text" class="form-control new-street">' +
         '</div>' +
         '<div class="form-group">' +
           '<label for="new-city">City</label>' +
           '<input type="text" class="form-control new-city">' +
         '</div>' +
         '<div class="form-group">' +
           '<label for="new-state">State</label>' +
           '<input type="text" class="form-control new-state">' +
         '</div>' +
       '</div>'
    );
  });
});
