import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Search from "../components/Search"

const SearchPage = () => {
  return (
    <Layout>
      <SEO title="Search" />
      <Search />
    </Layout>
  )
}
export default SearchPage
