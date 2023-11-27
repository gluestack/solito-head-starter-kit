// @ts-nocheck
'use client'
import { useServerInsertedHTML } from 'next/navigation'
import { StyleSheet } from 'react-native'
import { Provider } from 'app/provider'

export function StylesProvider({ children }: { children: React.ReactNode }) {
  useServerInsertedHTML(() => {
    // if you use Tamagui, you should add its sheet here too.
    const sheet = StyleSheet.getSheet()
    return (
      <style
        dangerouslySetInnerHTML={{ __html: sheet.textContent }}
        id={sheet.id}
      />
    )
  })
  return <><Provider>{children}</Provider></>
}