import { Box } from '@mui/material'
import Slider from 'react-slick'
import { Photo } from '../pictures'
import { createImageResource } from '../../utils/common'

const imageResource = createImageResource()

const ImageSlider: React.FC<{ settings: any }> = ({ settings }) => {
  const photos = imageResource.read() as Photo[]

  return (
    <Slider {...settings}>
      {photos.map((photo, index) => (
        <Box key={index} sx={{ width: '100%', height: '400px' }}>
          <img 
            src={photo.img} 
            alt={photo.title} 
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover' 
            }} 
          />
        </Box>
      ))}
    </Slider>
  )
}

export default ImageSlider
