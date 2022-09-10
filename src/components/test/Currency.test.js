import { Provider } from 'react-redux';
import TestRenderer from 'react-test-renderer';
import store from '../../redux/configureStore';
import Currency from '../Currency/Currency';

describe('Currency test', () => {
  test('render', () => {
    const currency = {
      currencyCode: 'AGLD',
      currencyName: 'Adventure Gold',
      icon:
        'https://currencyfreaks.com/photos/flags/agld.png',
    };
    const tree = TestRenderer.create(
      <Provider store={store}>
        <Currency currency={currency} />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
