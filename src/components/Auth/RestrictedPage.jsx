import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { selectIsLoggedIn } from '../../redux/Auth/selectors';

const RestrictedPage = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigate to="/" replace /> : children;
};
export default RestrictedPage;
