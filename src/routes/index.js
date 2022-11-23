// Layout
import { HeaderOnly } from '~/components/Layouts'
import routeConfigs from '~/config/routes'

import Home from '~/pages/Home'
import Follow from '~/pages/Follow'
import Upload from '~/pages/Upload'
import Search from '~/pages/Search'
import Profile from '~/pages/Profile'

const publicRoutes = [
    { path: routeConfigs.home, element: Home },
    { path: routeConfigs.profile, element: Profile },
    { path: routeConfigs.following, element: Follow },
    { path: routeConfigs.upload, element: Upload, layout: HeaderOnly },
    { path: routeConfigs.search, element: Search, layout: null },
]

const privateRoutes = []

export { publicRoutes, privateRoutes }
