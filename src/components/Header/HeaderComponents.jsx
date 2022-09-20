import {Box} from '@mui/material'
import React from 'react'
import {useStyles} from './HeaderStyles'

function HeaderComponents() {
  const classes = useStyles()
  return <Box className={classes.HeaderWraper}>hi</Box>
}

export default HeaderComponents
