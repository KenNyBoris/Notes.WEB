import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display note with inserted test text after creating', () => {
    page.navigateTo();
    expect(page.getOpenCreateModalElement()
      .click()
      .then(s => page.fillFields('test')
          ));
    page.getCreateNoteBtn().click().then(w => expect(page.getNoteTextDetails().getText()).toEqual('test'));

  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});

