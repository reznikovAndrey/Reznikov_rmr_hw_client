import { FC, PropsWithChildren } from 'react';

import { FooterItem } from './FooterItem';
import { NavItem } from './NavItem';

import { Content, Footer, Header, Navbar } from '../../../ui-library/Components';

import { getNavItems, getFooterItems } from '../Utils';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const navItems = getNavItems();
  const footerItems = getFooterItems();

  return (
    <>
      <Header>
        <Navbar>
          {navItems.map(({ text, href }) => (
            <NavItem key={text} text={text} href={href} />
          ))}
        </Navbar>
      </Header>
      <Content>{children}</Content>
      <Footer>
        {footerItems.map(({ text, href }) => (
          <FooterItem key={href} text={text} href={href} />
        ))}
      </Footer>
    </>
  );
};

export default Layout;
