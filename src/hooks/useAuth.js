// import { useSelector } from 'react-redux';
// import {
//   selectUser,
//   selectIsRefreshing,
//   selectIsLoggedIn,
// } from 'redux/auth/selectors';
// export const useAuth = () => {
//   const isLoggedIn = useSelector(selectIsLoggedIn);
//   const user = useSelector(selectUser);
//   const isRefreshing = useSelector(selectIsRefreshing);
//   console.log(isLoggedIn, isRefreshing, user);
//   return { isLoggedIn, isRefreshing, user };
// };

import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
} from 'redux/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};
