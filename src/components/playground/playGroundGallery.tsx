import PlaygroundCard from './playgroundCard'

export default function PlayGroundGallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <PlaygroundCard />
    </div>
  )
}
