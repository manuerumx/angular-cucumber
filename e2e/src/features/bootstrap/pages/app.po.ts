import {browser, by, element, until, WebElementPromise} from 'protractor';

export class AppPage {
  static navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  static getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }

  static textHasChanged(expectedText: string) {
    const divChanged = by.id('text-changed');
    return browser.wait(
      until.elementTextIs(
        browser.wait(
          until.elementLocated(divChanged)
        ), expectedText)
    ) as WebElementPromise;
  }
}
