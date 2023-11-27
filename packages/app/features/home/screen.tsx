'use client'

import { Link } from 'solito/link'
import { MotiLink } from 'solito/moti/app'
import {
  Box,
  VStack,
  Button,
  Image,
  Center,
  ButtonText,
} from '@gluestack-ui/themed'

export function HomeScreen() {
  return (
    <VStack
    space="xs"
    mt="$10"
    sx={{
      '@md': {
        mt: '$12',
      },
    }}
  >
    <Button
      sx={{
        ':hover': {
          bg: '$backgroundLight100',
        },
      }}
      size="md"
      backgroundColor="$backgroundLight0"
    >
      <Link href="/login">
        <ButtonText
          fontWeight="$bold"
          textDecorationLine="none"
          color="$primary500"
        >
          LOGIN
        </ButtonText>
      </Link>
    </Button>

    <Button
      sx={{
        ':hover': {
          bg: '$backgroundLight0',
          _text: {
            color: '$primary500',
          },
        },
      }}
      my="$4"
      size="md"
      variant="outline"
      borderColor="$borderLight0"
    >
      <Link href="/signup">
        <ButtonText textDecorationLine="none" color="$textLight50">
          SIGN UP
        </ButtonText>
      </Link>
    </Button>
  </VStack>
  )
}
