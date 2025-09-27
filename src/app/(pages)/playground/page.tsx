import PlayGroundGallery from '@/components/playground/playGroundGallery'
import { Suspense } from 'react'

export default function Page() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <PlayGroundGallery />
      </Suspense>
    </>
  )
}
