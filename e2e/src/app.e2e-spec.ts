import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('home works!');
  });

  it('should display 3 elements in details view', () => {
    page.navigateToDetails();
    expect(page.getItemsList().count()).toBe(3);
  });

  it('should display "Konstanty, Anna, Kitty"', () => {
    page.navigateToDetails();
    expect(page.getItemListText()).toEqual(['Konstanty', 'Anna', 'Kitty']);
  });


  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
