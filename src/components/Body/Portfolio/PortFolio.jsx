import React from 'react'
import {Typography} from '@material-ui/core'
import {Box, Container, Grid} from '@mui/material'

import {useStyles} from '../../Styles/HeaderStyles'
import {useStyles as BodyStyles} from '../../Styles/HeaderStyles'
import {Theme} from '../../Theme'
import Divider from '@mui/material/Divider'
import {cardMediaData} from '../../../dataJason'
import CardPortfolio from '../../CommonFolder/CardPortfolio'

function AboutComponent() {
  const classes = useStyles()
  const classes1 = BodyStyles()
  return (
    <Box className={classes.HeaderWraper}>
      <Box sx={{paddingTop: '3rem', paddingLeft: '3rem'}}>
        <Box className={classes.aboutSction} sx={{display: 'flex'}}>
          <Container>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <Box className={classes1.decorator}>
                  <Typography variant="span" className={classes1.decoratorText}>
                    PortFolio
                  </Typography>
                </Box>
                <Box className={classes.nameTitle}>
                  <Typography variant="h4">Let's See My Work</Typography>
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
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Grid container spacing={5} className={classes.cardMedia}>
          {cardMediaData.map((item, index) => (
            <CardPortfolio itemName={item} key={index} />
          ))}
        </Grid>
      </Box>
    </Box>
  )
}

export default AboutComponent
