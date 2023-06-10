export type LandingPageHeaderQueryResponse = {
  title: string
  description: string
}

export type LandingPageQueryResponse = {
  landingPage: {
    data: {
      attributes: {
        header: LandingPageHeaderQueryResponse
      }
    }
  }
}
