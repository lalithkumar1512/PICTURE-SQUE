const assert = require('assert');
const register = require('../../Picture-sque/src/Pages/Register/register_test');

describe('register', function() {
  describe('#authenticate()', function() {
    it('should return true if the username and password are valid', function() {
      assert.equal(register.authenticate('lalithkumar.g20@iiits.in', 'password',9346184951), true);
    });

    it('should return false if the username is invalid', function() {
      assert.equal(register.authenticate('invalidusername', 'password',9346184951), false);
    });

    it('should return false if the password is invalid', function() {
      assert.equal(register.authenticate('lalithkumar.g20@iiits.in', '',9346184951), false);
    });

  });
});
