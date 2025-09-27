import { playgroundItems } from '@/contasnts'
import Motion from './motion'

// Define content for each playground area
export const PlayGroundComponents = {
  'montion-animations': {
    title: playgroundItems[0].title,
    description: playgroundItems[0].description,
    component: () => <Motion />,
  },
  tailwind: {
    title: playgroundItems[1].title,
    description: playgroundItems[1].description,
    component: () => (
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Tailwind Playground</h1>
          <p className="text-muted-foreground">Advanced Tailwind CSS examples</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg text-white text-center">
            Gradient Background
          </div>
          <div className="p-4 bg-yellow-200 rounded-lg shadow-2xl transform rotate-3">
            Transform & Shadow
          </div>
          <div className="p-4 bg-indigo-600 rounded-full aspect-square flex items-center justify-center text-white">
            Rounded & Flexbox
          </div>
        </div>
      </div>
    ),
  },
  convex: {
    title: playgroundItems[2].title,
    description: playgroundItems[2].description,
    component: () => (
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Convex Playground</h1>
          <p className="text-muted-foreground">Real-time database concepts</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="p-6 border rounded-lg bg-slate-50">
            <h3 className="text-lg font-semibold mb-3">Real-time Data</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Convex allows you to build reactive applications with real-time data synchronization.
            </p>
            <div className="bg-white p-3 rounded border text-sm font-mono">
              {`// Example Convex query
  const messages = useQuery(api.messages.list)`}
            </div>
          </div>
        </div>
      </div>
    ),
  },
} as const
