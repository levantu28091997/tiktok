import { Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { publicRoutes } from '~/routes'
import { DefaultLayout } from '~/components/Layouts'

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((item, index) => {
                        const Page = item.element
                        let Layout = DefaultLayout

                        if (item.layout) {
                            Layout = item.layout
                        } else if (item.layout === null) {
                            Layout = Fragment
                        }

                        return (
                            <Route
                                key={index}
                                path={item.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            ></Route>
                        )
                    })}
                </Routes>
            </div>
        </Router>
    )
}

export default App
