import { useAuth } from '../../../features/auth/Hooks';

const ProfileScreen: React.FC = () => {
  const { userData } = useAuth();

  return (
    <>
      <h1>Profile data</h1>
      {userData && (
        <ul>
          <li>Id: {userData.id}</li>
          <li>Email: {userData.email}</li>
          <li>Phone: {userData.phone}</li>
          <li>Name: {userData.name}</li>
        </ul>
      )}
    </>
  );
};

export default ProfileScreen;
