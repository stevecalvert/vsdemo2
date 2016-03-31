'use strict';

describe('Service: myService2', function () {

  // load the service's module
  beforeEach(module('vsdemo2App'));

  // instantiate service
  var myService2;
  beforeEach(inject(function (_myService2_) {
    myService2 = _myService2_;
  }));

  it('should do something', function () {
    expect(!!myService2).toBe(true);
  });

});
