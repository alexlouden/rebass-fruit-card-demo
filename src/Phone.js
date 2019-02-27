import React from 'react'
import { Flex, Box, Card } from 'rebass'
import 'styled-components/macro'

const Phone = props => (
  <Flex
    justifyContent="center"
    alignItems="center"
    css={{ height: '100vh' }}
  >
    <Card
      px={1}
      bg="#F3F5F7"
      borderRadius={50}
      width={440}
      css={{
        overflow: 'hidden',
        boxShadow: '0 50px 100px -40px rgba(0,0,0,0.6)'
      }}
    >
      <Box
        py={5}
        px={2}
        css={{
          maxHeight: '90vh',
          overflowY: 'auto'
        }}
        {...props}
      />
    </Card>
  </Flex>
)

export default Phone
