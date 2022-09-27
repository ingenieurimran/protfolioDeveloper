import React from 'react'
import {Typography} from '@material-ui/core'
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
} from '@mui/material'

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
    <Box
      sx={{
        backgroundColor: '#143438',
        paddingTop: '3rem',
        paddingLeft: '1rem',
        color: 'white',
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          {cardMediaData.map((item, index) => (
            <Grid item xs={6} sm={6} lg={4}>
              <CardPortfolio itemName={item} key={index} />
              {/* <Card>
                <Box>
                  <img
                    src={itemName.url}
                    alt={itemName.titleBody}
                    style={{width: '100%', height: 'auto'}}
                  />
                </Box>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {itemName.titleBody}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {itemName.discriptionBody}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card> */}
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
    // <Box className={classes.sectionDark} id="Portfolio">
    //   <Grid
    //     container
    //     style={{
    //       displa: 'flex',
    //       justifyContent: 'center',
    //       alignContent: 'center',
    //     }}
    //   >
    //     <Grid item xs={12} sm={8}>
    //       <Box className={classes1.decorator}>
    //         <Typography variant="span" className={classes1.decoratorText}>
    //           PortFolio
    //         </Typography>
    //       </Box>
    //       <Box className={classes.nameTitle}>
    //         <Typography variant="h4">Let's See My Work</Typography>
    //       </Box>
    //       <Divider
    //         sx={{
    //           marginTop: '1.5rem',
    //           marginBottom: '1.5rem',
    //           borderBottomWidth: 6,
    //           width: '4.5rem',
    //           backgroundColor: Theme.colors.primary,
    //         }}
    //       />
    //     </Grid>
    //   </Grid>
    //   {/* imge section  */}

    //   <Container maxWidth="xl">
    //     <Grid container spacing={2}>
    //       {cardMediaData.map((item, i) => (
    //         <Grid item xs={6} sm={6} lg={4} key={i}>
    //           <Box className={classes1.imageContainer}>
    //             <img
    //               src={item.url}
    //               alt={item.title}
    //               className={classes1.responsiveImg}
    //               style={{width: '100%', height: 'auto'}}
    //             />
    //             <Box className={classes1.imageOverlay}>
    //               <Typography className={classes1.overlayTitle}>
    //                 {item.title}
    //               </Typography>
    //             </Box>
    //           </Box>
    //         </Grid>
    //       ))}
    //     </Grid>
    //   </Container>
    // </Box>
  )
}

export default AboutComponent
