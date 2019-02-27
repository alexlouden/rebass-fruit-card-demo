import React from 'react'
import { Flex, Box, Image, Text, Card } from 'rebass'
import { createGlobalStyle } from 'styled-components/macro'
import Heart from './Heart'
import fruits from './fruits'
import Phone from './Phone'

const Background = createGlobalStyle`
body {
  background-color: #EDE2E2;
  margin: 0;
}
`

const getImage = f => require(`./images/${f}`)

const ColumnLayout = props => (
  <Flex
    flexDirection="column"
    flexWrap="wrap"
    alignItems="center"
    mx="auto"
    css={{
      height: '650px',
      '& > div:nth-child(3)': {
        marginTop: '40px'
      }
    }}
    {...props}
  />
)

const SmallCard = props => (
  <Card
    mb={2}
    mx={1}
    bg="white"
    borderRadius={18}
    css={{ overflow: 'hidden', position: 'relative' }}
    {...props}
  />
)

const Name = props => (
  <Text
    as="h3"
    my={0}
    fontSize={2}
    fontFamily="sans-serif"
    textAlign="center"
    fontWeight="bold"
    {...props}
  />
)

const Price = props => (
  <Text
    pt={2}
    fontSize={1}
    fontFamily="sans-serif"
    color="#888"
    textAlign="center"
    {...props}
  />
)

const FruitCard = ({
  title,
  image,
  price,
  heart = false,
  size = 200
}) => (
  <SmallCard width={size}>
    <Image height={size} src={getImage(image)} />
    <Box py={3} px={2}>
      <Name>{title}</Name>
      <Price>${price.toFixed(2)} each</Price>
    </Box>
    <Heart heart={heart} />
  </SmallCard>
)

const App = () => (
  <Phone>
    <Background />
    <ColumnLayout>
      {fruits.map((f, i) => (
        <FruitCard key={i} {...f} />
      ))}
    </ColumnLayout>
  </Phone>
)

export default App
