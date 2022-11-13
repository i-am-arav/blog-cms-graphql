import React, { useContext } from 'react';
import tw from 'tailwind-styled-components'
import Link from 'next/link';

const categories = [{name : 'React', slug:'react'}, {name : 'Programming', slug:'programming'}]
const Header = () => {
  return (
    <Wrapper> 
        <NavContainer>
            <HeadingContainer>
                <Link href="">
                    <Heading>
                        Graph CMS
                    </Heading>
                </Link>
            </HeadingContainer>
            <CategoryContainer>
                {categories.map((category) => (<Link key={category.slug} href={`/category/${category.slug}`}>
                    <Category>{category.name}</Category>
                </Link>))}
            </CategoryContainer>

        </NavContainer>
    </Wrapper>
  )
}

const Wrapper = tw.div`container mx-auto px-10 mb-8`

const NavContainer =  tw.div`border-b w-full inline-block border-blue-400 py-8`

const HeadingContainer = tw.div`md:float-left block`

const Heading = tw.div`cursor-pointer font-bold text-4xl text-white`

const CategoryContainer = tw.div`hidden md:float-left md:contents`

const Category = tw.div`md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer`

export default Header