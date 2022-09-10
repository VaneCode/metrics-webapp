import { Provider } from 'react-redux';
import TestRenderer from 'react-test-renderer';
import store from '../../redux/configureStore';
import Home from '../../pages/Home/Home';

describe('Home test', () => {
  test('render', () => {
    const tree = TestRenderer.create(
      <Provider store={store}>
        <Home />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
