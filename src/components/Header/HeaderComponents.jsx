import React from 'react'
import {Typography} from '@material-ui/core'
import {Box} from '@mui/material'
import {AnimationArrow, AnimationText} from '../CommonFolder/Animations'
import {useStyles} from '../Styles/HeaderStyles'
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined'
import Typed from 'react-typed'

function HeaderComponents() {
  const classes = useStyles()

  return (
    <Box className={classes.HeaderWraper}>
      <Box className={classes.HeaderReposivie}>
        <Typography variant="h3" component="h2" className={classes.HeaderTitle}>
          Hey I'm a <span></span>
          <Typed
            strings={[' Webdeveloper,', ' UI/UX Designer,']}
            typeSpeed={70}
            backSpeed={50}
            loop
          />
        </Typography>
        <Box sx={{marginTop: '1rem'}}>
          <Typography variant="h4" component="h2">
            <Box className={classes.headerDesc}>
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
            </Box>
          </Typography>
        </Box>
        <Box className={classes.decorator} sx={{marginTop: '3rem'}}>
          <Typography variant="span" className={classes.decoratorText}>
            <Box>See More About Me</Box>
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
