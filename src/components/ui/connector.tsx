import Image from 'next/image'

type ConnectorProps = {
  color: string
  direction: 'down' | 'up'
}

export default function Connector({ color, direction }: ConnectorProps) {
  return (
    <div className={direction === 'up' ? 'rotate-180' : ''}>
      <Image
        src="/images/connector.svg"
        alt="Connector"
        width={1000}
        height={200}
        className="w-full"
        style={{ filter: `drop-shadow(0 0 10px ${color})` }}
      />
    </div>
  )
}
