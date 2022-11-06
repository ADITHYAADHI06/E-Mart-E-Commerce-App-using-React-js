import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.section`
  height: 20vh;
  background-color: ${({ theme }) => theme.colors.bg};
`

const Home = () => {
    return (
        <Wrapper>Home</Wrapper>
    )
}

export default Home