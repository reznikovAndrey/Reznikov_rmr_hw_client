import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { FooterItem } from './FooterItem';
import { NavItem } from './NavItem';

import { authRequestService, ServerError } from '../../../infrastructure/RequestService';
import { routingService } from '../../../infrastructure/RoutingService';
import { Content, Footer, Header, Navbar, Container, Button, Loader } from '../../../ui-library/Components';
import { useAuth } from '../../auth/Hooks';
import { getNavItems, getFooterItems } from '../Utils';

const Layout: React.FC = () => {
  const { loggedIn, setLoggedIn } = useAuth();

  const [disabled, setDisabled] = useState(false);

  const navItems = getNavItems();
  const footerItems = getFooterItems();

  const handleLogout = () => {
    setDisabled(true);
    authRequestService
      .logout()
      .then(() => setLoggedIn(false))
      .catch((err: AxiosError<ServerError> | Error) => {
        if (axios.isAxiosError(err)) {
          console.error(err);
        } else {
          throw new Error('Unhandled error', err);
        }
      })
      .finally(() => setDisabled(false));
  };

  const navigate = useNavigate();
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname === routingService.root()) {
      navigate(loggedIn ? routingService.kitty() : routingService.login(), { replace: true });
    }
  }, [pathname]);

  const { t } = useTranslation();

  return (
    <>
      <Header>
        <Navbar>
          {loggedIn && (
            <>
              {navItems.map(({ text, href }) => (
                <NavItem key={text} text={t(text)} href={href} />
              ))}
              <Button type="button" text={t('nav.logout')} action={handleLogout} disabled={disabled} />
            </>
          )}
        </Navbar>
      </Header>
      <Content>
        <Container>{loggedIn === null || disabled ? <Loader /> : <Outlet />}</Container>
      </Content>
      <Footer>
        {loggedIn && footerItems.map(({ text, href }) => <FooterItem key={href} text={t(text)} href={href} />)}
      </Footer>
    </>
  );
};

export default Layout;
