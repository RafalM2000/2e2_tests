import { browser, by, element } from 'protractor';

export class AppPage {

  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  navigateToDetails(): Promise<unknown> {
    return browser.get('/details') as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('app-home p')).getText() as Promise<string>;
  }

  getItemList(): any {
    return element.all(by.css('ul li'));
  }
}
