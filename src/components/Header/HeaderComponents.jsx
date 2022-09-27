import React from 'react'
import {Typography} from '@material-ui/core'
import {Box} from '@mui/material'
import {AnimationArrow, AnimationText} from '../CommonFolder/Animations'
import {useStyles} from '../Styles/HeaderStyles'
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined'

function HeaderComponents() {
  const classes = useStyles()

  return (
    <Box className={classes.HeaderWraper}>
      <Box sx={{paddingTop: '15rem', paddingLeft: '1rem'}}>
        <Typography variant="h3" component="h2">
          <Box sx={{display: 'flex'}}>
            Hey I am a{' '}
            <Box sx={{marginLeft: '1rem'}}>
              <AnimationText>Webdeveloper</AnimationText>
            </Box>
          </Box>
        </Typography>
        <Box sx={{marginY: '1rem'}}>
          <Typography variant="h4" component="h2">
            {/* I Create Website And Application, <br /> Based On Your Needs... */}
            truning ideas into real life{' '}
            <strong>
              <span style={{color: '#66CC66'}}>p</span>
              <span style={{color: '#FF9966'}}>r</span>
              <span style={{color: '#66CC66'}}>o</span>
              <span style={{color: '#FF9966'}}>d</span>
              <span style={{color: '#66CC66'}}>u</span>
              <span style={{color: '#FF9966'}}>c</span>
              <span style={{color: '#66CC66'}}>t</span>
              <span style={{color: '#FF9966'}}>s</span>
            </strong>
            <br /> is my calling.
          </Typography>
        </Box>
        <Box className={classes.decorator} sx={{marginY: '3rem'}}>
          <Typography variant="span" className={classes.decoratorText}>
            See More About Me
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
