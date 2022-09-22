import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined'
import BackupTableIcon from '@mui/icons-material/BackupTable'
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined'
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined'

import image1 from './assets/Images/a.jpg'
import image2 from './assets/Images/a.jpg'
import image3 from './assets/Images/a.jpg'
import image4 from './assets/Images/a.jpg'

export const cardMediaData = [
  {
    id: 1,
    title: 'Front-end',
    parahG: 'Lorem ipsum dolor sit amet Consectetur adipisicing elit.',
    logo: <LanguageOutlinedIcon />,
    url: image1,
  },
  {
    id: 2,
    title: 'Back-end',
    parahG: 'Lorem ipsum dolor sit amet Consectetur adipisicing elit.',
    logo: <BackupTableIcon />,
    url: 'https://feenproject.web.app/static/media/developer.f6dc5517.png',
  },
  {
    id: 3,
    title: 'Mobile Apps',
    parahG: 'Lorem ipsum dolor sit amet Consectetur adipisicing elit.',
    logo: <PhoneIphoneOutlinedIcon />,
    url: 'image3',
  },
  {
    id: 4,
    title: 'ReactJS',
    parahG: 'Lorem ipsum dolor sit amet Consectetur adipisicing elit.',
    logo: <GridViewOutlinedIcon />,
    url: 'image4',
  },
]
