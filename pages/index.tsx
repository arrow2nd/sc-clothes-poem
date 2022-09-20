import InferNextProps from 'infer-next-props-type'
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next'

import Home from 'components/home'

import { generateOgpImageUrl } from 'scripts/generate-ogp'

import { ServerSideProps } from 'types/server-side-props'

export const getServerSideProps = ({
  query
}: GetServerSidePropsContext): GetServerSidePropsResult<ServerSideProps> => {
  const [ogpImageUrl, poemText] = generateOgpImageUrl(query)

  return {
    props: {
      ogpImageUrl,
      poemText
    }
  }
}

// NOTE: InferNextProps<typeof getServerSideProps> が正しく推論されない
// LINK: https://github.com/vercel/next.js/issues/15913#issuecomment-950330472
const ShinyPoems = (props: InferNextProps<any>) => {
  return <Home {...props} />
}

export default ShinyPoems
