import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Avatar,
  Box,
  Flex,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react'
import { Button, useDisclosure } from '@chakra-ui/react'
import Khalid from './kahlid.png';
import hassani from './hassani.png';
import oj from './oj.png';
import Sac from './sac.png';
import psu from './pennstate.png';
import fiu from './fiu.png';

export function Creator() {

  const OverlayOne = () => (
    <ModalOverlay
      bg='blackAlpha.300'
      backdropFilter='blur(10px) hue-rotate(90deg)'
    />
  )

  const OverlayTwo = () => (
    <ModalOverlay
      bg='none'
      backdropFilter='auto'
      backdropInvert='80%'
      backdropBlur='2px'
    />
  )

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [overlay, setOverlay] = React.useState(<OverlayOne />)

  return (
    <>
      <Button
        ml='4'
        onClick={() => {
          setOverlay(<OverlayTwo />)
          onOpen()
        }}
      >
        Creators
      </Button>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent
          bgColor='var(--lightgrey)' // Set custom theme color
          w='100%' // Set width to 100%
        >
          <ModalHeader>
            <Heading size='lg' color='var(--darkblue)'>Creators of BrainForce</Heading>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex justifyContent='center' alignItems='center' flexWrap='wrap'>
              {/* Card 1 */}
              <Box
                borderWidth='1px'
                borderRadius='md'
                overflow='hidden'
                boxShadow='md'
                p='4'
                m='2' // Add margin to create space between cards
                w='300px' // Set a fixed width for consistent layout
              >
                <Flex spacing='4' alignItems='center'>
                  <Avatar name='khalud' src={Khalid} />
                  <Box ml='2'>
                    <Heading size='sm' color='var(--darkblue)'>Khalid Abouelrous</Heading>
                    <Text fontSize='sm' color='gray.600'>Computer Science</Text>
                  </Box>
                </Flex>
                <Image
                  mt='4'
                  objectFit='cover'
                  src={Sac}
                  alt='Chakra UI'
                  w='100%'
                  h='150px'
                />
              </Box>

              {/* Card 2 */}
              <Box
                borderWidth='1px'
                borderRadius='md'
                overflow='hidden'
                boxShadow='md'
                p='4'
                m='2' // Add margin to create space between cards
                w='300px' // Set a fixed width for consistent layout
              >
                <Flex spacing='4' alignItems='center'>
                  <Avatar name='oj' src={oj} />
                  <Box ml='2'>
                    <Heading size='sm' color='var(--darkblue)'>Oyindamola Akanbi</Heading>
                    <Text fontSize='sm' color='gray.600'>Info Science & Tech</Text>
                  </Box>
                </Flex>
                <Image
                  mt='4'
                  objectFit='cover'
                  src={psu}
                  alt='Chakra UI'
                  w='100%'
                  h='150px'
                />
              </Box>

              {/* Card 3 */}
              <Box
                borderWidth='1px'
                borderRadius='md'
                overflow='hidden'
                boxShadow='md'
                p='4'
                m='2' // Add margin to create space between cards
                w='300px' // Set a fixed width for consistent layout
              >
                <Flex spacing='4' alignItems='center'>
                  <Avatar name='hassani' src={hassani} />
                  <Box ml='2'>
                    <Heading size='sm' color='var(--darkblue)'>Hassani Wissam</Heading>
                    <Text fontSize='sm' color='gray.600'>Computer Science</Text>
                  </Box>
                </Flex>
                <Image
                  mt='4'
                  objectFit='cover'
                  src={fiu}
                  alt='Chakra UI'
                  w='100%'
                  h='150px'
                />
              </Box>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
