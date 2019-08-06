import {Before, Given, When} from 'cucumber';
import {Then} from '../../../../customMethods';
import {expect} from 'chai';
import {AppPage} from '../pages/app.po';


Before(() => {
});

Given('I am on the home page', async () => {
  await AppPage.navigateTo();
});

When('I do nothing', () => {
});

Then('I should see the title', async () => {
  expect(await AppPage.getTitleText()).to.equal('Welcome to my-project!');
});

Then('The title has changed by JS Code', async () => {
  await AppPage.textHasChanged('My new changed test');
}, {timeout: 6000});
