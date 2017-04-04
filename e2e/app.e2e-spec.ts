import { ElectronAngular2TestPage } from './app.po';

describe('electron-angular2-quickstart App', () => {
  let page: ElectronAngular2TestPage;

  beforeEach(() => {
    page = new ElectronAngular2TestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
