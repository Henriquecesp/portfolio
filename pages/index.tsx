import { Footer } from '@components/footer'
import { CardProps } from '@components/github/Card'
import { Render } from '@components/render'
import { ComponentsHome } from '@components/render/config'
import axios from 'axios'
import { motion } from 'framer-motion'
import Head from 'next/head'
import { useEffect, useState } from 'react'

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

function Home({ pinnedItems = [] }: Props): JSX.Element {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 8000);
    return () => clearTimeout(timer);
  }, [loading, setLoading]);

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