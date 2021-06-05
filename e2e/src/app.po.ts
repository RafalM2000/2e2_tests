import { browser, by, element, ElementArrayFinder, ElementFinder } from 'protractor';

export class AppPage {

  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  navigateToDetails(): Promise<unknown> {
    return browser.get('details') as Promise<unknown>;
  }

  navigateToContact(): Promise<unknown> {
    return browser.get('contact') as Promise<unknown>;
  }

  getTitleText(): Promise<unknown> {
    return element(by.css('app-home p')).getText() as Promise<unknown>;
  }

  getItemsList(): ElementArrayFinder {
    return element.all(by.css('ul li')) as ElementArrayFinder;
  }

  getItemListText(): Promise<unknown> {
    return element.all(by.css('ul li')).getText() as Promise<unknown>;
  }

  getRepoText(): Promise<unknown> {
    return element(by.css('app-contact a')).getText() as Promise<unknown>;
  }

  getButton(): ElementFinder {
    return element(by.css('#button-link')) as ElementFinder;
  }

  getLink(): ElementFinder {
    return element(by.css('app-contact a')) as ElementFinder;
  }

}
