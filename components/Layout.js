import Head from 'next/head';
import NextLink from 'next/link';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Link,
  ThemeProvider,
  CssBaseline,
  createTheme,
  Switch,
  Badge,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  Divider,
  ListItemText,
   InputBase,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import MenuIcon from '@material-ui/icons/Menu';
import CancelIcon from '@material-ui/icons/Cancel';
import { Store } from '../utils/Store';
import Cookies from 'js-cookie';
import {useContext, useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useRouter } from 'next/router'

import useStyles from  '../utils/styles';


export default function Layout({ title, description, children }) {
  const { state, dispatch } = useContext(Store);
  const { darkMode, cart } = state;
  const classes = useStyles();
  const [sidbarVisible, setSidebarVisible] = useState(false);
  const sidebarOpenHandler = () => {
    setSidebarVisible(true);
  };
  const sidebarCloseHandler = () => {
    setSidebarVisible(false);
  };

  const [categories, setCategories] = useState([]);
  const router = useRouter();
  const fetchCategories = async () => {
    try {
      const { data } = await axios.get(`/api/products/categories`);
      setCategories(data);
    } catch (err) {
      console.log(err.message)
    }
  };
  const [query, setQuery] = useState('');
  const queryChangeHandler = (e) => {
    setQuery(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    router.push(`/search?query=${query}`);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const theme = createTheme({
    typography: {
      h1: {
        fontSize: '1.6rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
      h2: {
        fontSize: '1.4rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
    },
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: '#f0c000',
      },
      secondary: {
        main: '#208080',
      },
    },
  });

  const darkModeChangeHandler = () => {


    dispatch({ type: darkMode ? 'DARK_MODE_OFF' : 'DARK_MODE_ON' });

    const newDarkMode = !darkMode;

    Cookies.set('darkMode', newDarkMode ? 'ON' : 'OFF');
  };

  return (
    <div>
    <Head>
      <title>{title ? `${title} - Nex Bejamas` : 'Next Bejamas'}</title>
      {description && <meta name="description" content={description}></meta>}
    </Head>
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <AppBar position="static" className={classes.navbar}>
    <Toolbar className={classes.toolbar}>
    <Box display="flex" alignItems="center">
      <IconButton
        edge="start"
        aria-label="open drawer"
        onClick={sidebarOpenHandler}
      >
        <MenuIcon className={classes.navbarButton} />
      </IconButton>
      <NextLink href="/" passHref>
        <Link>
          <Typography className={classes.brand}>Next Bejamas</Typography>
        </Link>
      </NextLink>
    </Box>
    <Drawer
      anchor="left"
      open={sidbarVisible}
      onClose={sidebarCloseHandler}
    >
      <List>
        <ListItem>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography>Product Category</Typography>
            <IconButton
              aria-label="close"
              onClick={sidebarCloseHandler}
              className={classes.menuButton}
            >
              <CancelIcon />
            </IconButton>
          </Box>
        </ListItem>
        <Divider light />
        {categories.map((category) => (
          <NextLink
            key={category}
            href={`/search?category=${category}`}
            passHref
          >
            <ListItem
              button
              component="a"
              onClick={sidebarCloseHandler}
            >
              <ListItemText primary={category}></ListItemText>
            </ListItem>
          </NextLink>
        ))}
      </List>
    </Drawer>
    <div className={classes.searchSection}>
    <form onSubmit={submitHandler} className={classes.searchForm}>
      <InputBase
        name="query"
        className={classes.searchInput}
        placeholder="Search products"
        onChange={queryChangeHandler}
      />
      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </form>
  </div>
        <div>
        <Switch
            checked={darkMode}
            onChange={darkModeChangeHandler}
              ></Switch>
          <NextLink href="/cart" passHref>
          <Link>
          <Typography component="span">
          {cart.cartItems.length > 0 ? (
            <Badge
              color="secondary"
              badgeContent={cart.cartItems.length}
            >
              <ShoppingCartIcon />
            </Badge>
          ) : (
            <ShoppingCartIcon />
          )}
        </Typography>
      </Link>
    </NextLink>
    </div>
    </Toolbar>
    </AppBar>
    <Container className={classes.main}>{children}</Container>
    <footer className={classes.footer}>
      <Typography>All rights reserved. Next Bejamas {new Date().getFullYear()}</Typography>
    </footer>
  </ThemeProvider>
</div>
);
}