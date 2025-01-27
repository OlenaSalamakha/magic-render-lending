import { Outlet } from 'react-router-dom';

import { Header, Nav } from './components';

export const Layout = () => {
  return (
    <>
      <Header />
      <Nav />
      <Outlet />
    </>
  );
};
