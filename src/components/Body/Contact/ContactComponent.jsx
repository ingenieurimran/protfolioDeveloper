import {Container, Grid, Hidden, Typography} from '@material-ui/core'
import React from 'react'
import {useStyles} from '../../Styles/AboutStyles'
import {useStyles as BodyStyles} from '../../Styles/HeaderStyles'
import {Theme} from '../../Theme'
import Divider from '@mui/material/Divider'
import Images from '../../../assets/Images/contact.png'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import {Button} from '@mui/material'

function ContactComponent() {
  const classes = useStyles()
  const classes1 = BodyStyles()
  const [value, setValue] = React.useState('Controlled')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

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
            {/* Form */}
            <Box
              component="form"
              sx={{
                marginTop: '-3rem',
                marginLeft: '-8rem',
                '& .MuiTextField-root': {
                  m: 1,
                  width: '45ch',
                },
                '& label.Mui-focused': {
                  color: 'white',
                },
                '& .MuiInput-underline:after': {
                  borderBottomColor: 'yellow',
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'white',
                  },
                  '&:hover fieldset': {
                    borderColor: 'white',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'yellow',
                  },
                },
              }}
              noValidate
              autoComplete="off"
            >
              <Grid
                spacing={1}
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <TextField
                  inputProps={{
                    style: {
                      fontSize: '20px',
                      fontFamily: 'roboto',
                      color: 'white',
                    },
                  }}
                  id="outlined-multiline-flexible"
                  label="Name"
                  multiline
                  maxRows={4}
                  value={value}
                  onChange={handleChange}
                />
                <TextField
                  inputProps={{
                    style: {
                      fontSize: '20px',
                      fontFamily: 'roboto',
                      color: 'white',
                    },
                  }}
                  id="outlined-textarea"
                  label="Email"
                  // placeholder="Email"
                  multiline
                />
                <TextField
                  inputProps={{
                    style: {
                      fontSize: '20px',
                      fontFamily: 'roboto',
                      color: 'white',
                    },
                  }}
                  id="outlined-multiline-static"
                  label="Messages"
                  multiline
                  rows={4}
                  // defaultValue="Default Value"
                />
              </Grid>
            </Box>
            <Box marginX={'1rem'}>
              <Button variant="contained">SEND</Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default ContactComponent
