import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';
import { logOut } from 'redux/auth/operations';
import { Btn, Text } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const handleLogOut = () => dispatch(logOut());

  return (
    <div>
      <Text>Welcome, {user.name}</Text>

      <Btn type="button" onClick={handleLogOut}>
        Logout
      </Btn>
    </div>
  );
};
