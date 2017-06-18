import { TripPlanerPage } from './app.po';

describe('trip-planer App', () => {
  let page: TripPlanerPage;

  beforeEach(() => {
    page = new TripPlanerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
