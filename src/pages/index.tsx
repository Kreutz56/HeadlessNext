import { Main, Hero } from '@/components'
import { client } from '@/graphql/client'
import { queryLandingPage } from '@/graphql/queries'
import { LandingPageQueryResponse } from '@/types/api'
import { InferGetStaticPropsType } from 'next'

export type HeroPageProps = InferGetStaticPropsType<typeof getStaticProps>

export default function Home(props: HeroPageProps) {
  return (
    <>
      <Main>
        <Hero header={props.header} />
      </Main>
    </>
  )
}

export const getStaticProps = async () => {
  const {
    landingPage: {
      data: {
        attributes: { header }
      }
    }
  }: LandingPageQueryResponse = await client.request(queryLandingPage)

  return {
    props: {
      header
    }
  }
}
