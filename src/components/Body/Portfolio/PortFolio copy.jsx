import React from 'react'
import {Typography} from '@material-ui/core'
import {Box, Container, Grid} from '@mui/material'

import {useStyles} from '../../Styles/HeaderStyles'
import {useStyles as BodyStyles} from '../../Styles/HeaderStyles'
import {Theme} from '../../Theme'
import Divider from '@mui/material/Divider'
import {cardMediaDataPort} from '../../../dataJasonPortFolio'
import CardPortfolio from '../../CommonFolder/CardPortfolio'

function AboutComponent() {
  const classes = useStyles()
  const classes1 = BodyStyles()
  return (
    <Box
      sx={{
        backgroundColor: '#143438',
        padding: '3rem 0 3rem 0',
        paddingLeft: '1rem',
        color: 'white',
      }}
    >
      <Grid
        container
        style={{
          displa: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
          width: '300px',
          margin: '10px auto',
        }}
      >
        <Grid item xs={12}>
          <Box className={classes.decorator}>
            <Typography variant="span" className={classes.decoratorText}>
              PortFolio
            </Typography>
          </Box>
          <Box className={classes1.nameTitle} sx={{marginLeft: '-100px'}}>
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
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          {cardMediaDataPort.map((item, index) => (
            <Grid item xs={6} sm={6} lg={4}>
              <CardPortfolio itemName={item} key={index} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default AboutComponent
