import { GluestackUIProvider } from '@gluestack-ui/themed'
import { config } from './gluestack-ui.config'

export function GluestackUI({ children }: { children: React.ReactNode }) {
  return <GluestackUIProvider config={config}>{children}</GluestackUIProvider>
}
