'use client'

import { useState, useEffect, useRef } from 'react'
import CodeEditor from './CodeEditor'
import CodePreview from './CodePreview'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'
import { Button } from './ui/button'
import { ClipboardIcon, CheckIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

type LiveCodeProps = {
  code: string
  language?: string
}

function formatCode(code: string): string {
  // Remove any leading/trailing whitespace
  let formatted = code.trim()

  // Split into lines
  const lines = formatted.split('\n')

  // Find the common indentation level
  const commonIndent = lines
    .filter(line => line.trim().length > 0)
    .reduce((min, line) => {
      const indent = line.match(/^\s*/)?.[0].length ?? 0
      return Math.min(min, indent)
    }, Infinity)

  // Remove common indentation and normalize
  formatted = lines
    .map(line => line.slice(commonIndent))
    .join('\n')
    .trim()

  return formatted
}

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }
    const listener = () => setMatches(media.matches)
    window.addEventListener('resize', listener)
    return () => window.removeEventListener('resize', listener)
  }, [matches, query])

  if (!mounted) return false
  return matches
}

export default function LiveCode({ code }: LiveCodeProps) {
  const formattedCode = formatCode(code)
  const [editorCode, setEditorCode] = useState(formattedCode)
  const [copied, setCopied] = useState(false)
  const isMobile = useMediaQuery('(max-width: 1024px)')
  const previewRef = useRef<HTMLDivElement>(null)
  const [previewHeight, setPreviewHeight] = useState<number>(0)

  useEffect(() => {
    const updatePreviewHeight = () => {
      if (previewRef.current) {
        const previewContent = previewRef.current.querySelector('.preview-content')
        if (previewContent) {
          const height = previewContent.getBoundingClientRect().height
          setPreviewHeight(Math.max(300, height + 32)) // 32px for padding
        }
      }
    }

    // Initial height calculation
    updatePreviewHeight()

    // Create a ResizeObserver to watch for content changes
    const resizeObserver = new ResizeObserver(updatePreviewHeight)
    if (previewRef.current) {
      resizeObserver.observe(previewRef.current)
    }

    return () => {
      resizeObserver.disconnect()
    }
  }, [editorCode])

  const handleCopy = async () => {
    await navigator.clipboard.writeText(editorCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div suppressHydrationWarning className="w-full">
      <ResizablePanelGroup
        direction={isMobile ? 'vertical' : 'horizontal'}
        className={cn(
          'w-full rounded-lg border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900',
          isMobile ? 'min-h-[600px]' : ''
        )}
      >
        <ResizablePanel defaultSize={60} minSize={30}>
          <div className="relative h-full">
            <Button
              size="sm"
              variant="ghost"
              className="absolute right-6 top-6 z-10"
              onClick={handleCopy}
            >
              {copied ? (
                <CheckIcon className="h-4 w-4 text-green-500" />
              ) : (
                <ClipboardIcon className="h-4 w-4" />
              )}
            </Button>
            <div className="h-full p-4">
              <CodeEditor
                initialValue={editorCode}
                onChange={setEditorCode}
                language={'html'}
                height={isMobile ? '300px' : `${previewHeight}px`}
              />
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={40} minSize={30}>
          <div ref={previewRef} className="h-full p-4">
            <CodePreview code={editorCode} />
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}
