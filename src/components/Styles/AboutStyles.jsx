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
  aboutTitle: {
    paddingTop: '1rem',
    fontSize: '3rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.8rem',
      paddingTop: '1.5rem',
    },
  },
  aboutDesc: {
    paddingTop: '1rem',
    paddingBottom: '5rem',
    fontSize: '2rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.5rem',
      paddingTop: '1rem',
      paddingBottom: '2rem',
    },
  },
  aboutDescSub: {
    fontSize: '1rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.8rem',
      // paddingTop: '1rem',
      // paddingBottom: '2rem',
    },
  },
  dividerLine: {
    marginTop: '1.5rem',
    marginBottom: '1.5rem',
    width: '4.5rem',
    backgroundColor: Theme.colors.primary,
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
  sectionProtfolio: {
    backgroundColor: Theme.colors.primary1,
    padding: theme.spacing(10, 0, 8, 0),
    color: 'white',
  },
}))
