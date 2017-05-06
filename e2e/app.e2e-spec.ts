import { TodoReduxLikeAppPage } from './app.po';

describe('todo-redux-like-app App', () => {
  let page: TodoReduxLikeAppPage;

  beforeEach(() => {
    page = new TodoReduxLikeAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
