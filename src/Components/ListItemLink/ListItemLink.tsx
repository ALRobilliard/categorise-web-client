import { Link } from 'react-router-dom';
import React from 'react';
import { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

interface IProps {
  icon?: Component;
  primary: string;
  to: string;
  color: string;
}

export default function ListItemLink(props: IProps) {
  const { icon, primary, to } = props;
  const style = {
    color: props.color,
  };

  const CustomLink = React.useMemo(
    () =>
      React.forwardRef((linkProps, ref: any) => (
        <Link ref={ref} to={to} {...linkProps} style={style} />
      )),
    [to]
  );

  return (
    <li>
      <ListItem button component={CustomLink}>
        {icon != null ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}
