import {Box, Container, Grid, Hidden, Typography} from '@material-ui/core'
import React from 'react'
import {useStyles} from '../../Styles/AboutStyles'
import {useStyles as BodyStyles} from '../../Styles/HeaderStyles'
import {Theme} from '../../Theme'
import Divider from '@mui/material/Divider'
import Images from '../../../assets/Images/contact.png'

function ContactComponent() {
  const classes = useStyles()
  const classes1 = BodyStyles()
  return (
    <Box className={classes.aboutSction} sx={{display: 'flex'}}>
      <Container>
        <Grid container spacing={1}>
          <Grid item sm={7}>
            <Box component={Hidden} xsDown>
              <img src={Images} style={{width: '100%', height: 'auto'}} />
            </Box>
          </Grid>
          <Grid item xs={12} sm={5}>
            <Box className={classes1.decorator}>
              <Typography variant="span" className={classes1.decoratorText}>
                Contact Me
              </Typography>
            </Box>
            <Box className={classes.nameTitle}>
              <Typography variant="h4">Seems To be Interesting</Typography>
            </Box>
            <Divider
              sx={{
                marginTop: '1.5rem',
                marginBottom: '1.5rem',
                borderBottomWidth: 6,
                width: '4.5rem',
                backgroundColor: Theme.colors.primary,
              }}
            />
            <Box sx={{paddingBottom: '5rem'}}>
              <Typography variant="h5" component="h6">
                Got my Portfolio seen , than feel free to contact me for your
                future projects
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default ContactComponent
