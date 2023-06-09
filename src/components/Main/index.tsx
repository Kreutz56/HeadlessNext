import * as S from './styles'

export interface Props {
  title?: string
  description?: string
  children?: any
}

export const Main = (props: Props) => (
  <S.Wrapper>
    <S.Title>{props.title ?? 'React Avançado'}</S.Title>
    <S.Description>
      {props.description ?? 'This is a local page for a home project'}
    </S.Description>
    {props.children}
  </S.Wrapper>
)
