import {Typography} from '@material-ui/core'
import {Box} from '@mui/material'
import React from 'react'
import {useStyles} from './HeaderStyles'
import {keyframes} from '@emotion/react'
import styled from '@mui/material/styles/styled'
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined'

const textPopUpTop = keyframes`
0% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
    text-shadow: none;
  }
  100% {
    -webkit-transform: translateY(-50px);
            transform: translateY(-50px);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
    text-shadow: 0 1px 0 #cccccc, 0 2px 0 #cccccc, 0 3px 0 #cccccc, 0 4px 0 #cccccc, 0 5px 0 #cccccc, 0 6px 0 #cccccc, 0 7px 0 #cccccc, 0 8px 0 #cccccc, 0 9px 0 #cccccc, 0 50px 30px rgba(0, 0, 0, 0.3);
  }
`

const AnimationText = styled(Box)(() => ({
  '&': {
    animation: `${textPopUpTop} 1.5s ease-in-out infinite alternate-reverse both`,
  },
}))

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
            <ArrowDownwardOutlinedIcon />
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default HeaderComponents
