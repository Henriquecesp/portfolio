import { Footer } from '@components/footer'
import { CardProps } from '@components/github/Card'
import { Render } from '@components/render'
import { ComponentsHome } from '@components/render/config'
import axios from 'axios'
import { motion } from 'framer-motion'
import { GITHUB_API_URL } from '@lib/constants'
import Head from 'next/head'

interface Props {
  pinnedItems: CardProps[];
}

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 3,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      ease: "easeInOut",
      duration: 3,
    },
  },
}

const query = `{
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

type ApiReturn = {
  data: {
    user: {
      pinnedItems: {
        nodes: CardProps[];
      };
    };
  };
}

function Home({ pinnedItems = [] }: Props): JSX.Element {
  return (
    <>
      <Head>
        <title>HenriqueCesp - FullStack Dev</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.main
        variants={variants}
        initial="hidden"
        animate="show"
        exit="exit"
        key='main'
        className='relative'
      >
        <div className="min-h-screen bg-purple-500 text-gray-100 overflow-x-hidden overflow-y-hidden w-full">
          <Render Components={ComponentsHome} pinnedItems={pinnedItems} />
        </div>
      </motion.main>
    </>
  )
}


export async function getStaticProps() {
  const { data: { data } } = await axios.post<ApiReturn>(GITHUB_API_URL, {
    query
  }, {
    headers: {
      'Authorization': 'Bearer ' + process.env.GITHUB_TOKEN,
      'Content-Type': 'application/json'
    }
  })

  const pinnedItems = data.user.pinnedItems.nodes;

  return {
    props: {
      pinnedItems
    }
  }
}

export default Home