import {Box, Container, Grid, Hidden, Typography} from '@material-ui/core'
import React from 'react'
import {useStyles} from '../../Styles/AboutStyles'
import {useStyles as BodyStyles} from '../../Styles/HeaderStyles'
import CardMedia from '@mui/material/CardMedia'
import {Theme} from '../../Theme'
import Divider from '@mui/material/Divider'
import CardAbout from '../../CommonFolder/CardAbout'
import LanguageIcon from '@mui/icons-material/Language'
import WebIcon from '@mui/icons-material/Web'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import DomainDisabledIcon from '@mui/icons-material/DomainDisabled'
// import aboutData from '../../../data.json'

function AboutComponent() {
  const classes = useStyles()
  const classes1 = BodyStyles()

  const cardMediaData = [
    {
      id: 1,
      title: 'Web Development',
      parahG: 'Lorem ipsum dolor sit amet Consectetur adipisicing elit.',
      imge: <LanguageIcon />,
    },
    {
      id: 2,
      title: 'Graphic Design',
      parahG: 'Lorem ipsum dolor sit amet Consectetur adipisicing elit.',
      imge: <WebIcon />,
    },
    {
      id: 3,
      title: 'Mobile Apps',
      parahG: 'Lorem ipsum dolor sit amet Consectetur adipisicing elit.',
      imge: <DarkModeIcon />,
    },
    {
      id: 4,
      title: 'Marketing',
      parahG: 'Lorem ipsum dolor sit amet Consectetur adipisicing elit.',
      imge: <DomainDisabledIcon />,
    },
  ]

  return (
    <Box className={classes.aboutSction} sx={{display: 'flex'}}>
      <Container>
        <Grid container spacing={1}>
          <Grid item sm={5}>
            <Box component={Hidden} xsDown>
              <CardMedia
                component="img"
                alt="about me"
                width="100%"
                height="auto"
                image="https://feenproject.web.app/static/media/developer.f6dc5517.png"
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={7}>
            <Box className={classes1.decorator}>
              <Typography variant="span" className={classes1.decoratorText}>
                About Me
              </Typography>
            </Box>
            <Box className={classes.nameTitle}>
              <Typography variant="h4">Hello I'm Imran Ali</Typography>
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
            <Box>
              <Typography variant="subtitle1" component="p">
                A self taught developer who loves to codes something that wiil
                impact majority of the people in good waay !
              </Typography>
            </Box>
            <Grid container spacing={5}>
              {cardMediaData.map((item, index) => (
                <CardAbout itemName={item} key={index} />
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default AboutComponent
