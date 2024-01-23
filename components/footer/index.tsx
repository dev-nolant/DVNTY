import {Divider, Text} from '@nextui-org/react';
import React from 'react';
import {AcmeLogo} from '../navbar/logo';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

export const Footer = () => {
   return (
      <Flex
         css={{
            py: '$20',
            px: '$6',
         }}
      >
         <Box as={'footer'} css={{width: '100%'}}>
            <Flex
               justify={'center'}
               wrap={'wrap'}
               align={'center'}
               css={{
                  'gap': '$10',
                  '&  ul': {
                     margin: 0,
                  },
                  '@sm': {},
               }}
            >
               <Flex
                  css={{gap: '$5', w: '250px'}}
                  direction={'column'}
                  align={'center'}
               >
                  <AcmeLogo />
                  <Box as={'ul'} css={{gap: '$5', listStyle: 'none'}}>
                     <Box as={'li'}>
                        <Text span css={{color: '$accents8'}}>
                           Features
                        </Text>
                     </Box>
                     <Box as={'li'}>
                        <Text span css={{color: '$accents8'}}>
                           Pricing
                        </Text>
                     </Box>
                     <Box as={'li'}>
                        <Text span css={{color: '$accents8'}}>
                           Company
                        </Text>
                     </Box>
                     <Box as={'li'}>
                        <Text span css={{color: '$accents8'}}>
                        Start Now
                        </Text>
                     </Box>
                  </Box>
               </Flex>
               
               <Flex
                  css={{gap: '$5', w: '250px'}}
                  direction={'column'}
                  align={'center'}
               >
                  <Text h5>Contact</Text>
                  <Box as={'ul'} css={{gap: '$5', listStyle: 'none'}}>
                     <Box as={'li'}>
                        <a href="mailto:support@devnt.ai?subject=%5BSupport%20DEVNT.ai%5D%20-%20">
                        <Text span css={{color: '$accents8'}}>
                           support@devnt.ai
                        </Text>
                        </a>
                     </Box>
                     <Box as={'li'}>
                        <Text span css={{color: '$accents8'}}>
                           +1 (888-123-4567)
                        </Text>
                     </Box>
                   
                   
                  </Box>
               </Flex>
               <Flex
                  css={{gap: '$5', w: '250px'}}
                  direction={'column'}
                  align={'center'}
               >
                  <Text h5>Legal</Text>
                  <Box as={'ul'} css={{gap: '$5', listStyle: 'none'}}>
                     <Box as={'li'}>
                        <a href="privacypolicy">
                        <Text span css={{color: '$accents8'}}>
                           Privacy Policy
                        </Text>
                        </a>
                     </Box>
                     <Box as={'li'}>
                        <a href="termsofservice">
                        <Text span css={{color: '$accents8'}}>
                           Terms of Service
                        </Text>
                        </a>
                     </Box>
                     <Box as={'li'}>
                        <a href="refundpolicy">
                        <Text span css={{color: '$accents8'}}>
                           Refund Policy
                        </Text>
                        </a>
                     </Box>
                     <Box as={'li'}>
                        <a href="partner">
                        <Text span css={{color: '$accents8'}}>
                           Partner
                        </Text>
                        </a>
                     </Box>
                  </Box>
               </Flex>
               
            </Flex>
            <Box
               css={{
                  'px': '$10',
                  '@md': {
                     px: '$56',
                  },
               }}
            >
               <Divider
                  css={{
                     mt: '$14',
                     display: 'flex',
                     justifyContent: 'center',
                  }}
               />
               <Flex
                  //   justify={'between'}
                  align={'center'}
                  wrap={'wrap'}
                  css={{
                     'pt': '$8',
                     'gap': '$10',
                     'justifyContent': 'center',
                     '@md': {
                        justifyContent: 'space-between',
                     },
                  }}
               >
                  <Flex
                     css={{
                        gap: '$10',
                     }}
                     wrap={'wrap'}
                  >
                     <AcmeLogo />
                     <AcmeLogo />
                     <AcmeLogo />
                     <AcmeLogo />
                  </Flex>
                  <Flex
                     css={{
                        gap: '$6',
                     }}
                  >  <a href="termsofservice">
                     <Text span css={{color: '$accents8'}}>
                        Terms of Service
                     </Text>
                     </a>
                     <a href="privacypolicy">
                     <Text span css={{color: '$accents8'}}>
                        Privacy Policy
                     </Text>
                     </a>
                  </Flex>
                  <Flex
                     css={{
                        gap: '$6',
                     }}
                  >
                     <Text span css={{color: '$accents8'}}>
                        © Copyright 2023 DEVNT.
                     </Text>
                  </Flex>
               </Flex>
            </Box>
         </Box>
      </Flex>
   );
};
