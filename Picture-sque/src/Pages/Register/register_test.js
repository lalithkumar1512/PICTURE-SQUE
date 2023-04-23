function authenticate(email, password,phnumber) {
    // check if the email and password are valid
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!email) {
        return false;
    } else if (!regex.test(email)) {
        return false;
    }
    else if (!password) {
        return false;
    } 
    else if (password.length < 4) {
        return false;
    } 
    else if (password.length > 10) {
        return false;
    }
    else if (!phnumber) {
      return false;
    }
    else{
        return true;
    }

  }
  
  module.exports = {
    authenticate: authenticate
  };
  