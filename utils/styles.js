import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  navbar: {
    backgroundColor: '#203040',
    '& a': {
      color: '#ffffff',
      marginLeft: 10,
      textUnderline: 'none',
    },
  },
  brand: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
  },
  main: {
    minHeight: '80vh',
  },
  footer: {
    textAlign: 'center',
    marginTop: 20,
  },
  grow: {
    flexGrow: 1,
  },
  section: {
    marginTop: 10,
    marginBottom: 10,
  },
  cardMedia: {
    width: 400,
    height: 300
  },
  description: {
    display: 'flex'
  },
  form: {
    maxWidth: 800,
    margin: '0 auto',
  },
  navbarButton: {
    color: '#ffffff',
    textTransform: 'initial',
  },
  imageLayout: {
    width: '100vw'
  },
  layout: {
    width: '75%'
  },
  toolbar: {
    justifyContent: 'space-between',
  },
  menuButton: { padding: 0 },
  mt1: { marginTop: '1rem' },
  // search
  searchSection: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  searchForm: {
    border: '1px solid #ffffff',
    backgroundColor: '#ffffff',
    borderRadius: 5,
  },
  searchInput: {
    paddingLeft: 5,
    color: '#000000',
    '& ::placeholder': {
      color: '#606060',
    },
  },
  iconButton: {
    backgroundColor: '#f8c040',
    padding: 5,
    borderRadius: '0 5px 5px 0',
    '& span': {
      color: '#000000',
    },
  },
  featuredImage: {
    width: '100vw',
    height: '65vh'
  },
  sort: {
    marginRight: 5,
  },
  cardContent: {
    display: 'flex',
    justifyContent: "space-between"
  },
  card:{
    position: 'relative',
  },
  addToCart: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: 'relative'
  },
  addToCartButton: {
    display: 'none',
    '&:hover':{
      display: 'flex',
      position: 'absolute',
      justifyContent: "center",
      alignItems: 'center',
      top: 80,
      zIndex: 1000
  },
},
}));
export default useStyles;
