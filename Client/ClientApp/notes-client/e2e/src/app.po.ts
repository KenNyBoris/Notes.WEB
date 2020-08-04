import {browser, by, element, protractor} from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }


  getOpenCreateModalElement() {
    return element(by.id('add-note-btn'));
  }

  getErrorMessageContainer() {
      let text = element(by.css('.mat-simple-snackbar')).element(element(by.tagName('span'))).getText();
    debugger;
      return text;
  }

  getOpenModalOkBtn() {
    return element(by.id('save-btn'));
  }
}
