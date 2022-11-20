import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks';
import { logOut } from 'redux/auth/operations';

export const UserMenu = () => {
  const dispath = useDispatch();
  const { user } = useAuth();
  const handleSubmit = dispath(logOut());
  return (
    <div>
      <p>Welcome, {user.name}</p>
      <button type="button" onClick={handleSubmit}>
        Logout
      </button>
    </div>
  );
};
