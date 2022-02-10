import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Missions from '../components/missions/Missions';

describe('MyProfile tests', () => {
  test('should render', () => {
    const missions = render(
      <Provider store={store}>
        <BrowserRouter>
          <Missions />
        </BrowserRouter>
        ,
      </Provider>,
    );

    expect(missions).toMatchSnapshot();
  });
});
