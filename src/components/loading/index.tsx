import React from 'react'
import { Box, CircularProgress, Typography } from '@mui/material'
import { useTranslations } from '../../utils/useTranslations'

interface LoadingProps {
  message?: string
}

const Loading: React.FC<LoadingProps> = ({ message }) => {
  const { t } = useTranslations()

  message = message ? message : t('LOADING')

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100%"
      width="100%"
      minHeight="200px"
    >
      <CircularProgress size={60} thickness={4} />
      <Typography variant="h6" style={{ marginTop: 16 }}>
        {message}
      </Typography>
    </Box>
  )
}

export default Loading
