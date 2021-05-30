import { browser, by, element, ElementArrayFinder } from 'protractor';

export class AppPage {

  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<unknown> {
    return element(by.css('app-home p')).getText() as Promise<unknown>;
  }

}
