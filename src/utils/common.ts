import { Photo } from '../components/pictures'

export const createImageResource = () => {
  let status = 'pending'
  let result: Photo[] | Error
  let suspender = loadImages().then(
    (r) => {
      status = 'success'
      result = r
    },
    (e) => {
      status = 'error'
      result = e
    }
  )

  return {
    read() {
      if (status === 'pending') throw suspender
      if (status === 'error') throw result
      if (status === 'success') return result
      throw new Error('This should be impossible')
    }
  }
}

// Function to load images
async function loadImages(): Promise<Photo[]> {
  const imageModules = import.meta.glob('../assets/pictures/*.(png|jpeg|svg|gif)')
  const loadedPhotos: Photo[] = []

  for (const path in imageModules) {
    const mod = await imageModules[path]() as { default: string }
    loadedPhotos.push({
      img: mod.default,
      title: path.split('/').pop() || 'Untitled'
    })
  }

  return loadedPhotos
}
