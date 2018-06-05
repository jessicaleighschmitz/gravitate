import { GravitatePage } from './app.po';

describe('gravitate App', () => {
  let page: GravitatePage;

  beforeEach(() => {
    page = new GravitatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
