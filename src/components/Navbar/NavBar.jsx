import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import {useStyles} from '../Styles/HeaderStyles'
import {Theme} from '../Theme'
import {Hidden} from '@material-ui/core'
import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined'

export default function NavBar() {
  const classes = useStyles()
  const navItems = [
    {
      lable: 'About',
      Id: 'About',
    },
    {
      lable: 'Portfolio',
      Id: 'Portfolio',
    },
    {
      lable: 'Contact',
      Id: 'Contact',
    },
  ]
  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position="fixed" sx={{backgroundColor: Theme.colors.base1}}>
        <Toolbar>
          <Typography variant="h5" component="h2" sx={{flexGrow: 1}}>
            {/* <Holder>News</Holder> */}
            Ali
          </Typography>
          <Box component={Hidden} xsDown>
            {navItems.map((item) => (
              <Button color="inherit">{item.lable}</Button>
            ))}
          </Box>
          <Box component={Hidden} smUp>
            <MenuOpenOutlinedIcon />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
