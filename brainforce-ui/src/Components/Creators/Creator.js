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
  IconButton,
  Image,
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter

} from '@chakra-ui/react'
import { Button, useDisclosure } from '@chakra-ui/react'
import Khalid from './kahlid.png';
import hassani from './hassani.png';
import oj from './oj.png';
import Sac from './sac.png';
import psu from './pennstate.png';
import fiu from './fiu.png';



import './Creator.css';


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
        <ModalContent>
          <ModalHeader>Creators of BrainForce</ModalHeader>
          <ModalCloseButton />
          <ModalBody className="justify-content">

            <Card className = "card" maxW='md'>
              <CardHeader>
                <Flex spacing='4'>
                  <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap' >
                    <Avatar name='khalud' src={Khalid} />

                    <Box>
                      <Heading className="name-color"  size='sm'>Khalid Abouelrous</Heading>
                      <Text> Computer Science </Text>
                    </Box>
                  </Flex>
                </Flex>
              </CardHeader>
             
              <Image
                objectFit='cover'
                src={Sac}
                alt='Chakra UI'
              />
            </Card>
            <Card className = "card" maxW='md'>
              <CardHeader>
                <Flex spacing='4'>
                  <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                    <Avatar name='khalud' src={oj} />

                    <Box>
                      <Heading className="name-color" size='sm'>Oyindamola Akanbi</Heading>
                      <Text> Info Science & Tech</Text>
                    </Box>
                  </Flex>
                </Flex>
              </CardHeader>
             
              <Image
                objectFit='cover'
                src={psu}
                alt='Chakra UI'
              />
            </Card>
            <Card className = "card" maxW='md'>
              <CardHeader>
                <Flex spacing='4'>
                  <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                    <Avatar name='hassani' src={hassani} />

                    <Box>
                      <Heading className="name-color" size='sm'>Hassani Wissam</Heading>
                      <Text> Computer Science  </Text>
                    </Box>
                  </Flex>
                </Flex>
              </CardHeader>
             
              <Image
                objectFit='cover'
                src={fiu}
                alt='Chakra UI'
              />
            </Card>

         


          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>


      <div>


      </div>
    </>




  )

}
