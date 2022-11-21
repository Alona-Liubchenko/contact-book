import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsRefreshing,
  selectIsLoggedIn,
} from 'redux/auth/selectors';
export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const isRefreshing = useSelector(selectIsRefreshing);
  return { isLoggedIn, isRefreshing, user };
};
