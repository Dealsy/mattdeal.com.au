import type React from 'react'
import { AlertCircle, Info, AlertTriangle } from 'lucide-react'
import { cn } from '@/lib/utils'

const alertTypes = {
  info: {
    icon: Info,
    styles: 'border-blue-400 bg-blue-100 dark:border-blue-800 dark:bg-blue-950',
    textColor: 'text-blue-800 dark:text-blue-200',
    iconColor: 'text-blue-500',
    header: 'Info',
  },
  warning: {
    icon: AlertTriangle,
    styles: 'border-yellow-400 bg-yellow-100 dark:border-yellow-800 dark:bg-yellow-950',
    textColor: 'text-yellow-800 dark:text-yellow-200',
    iconColor: 'text-yellow-500',
    header: 'Warning',
  },
  alert: {
    icon: AlertCircle,
    styles: 'border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950',
    textColor: 'text-red-800 dark:text-red-200',
    iconColor: 'text-red-500',
    header: 'Alert',
  },
} as const

type AlertType = keyof typeof alertTypes

export default function AlertMobile({
  children,
  type,
  className,
}: {
  children: React.ReactNode
  type: AlertType
  className?: string
}) {
  const { styles, textColor, iconColor, header, icon: Icon } = alertTypes[type]

  return (
    <div className={cn('rounded-lg border p-4 sm:hidden', styles, className)}>
      <div className="flex flex-col">
        <div className="flex items-center space-x-2">
          <Icon className={cn('h-5 w-5 mt-4', iconColor)} aria-hidden="true" />
          <h3 className={cn('text-sm font-medium', textColor)}>{header}</h3>
        </div>
        <div className={cn('text-sm', textColor)}>{children}</div>
      </div>
    </div>
  )
}
