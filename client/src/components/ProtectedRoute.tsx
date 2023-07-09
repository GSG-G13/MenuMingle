import { Route, RouteProps, useNavigate } from 'react-router-dom';
import { useState, FC } from 'react';

const ProtectedRoute: FC<RouteProps> = ({ component: Component, ...rest }) => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const history = useNavigate();
  if (loading) {
    return <div>Loading...</div>;
  }
  if (!authenticated) {
    history('/login');
    return null;
  }
  return (
    <Route
      {...rest}
      render={props =>
        authenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default ProtectedRoute;
