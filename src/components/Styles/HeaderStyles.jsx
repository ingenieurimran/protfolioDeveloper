import {makeStyles} from '@material-ui/core'
import {Theme} from '../Theme'
// import Images from '../../../public/Images/c.png'
import Images from '../assets/Images/a.jpg'

export const useStyles = makeStyles((theme) => ({
  HeaderWraper: {
    width: '100%',
    minHeight: '90vh',
    height: 'auto',
    background: `linear-gradient(to bottom right,#04303140, #00606473),url(${Images})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeate',
    color: Theme.colors.base2,
  },
  //   decorator.
  decorator: {
    display: 'flex',
    fontWeight: 'bolder',
    fontFamily: 'roboto',
    position: 'relative',
    marginTop: '20px',
    '&:before': {
      width: '45px',
      height: '45px',
      backgroundColor: Theme.colors.primary,
      content: '" "',
      borderRadius: '50%',
    },
  },
  decoratorText: {
    lineHeight: '45px',
    position: 'absolute',
    left: '20px',
    color: Theme.colors.base2,
  },
  arrow: {
    lineHeight: '45px',
    position: 'absolute',
    left: '100px',
  },
}))
