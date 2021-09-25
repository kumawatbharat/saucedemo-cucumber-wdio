import Page from "./page";

class LoginPage extends Page{

  get usernameField(){
    return $('[data-test=username]');
  }

  get passwordField(){
    return $('#password')
  }

  get loginBtn(){
    return $('[data-test=login-button]')
  }

  login(username, password){
    this.usernameField.waitForDisplayed();
    this.usernameField.setValue(username);
    this.passwordField.setValue(password);
    this.loginBtn.waitForClickable();
    this.loginBtn.click();
  }
}

export default new LoginPage();