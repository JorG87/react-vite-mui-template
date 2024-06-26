import React, { useState } from 'react'
import { Typography, Paper, Box, Rating, Stack, Avatar, Button, Divider, Pagination } from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google'

const GOOGLE_PLACE_ID = 'ChIJb_dZ4AdB24gRlWhQ_YlWDiM'

// Helper function to generate random reviews
const generateReviews = (count: number) => {
  const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eva', 'Frank', 'Grace', 'Henry', 'Isla', 'Jack']
  const comments = [
    'Great service. Honest people',
    'Very professional and efficient',
    'Excellent work, highly recommend',
    'Prompt and courteous service',
    'Fair pricing and quality work'
  ]

  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: names[Math.floor(Math.random() * names.length)],
    rating: Math.floor(Math.random() * 2) + 4, // Random rating between 4 and 5
    comment: comments[Math.floor(Math.random() * comments.length)],
    date: new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toLocaleDateString()
  }))
}

const Reviews: React.FC = () => {
  const allReviews = generateReviews(50)
  const [page, setPage] = useState(1)
  const reviewsPerPage = 5

  const handleChangePage = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
  }

  const averageRating = allReviews.reduce((acc, review) => acc + review.rating, 0) / allReviews.length

  const displayedReviews = allReviews.slice((page - 1) * reviewsPerPage, page * reviewsPerPage)

  const handleWriteReview = () => {
    const reviewUrl = `https://search.google.com/local/writereview?placeid=${GOOGLE_PLACE_ID}`
    window.open(reviewUrl, '_blank')
  };

  return (
    <Paper elevation={3} sx={{ p: 3, my: 2, mx: 'auto' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <GoogleIcon sx={{ mr: 1, color: '#4285F4' }} />
        <Typography variant="h6" component="span">
          Google Rating
        </Typography>
      </Box>
      
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Typography variant="h3" component="span" sx={{ mr: 2, fontWeight: 'bold' }}>
          {averageRating.toFixed(1)}
        </Typography>
        <Box>
          <Rating value={averageRating} readOnly precision={0.1} sx={{ color: '#FBBC05' }} />
          <Typography variant="body2" color="text.secondary">
            {allReviews.length} reviews
          </Typography>
        </Box>
      </Box>

      <Button variant="contained" sx={{ mb: 2, textTransform: 'none' }} onClick={handleWriteReview}>
        Write a review
      </Button>

      <Stack spacing={2} divider={<Divider flexItem />}>
        {displayedReviews.map((review) => (
          <Box key={review.id} sx={{ display: 'flex' }}>
            <Avatar sx={{ bgcolor: getRandomColor(), mr: 2 }}>{review.name[0]}</Avatar>
            <Box>
              <Typography variant="subtitle1">{review.name}</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Rating value={review.rating} readOnly size="small" sx={{ color: '#FBBC05' }} />
                <Typography variant="caption" sx={{ ml: 1 }}>{review.date}</Typography>
              </Box>
              <Typography variant="body2">{review.comment}</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                <GoogleIcon sx={{ fontSize: 14, mr: 0.5, color: '#4285F4' }} />
                <Typography variant="caption" color="text.secondary">Posted on Google</Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Stack>

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <Pagination 
          count={Math.ceil(allReviews.length / reviewsPerPage)} 
          page={page} 
          onChange={handleChangePage}
          color="primary"
        />
      </Box>
    </Paper>
  )
}

// Helper function to generate random colors for avatars
const getRandomColor = () => {
  const colors = ['#F44336', '#E91E63', '#9C27B0', '#673AB7', '#3F51B5', '#2196F3', '#03A9F4', '#00BCD4', '#009688', '#4CAF50', '#8BC34A', '#CDDC39', '#FFC107', '#FF9800', '#FF5722']
  return colors[Math.floor(Math.random() * colors.length)]
}

export default Reviews
