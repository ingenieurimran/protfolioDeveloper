import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import {Box} from '@mui/material'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'

function CardPortfolio({itemName}) {
  return (
    <Grid item xs={6}>
      <Card sx={{maxWidth: 345}}>
        <Box>
          <img src={itemName.url} style={{width: '100%', height: 'auto'}} />
        </Box>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {itemName.titleBody}
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            {itemName.discriptionBody}
          </Typography> */}
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default CardPortfolio
