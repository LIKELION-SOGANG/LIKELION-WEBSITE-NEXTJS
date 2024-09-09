import { useMediaQuery } from '../utils/useMediaQuery'
import PageContentDesktop from './PageContentDesktop'
import PageContentMobile from './PageContentMobile'

export default function PageContent() {
  const isSmallScreen = useMediaQuery('(max-width: 600px)')
  return <>{isSmallScreen ? <PageContentDesktop /> : <PageContentMobile />}</>
}
