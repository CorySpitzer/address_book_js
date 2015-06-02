describe('Contact', function() {
  it('creates and accesses a new contact', function() {
    var rita = new Contact('Rita', 'Moreno');
    expect(rita.firstName).to.equal('Rita');
    expect(rita.lastName).to.equal('Moreno');
    expect(rita.addresses).to.eql([]);
  });

  it("adds the fullName method to all contacts", function() {
    var sherlock = new Contact("Sherlock", "Holmes");
    expect(sherlock.fullName()).to.equal("Sherlock Holmes");
  });

  // it("adds an address to a contact". function() {
  //   var sherlock = new Contact("Sherlock", "Holmes");
  // });
});

describe('Address', function() {
  it('creates a new address', function () {
    var newAddress = new Address('123 main st', 'Portland', 'OR')
    expect(newAddress.street).to.equal('123 main st');
    expect(newAddress.city).to.equal('Portland');
    expect(newAddress.state).to.equal('OR');
  });

  it('adds the fullAddress method to all addresses', function () {
    var testAddress = new Address('123 main st', 'Portland', 'OR')
    expect(testAddress.fullAddress()).to.equal("123 main st, Portland, OR")
  });
});
