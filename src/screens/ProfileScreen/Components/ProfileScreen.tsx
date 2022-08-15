import { useTranslation } from 'react-i18next';

import { useAuth } from '../../../features/auth/Hooks';

const ProfileScreen: React.FC = () => {
  const { userData } = useAuth();

  const { t } = useTranslation();

  return (
    <>
      <h1>{t('profile.header')}</h1>
      {userData && (
        <ul>
          <li>
            {t('profile.userData.id')}: {userData.id}
          </li>
          <li>
            {t('profile.userData.email')}: {userData.email}
          </li>
          <li>
            {t('profile.userData.phone')}: {userData.phone}
          </li>
          <li>
            {t('profile.userData.name')}: {userData.name}
          </li>
        </ul>
      )}
    </>
  );
};

export default ProfileScreen;
