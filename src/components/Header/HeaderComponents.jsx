import {Typography} from '@material-ui/core'
import {Box} from '@mui/material'
import React from 'react'
import {AnimationArrow, AnimationText} from '../CommonFolder/Animations'
import {useStyles} from '../Styles/HeaderStyles'
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined'

function HeaderComponents() {
  const classes = useStyles()

  return (
    <Box className={classes.HeaderWraper}>
      <Box sx={{paddingTop: '15rem', paddingLeft: '3rem'}}>
        <Typography variant="h3" component="h2">
          <Box sx={{display: 'flex'}}>
            I'm a{' '}
            <Box sx={{marginLeft: '1rem'}}>
              <AnimationText>Webdeveloper</AnimationText>
            </Box>
          </Box>
        </Typography>
        <Box sx={{marginY: '1rem'}}>
          <Typography variant="h5" component="h2">
            I Create Website And Application, <br /> Based On Your Needs...
          </Typography>
        </Box>
        <Box className={classes.decorator} sx={{marginY: '3rem'}}>
          <Typography variant="span" className={classes.decoratorText}>
            About Me
          </Typography>
          <Typography variant="span" className={classes.arrow}>
            <AnimationArrow>
              <ArrowDownwardOutlinedIcon />
            </AnimationArrow>
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default HeaderComponents
