import { Footer } from '@components/footer'
import { CardProps } from '@components/github/Card'
import { Render } from '@components/render'
import { ComponentsHome } from '@components/render/config'
import axios from 'axios'
import Head from 'next/head'

interface Props {
  pinnedItems: CardProps[];
}

function Home({ pinnedItems = [] }: Props): JSX.Element {
  return (
    <div className="min-h-screen bg-purple-500 text-gray-100 overflow-x-hidden overflow-y-hidden w-full">
      <Head>
        <title>HenriqueCesp - FullStack Dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Render Components={ComponentsHome} pinnedItems={pinnedItems} />
      </main>
    </div>
  )
}


export async function getStaticProps() {
  const res = await axios.post<{
    data: {
      user: {
        pinnedItems: {
          nodes: CardProps[];
        }
      }
    }
  }>('https://api.github.com/graphql', {
    query: `{
      user(login: "henriquecesp") {
        pinnedItems(first: 6, types: REPOSITORY) {
          nodes {
            ... on Repository {
              name
              description
              url
            }
          }
        }
      }
    }`
  }, {
    headers: {
      'Authorization': 'Bearer ' + process.env.GITHUB_TOKEN,
      'Content-Type': 'application/json'
    }
  })

  const pinnedItems = res.data.data.user.pinnedItems.nodes;

  return {
    props: {
      pinnedItems
    }
  }
}

export default Home;