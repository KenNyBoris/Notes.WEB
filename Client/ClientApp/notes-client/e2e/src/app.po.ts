import {browser, by, element, ElementFinder, protractor} from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }


  getOpenCreateModalElement() {
    return element(by.id('add-note-btn'));
  }

  fillFields(testString: string): void {
      element(by.id('title-input')).sendKeys(testString);
    element(by.id('text-input')).sendKeys(testString);
  }

  getCreateNoteBtn() {
    return element(by.id('save-btn'));
  }

  getNoteTextDetails(): ElementFinder {
      return element(by.id('text-input'));
  }
}
