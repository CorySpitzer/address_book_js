describe('Contact', function() {
  it('creates and accesses a new contact', function() {
    var rita = new Contact('Rita', 'Moreno');
    expect(rita.firstName).to.equal('Rita');
    expect(rita.lastName).to.equal('Moreno');
    expect(rita.addresses).to.eql([]);
  });
});
