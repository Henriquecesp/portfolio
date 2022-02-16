import { CardProps } from '@components/github/Card'
import { Render } from '@components/render'
import { ComponentsHome } from '@components/render/config'
import axios from 'axios'
import { NextSeo, SocialProfileJsonLd } from 'next-seo';
import { motion } from 'framer-motion'
import { CONTACT_EMAIL, GITHUB_API_URL, GITHUB_PROFILE_URL, INSTAGRAM_PROFILE_URL, LINKEDIN_PROFILE_URL, WEBSITE_DOMAIN, WEBSITE_TITLE, YOUTUBE_PROFILE_URL, WEBSITE_NAME } from '@lib/constants'
import Head from 'next/head'
import { useIntl } from 'react-intl';

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
  const intl = useIntl();
  return (
    <>
      <Head>
        <title>{WEBSITE_TITLE}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NextSeo
        title={WEBSITE_TITLE}
        description={intl.formatMessage({ id: "hero.subtitle" }, { br: '|' })}
        canonical={WEBSITE_DOMAIN}
        additionalMetaTags={[{
          property: 'dc:creator',
          content: 'HenriqueCesp'
        }, {
          property: 'creator',
          content: 'HenriqueCesp'
        }]}
        openGraph={{
          url: WEBSITE_DOMAIN,
          title: WEBSITE_TITLE,
          description: intl.formatMessage({ id: "hero.subtitle" }, { br: '|' }),
          images: [
            { url: 'https://henriquecesp.dev/hero.png' }
          ],
          site_name: WEBSITE_NAME,
        }}
      />
      <SocialProfileJsonLd
        type="Person"
        name="henriquecesp"
        url={WEBSITE_DOMAIN}
        sameAs={[
          GITHUB_PROFILE_URL,
          LINKEDIN_PROFILE_URL,
          YOUTUBE_PROFILE_URL,
          INSTAGRAM_PROFILE_URL,
          CONTACT_EMAIL,
        ]}
      />
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