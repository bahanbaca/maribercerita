import { MariberceritaPage } from './app.po';

describe('maribercerita App', function() {
  let page: MariberceritaPage;

  beforeEach(() => {
    page = new MariberceritaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
