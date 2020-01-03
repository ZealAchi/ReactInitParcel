import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import {
  MenuIcon,
  SearchIcon,
  AccountCircle,
  MailIcon,
  NotificationsIcon,
  MoreIcon
} from './../../helpers/ConstRouters'
import { styleNavbar, LinkMenu, LinkMenuMobil } from './../../helpers/VarComponents'

import Login from "./../../Pages/NoAuth/Login";
import Register from "./../../Pages/NoAuth/Register";
import { AuthContext } from '../../Context/AuthContext';
import Notification from './notification';
export default function MenuAppBar() {
  const { isAuthenticated, logout, typeUser, isAdmin:isAdministrator } = useContext(AuthContext)

  

  const classes = styleNavbar();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Mi Perfil</MenuItem>
      <MenuItem onClick={handleMenuClose}>Mi Cuenta</MenuItem>
      <MenuItem onClick={()=>{handleMenuClose();logout();}}>Cerrar Sesión</MenuItem>
    </Menu>
  );
  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  const OptionsLogin = (
    <>
      <LinkMenu to="/blog" onClick={handleMenuClose}>
        <Button color="inherit" >Blog</Button>
      </LinkMenu>
      <LinkMenu to="#" onClick={handleMenuClose}>
        <Login />
      </LinkMenu>
      <LinkMenu to="#" onClick={handleMenuClose}>
        <Register />
      </LinkMenu>
    </>
  )

  const renderMenuUnregister = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <LinkMenuMobil to="#">
        <Login />
      </LinkMenuMobil>
      <LinkMenuMobil to="#">
        <Register />
      </LinkMenuMobil>

    </Menu>
  );
  const OptionsLoginMobil = (
    <>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="open drawer">

          <MenuIcon />
        </IconButton>
      </MenuItem>
    </>
  )


  return (
    <div className={classes.grow}>


      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            <LinkMenu to="/">
              Cosupplies
            </LinkMenu>
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
          {isAuthenticated ? (
            <>
              <div className={classes.sectionDesktop}>
              {isAdministrator && (
                <LinkMenu to="/Admin/users">
                  <Button color="inherit" >Administrar Usuarios</Button>
                </LinkMenu>)
                }
                <LinkMenu to="/Subastas">
                  <Button color="inherit" >Subastas</Button>
                </LinkMenu>
                <LinkMenu to="/blog">
                  <Button color="inherit" >Blog</Button>
                </LinkMenu>
                <LinkMenu to="/DashBoard">
                  <Button color="inherit" >Mi DashBoard</Button>
                </LinkMenu>
                <Notification/>
                <IconButton
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              </div>
              <div className={classes.sectionMobile}>
                <IconButton
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </div>
            </>
          ) : <>
              <div className={classes.sectionDesktop}>
                {OptionsLogin}
              </div>
              <div className={classes.sectionMobile}>
                {OptionsLoginMobil}
              </div>
            </>
          }


        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {isAuthenticated ? renderMenu:renderMenuUnregister}
    </div>
  );
}