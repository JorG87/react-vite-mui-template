import React, { useEffect, useState } from 'react'
import { Typography, Paper, Box } from '@mui/material'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

interface Photo {
  img: string;
  title: string;
}

const Pictures: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    const loadImages = async () => {
      const imageModules = import.meta.glob('../../assets/pictures/*.(png|jpeg|svg|gif)')
      const loadedPhotos: Photo[] = []

      for (const path in imageModules) {
        const mod = await imageModules[path]() as { default: string };
        loadedPhotos.push({
          img: mod.default,
          title: path.split('/').pop() || 'Untitled'
        });
      }

      setPhotos(loadedPhotos);
    };

    loadImages();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };

  return (
    <Paper elevation={3} sx={{ p: 3, my: 2 }}>
      <Typography variant="h4" gutterBottom>Photos</Typography>
      <Box sx={{ maxWidth: '100%', margin: 'auto' }}>
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
      </Box>
    </Paper>
  )
}

export default Pictures
