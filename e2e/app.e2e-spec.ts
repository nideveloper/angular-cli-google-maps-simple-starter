import { TerritoryPredictionPage } from './app.po';

describe('territory-prediction App', () => {
  let page: TerritoryPredictionPage;

  beforeEach(() => {
    page = new TerritoryPredictionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
