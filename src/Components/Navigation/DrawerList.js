import React from 'react';
import HomeIcon from '@material-ui/icons/HomeRounded';
import AccountIcon from '@material-ui/icons/AccountCircleRounded';
import ManageIcon from '@material-ui/icons/AccountTreeRounded';
import NotificationsIcon from '@material-ui/icons/NotificationsRounded';
import MessagesIcon from '@material-ui/icons/MailOutlineRounded';
import FollowingIcon from '@material-ui/icons/StarsRounded';
import SettingsIcon from '@material-ui/icons/SettingsRounded';
import LogoutIcon from '@material-ui/icons/ExitToAppRounded';
import { Divider, List, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../../Redux/Actions/LogoutActions';
import getStorePersistor from '../../Redux/store';
const { persistor } = getStorePersistor();

const useStyles = makeStyles((theme) => ({
    list: {
      width: 250,
    },
    activeListItem: {
      color: theme.palette.primary.main
    }
  }));

export default function DrawerList({
    onClick = () => {},
    path
}) {
    const classes = useStyles();
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(logoutAction());
        persistor.purge()
            .then(() => {
            return persistor.flush()
            })
            .then(() => {
            persistor.pause()
            });
    };

    const icons = {
        Home: { icon: <HomeIcon />, path: '/' },
        Account:{ icon: <AccountIcon />, path: '/account' },
        Manage: { icon: <ManageIcon />, path: '/account/manage' },
        Notifications: { icon: <NotificationsIcon />, path: '/account/notifications' },
        Messages: { icon: <MessagesIcon />, path: '/account/messages' },
        Following:{ icon: <FollowingIcon />, path: '/account/following' },
        Settings: { icon: <SettingsIcon />, path: '/account/settings' }
    }

    const list = () => (
        <div
          className={classes.list}
          role='presentation'
          onClick={onClick}
        >
          <List>
            {Object.entries(icons).map((icon, index) => (
              <ListItem button key={index} component={NavLink} to={icon[1].path} className={path === icon[1].path ? classes.activeListItem : 'null'}>
                <ListItemIcon className={path === icon[1].path ? classes.activeListItem : 'null'}>{ icon[1].icon }</ListItemIcon>
                <ListItemText primary={ icon[0] } className={path === icon[1].path ? classes.activeListItem : 'null'}/>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            <ListItem button onClick={logout}>
            <ListItemIcon>{ <LogoutIcon /> }</ListItemIcon>
            <ListItemText primary='Logout' />
            </ListItem>
          </List>
        </div>
      );

      return list();
}