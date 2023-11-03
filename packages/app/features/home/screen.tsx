import { TextLink } from 'solito/link'
import { MotiLink } from 'solito/moti'

export function HomeScreen() {
  return (
    <>
      <TextLink href="/user/fernando">Regular Link</TextLink>
      <MotiLink href="/user/fernando"></MotiLink>
    </>
  )
}
