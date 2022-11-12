import Head from 'next/head'
import tw from 'tailwind-styled-components'
import { PostCard, PostWidget, Categories } from '../components'
import Image from 'next/image'

const posts = [
  {
    title : 'React-testing',
    excerpt : 'Learn React Testing',
  },
  {
    title : 'react with tailwind',
    excerpt : 'Learn React with Tailwind',
  }
]

export default function Home() {
  return (
    <Wrapper >
     <Head>
        <title>CMS Blog</title>
     </Head>
    <PageWrapper>
      <PostContainer>
        {posts.map(({title,excerpt}, idx) => (<PostCard id={idx} post={{title,excerpt}}/>))}
      </PostContainer> 
      <MiscWrapper>
        <MiscPositionWrapper>
          <PostWidget />
          <Categories />
        </MiscPositionWrapper>
      </MiscWrapper>
    </PageWrapper>
    </Wrapper>
  )
}

const Wrapper = tw.div`container mx-auto px-10 mb-8`

const PageWrapper = tw.div`grid grid-cols-1 lg:grid-cols-12 gap-12`

const PostContainer = tw.div`lg:col-span-8 col-span-1`

const MiscWrapper = tw.div`lg:col-span-4 col-span-1`

const MiscPositionWrapper = tw.div`lg:sticky relative`
