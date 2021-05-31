import { browser, by, element, ElementArrayFinder } from 'protractor';

export class AppPage {

  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  navigateToDetails(): Promise<unknown> {
    return browser.get('details') as Promise<unknown>;
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
}
