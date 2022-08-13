import axios, { AxiosError } from 'axios';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { FooterItem } from './FooterItem';
import { NavItem } from './NavItem';

import { requestService, ServerError } from '../../../infrastructure/RequestService';
import { Content, Footer, Header, Navbar, Container, Button } from '../../../ui-library/Components';
import { useAuth } from '../../auth/Hooks';
import { getNavItems, getFooterItems } from '../Utils';

const Layout: React.FC = () => {
  const { loggedIn, setLoggedIn } = useAuth();

  const [disabled, setDisabled] = useState(false);

  const navItems = getNavItems();
  const footerItems = getFooterItems();

  const handleLogout = () => {
    setDisabled(true);
    requestService
      .logout()
      .then(() => {
        setLoggedIn(false);
      })
      .catch((err: AxiosError<ServerError> | Error) => {
        if (axios.isAxiosError(err)) {
          console.error(err);
        } else {
          throw new Error('Unhandled error', err);
        }
      })
      .finally(() => setDisabled(false));
  };

  return (
    <>
      <Header>
        <Navbar>
          {loggedIn && (
            <>
              {navItems.map(({ text, href }) => (
                <NavItem key={text} text={text} href={href} />
              ))}
              <Button type="button" text="Logout" action={handleLogout} disabled={disabled} />
            </>
          )}
        </Navbar>
      </Header>
      <Content>
        <Container>
          <Outlet />
        </Container>
      </Content>
      <Footer>
        {loggedIn && footerItems.map(({ text, href }) => <FooterItem key={href} text={text} href={href} />)}
      </Footer>
    </>
  );
};

export default Layout;
