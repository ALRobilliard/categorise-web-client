import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import Assessment from '@material-ui/icons/Assessment';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import PaymentIcon from '@material-ui/icons/Payment';
import LabelIcon from '@material-ui/icons/Label';
import StoreIcon from '@material-ui/icons/Store';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import { ListItemText, List } from '@material-ui/core';
import ListItemLink from '../ListItemLink/ListItemLink';

interface IProps {
  isAuthenticated: boolean;
}

interface NavigationLink {
  id: string;
  name: string;
  route: string;
  icon?: any;
}

const color = '#ffffff';

const authLinks: NavigationLink[] = [
  {
    id: 'dashboard',
    name: 'Dashboard',
    route: '/',
    icon: <Assessment style={{ color }} />,
  },
  {
    id: 'accounts',
    name: 'Accounts',
    route: '/accounts',
    icon: <AccountBalanceWalletIcon style={{ color }} />,
  },
  {
    id: 'categories',
    name: 'Categories',
    route: '/categories',
    icon: <LabelIcon style={{ color }} />,
  },
  {
    id: 'transactions',
    name: 'Transactions',
    route: '/transactions',
    icon: <PaymentIcon style={{ color }} />,
  },
  {
    id: 'transactionparties',
    name: 'Vendors',
    route: '/vendors',
    icon: <StoreIcon style={{ color }} />,
  },
];

const unAuthLinks: NavigationLink[] = [
  {
    id: 'login',
    name: 'Log in',
    route: '/login',
    icon: <AssignmentIndIcon style={{ color }} />,
  },
];

export default function NavigationLinks(props: IProps) {
  const navLinks = props.isAuthenticated ? authLinks : unAuthLinks;

  return (
    <List component='nav'>
      {navLinks.map((navLink) => (
        <ListItemLink
          to={navLink.route}
          icon={navLink.icon}
          primary={navLink.name}
          color={color}
        />
      ))}
    </List>
  );
}
