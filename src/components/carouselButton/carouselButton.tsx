import { cn } from '@/lib/utils'

type CarouselButtonProps = {
  onClick: () => void
  children: React.ReactNode
  disabled?: boolean
}

export default function CarouselButton({
  onClick,
  children,
  disabled = false,
}: CarouselButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'border w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center',
        'hover:scale-110 transition-all duration-300',
        'active:scale-75',
        disabled && 'opacity-50 hover:scale-100 active:scale-100'
      )}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
