import React from 'react'
import {Box, IconButton, Typography} from '@material-ui/core'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import FavoriteIcon from '@material-ui/icons/Favorite'
import {Link} from 'react-scroll'
import {useStylesFooter} from '../Styles/FooterStyle'

export default function Footer() {
  const classes = useStylesFooter()
  var date = new Date()
  return (
    <Box className={classes.footerContainer} id="Footer">
      <IconButton
        className={classes.iconButton}
        to="Headder"
        activeClass="active"
        // spy={true}
        smooth={true}
        offset={-70}
        duration={1200}
        component={Link}
      >
        <ArrowUpwardIcon />
      </IconButton>
      <Typography
        variant="body1"
        component="h4"
        align="center"
        color="inherit"
        className={classes.FooterSize}
      >
        Designed and developed with{' '}
        <FavoriteIcon style={{color: 'red'}} className={classes.HartSize} /> by
        Imran Ali , All Right Reserved © {date.getFullYear()}
      </Typography>
    </Box>
  )
}
