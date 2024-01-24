import { Center, Spinner } from '@chakra-ui/react'

const Loader = () => {
  return (
    <Center>
        <Spinner
            thickness='4px'
            speed='0.75s'
            emptyColor='gray.200'
            color='red.500'
            size='xl'
        />
    </Center>
  )
}

export default Loader
