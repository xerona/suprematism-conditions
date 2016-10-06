import { SuprematismConditionsPage } from './app.po';

describe('suprematism-conditions App', function() {
  let page: SuprematismConditionsPage;

  beforeEach(() => {
    page = new SuprematismConditionsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
