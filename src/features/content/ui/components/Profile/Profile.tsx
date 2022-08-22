import { useTranslation } from 'react-i18next';

import { Loader } from '../../../../../ui-library/components';
import { useAuth } from '../../../../auth';

const Profile: React.FC = () => {
  const { userData } = useAuth();

  const { t } = useTranslation();

  return userData ? (
    <>
      <h1>{t('profile.header')}</h1>
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
    </>
  ) : (
    <Loader />
  );
};

export default Profile;
