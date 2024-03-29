// Layout
import { HeaderOnly } from '~/components/Layouts'

import Home from '~/pages/Home'
import Follow from '~/pages/Follow'
import Upload from '~/pages/Upload'
import Search from '~/pages/Search'

const publicRoutes = [
    { path: '/', element: Home },
    { path: '/following', element: Follow },
    { path: '/upload', element: Upload, layout: HeaderOnly },
    { path: '/search', element: Search, layout: null },
]

const privateRoutes = []

export { publicRoutes, privateRoutes }
