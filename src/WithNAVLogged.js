import React from 'react';
import { Outlet } from 'react-router';
import NavbarLogged from './components/NavbarLogged';

export default () => {
  return (
    <>
      <NavbarLogged />
      <Outlet />
    </>
  );
};