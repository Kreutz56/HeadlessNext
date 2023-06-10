interface Props {
  header: {
    title: string
    description: string
  }
}

export const Hero = ({ header }: Props) => {
  return (
    <div>
      <p>Welcome to {header.title}</p>
      <p>{header.description}</p>
    </div>
  )
}
