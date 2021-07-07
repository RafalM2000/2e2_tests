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

  it('should on contact page display Repo Rafała', () => {
    page.navigateToContact();
    expect(page.getRepoText()).toEqual('Repo Rafała');
  });

  it('should on page contact, after click not display link to repo', () => {
    page.navigateToContact();
    page.getButton().click();
    expect(page.getLink().isPresent()).toBe(false);
  });

  it('should display Hello: Rafał', () => {
    page.navigateToContact();
    page.getInputControl().sendKeys('Rafał');
    page.getSubmitButton().click();
    expect(page.getMessageWelcome()).toEqual('Hello: Rafał');
  });

  it('url shoud contains /contact', () => {
    page.navigateTo();
    page.getContactMenu().click();
    expect(page.checkURL()).toContain('/contact');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
