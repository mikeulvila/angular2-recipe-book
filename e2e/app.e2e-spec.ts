import { Angular2RecipeBookPage } from './app.po';

describe('angular2-recipe-book App', function() {
  let page: Angular2RecipeBookPage;

  beforeEach(() => {
    page = new Angular2RecipeBookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('rb works!');
  });
});
