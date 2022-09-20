import Images from '../assest/Images/a.jpg'
import {makeStyles} from '@material-ui/core'

export const useStyles = makeStyles((theme) => ({
  HeaderWraper: {
    width: '100%',
    minHeight: '90vh',
    height: 'auto',
    padding: '20px',
    background: `linear-gradient(to bottom right, #04303140, #00606473), url(${Images})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
}))
