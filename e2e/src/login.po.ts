import { browser, by, element } from 'protractor';



export class LoginPage {
  selectors = {
    'title' : 'app-root h1',
    'email' : 'input[name="email"]',
    'password': 'input[name="password"]',
    'selectGroup': 'mat-select[name="group"]',
    'form': 'form'
  };

  navigateTo() {
    return browser.get('/');
  }

  navigateToLogin() {
    return browser.get('/Login');

  }

  setEmail(text) {
    element(by.css(this.selectors['email'])).sendKeys(text);

  }

  setPassword(text) {
    element(by.css(this.selectors['password'])).sendKeys(text);

  }
  setSelectGroupOptionLastValue() {
    element(by.css(this.selectors['selectGroup'])).click()
    .then(() => element.all(by.css('mat-option')).last().click());

  }

  getTitleText() {
    return element(by.css(this.selectors['title'])).getText();
  }

  logIn() {
    element(by.css(this.selectors['form'])).submit();
  }
}
