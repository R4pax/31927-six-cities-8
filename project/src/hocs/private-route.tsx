import {Route, Redirect} from 'react-router-dom';
import {RouteProps} from 'react-router-dom';

type PrivateRouteProps = RouteProps & {
  render: () => JSX.Element;
  isAuthorized: boolean;
}

function PrivateRoute({exact, path, render, isAuthorized}: PrivateRouteProps): JSX.Element {

  return (
    <Route
      exact={exact}
      path={path}
      render={() => (
        isAuthorized
          ? render()
          : <Redirect to='/login' />
      )}
    />
  );
}

export default PrivateRoute;
