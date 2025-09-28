type Mode = 'html' | 'jsx'

type CodePreviewProps = {
  code: string
  mode?: Mode
}

export default function CodePreview({ code, mode = 'html' }: CodePreviewProps) {
  const processedCode = mode === 'html' ? code : code.replace(/className=/g, 'class=')

  return (
    <div className="w-full overflow-auto rounded-md border border-gray-700 bg-white dark:border-gray-700 dark:bg-gray-900">
      <div
        dangerouslySetInnerHTML={{ __html: processedCode }}
        className="preview-content not-prose p-4"
      />
    </div>
  )
}
