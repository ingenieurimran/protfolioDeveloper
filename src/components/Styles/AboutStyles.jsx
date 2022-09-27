import {makeStyles} from '@material-ui/core'
import {Theme} from '../Theme'

export const useStyles = makeStyles((theme) => ({
  aboutSction: {
    backgroundColor: Theme.colors.base1,
    color: Theme.colors.base2,
    padding: theme.spacing(10, 0, 8, 0),
    minHeight: '70vh',
    height: 'auto',
  },
  nameTitle: {
    paddingTop: '1rem',
  },
  cardMedia: {
    marginTop: '2rem',
  },
  // bodySection
  bodySction: {
    backgroundColor: Theme.colors.primary1,
    color: Theme.colors.base2,
    padding: theme.spacing(10, 0, 8, 0),
    minHeight: '70vh',
    height: 'auto',
    paddingLeft: '20px',
  },
  imageOverlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    backgroundColor: Theme.colors.primary,
    color: Theme.colors.base2,
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0,
    transition: '0.7s',
  },
  imageContainer: {
    position: 'relative',
    '&:hover $imageOverlay': {
      opacity: 1,
    },
  },
  responsiveImg: {
    width: '100%',
    height: 'auto',
  },
  overlayTitle: {
    fontSize: '2rem',
    marginBottom: '16px',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.2rem',
    },
  },
}))
