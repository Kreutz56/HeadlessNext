import { Main, Props } from '.'

const args: Props = {
  title: 'Atualizado',
  description: 'This is a local page for a home project'
}

const Story = {
  title: 'Main',
  component: Main,
  args
}

export default Story

export const Version1 = (args: Props) => <Main {...args} />

Version1.args = {
  title: 'Basic',
  description: 'This is a local page for a home project'
}

export const Version2 = (args: Props) => <Main {...args} />

Version2.args = {
  title: 'Another Default',
  description: 'This is a local page for a home project'
}
