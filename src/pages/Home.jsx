import Banner from "../components/banner/Banner"
import Blog from "../components/blog/Blog"
import { Feature } from "../components/feature/Feature"
import Project from "../components/project/Project"
import Work from "../components/work/Work"

const Home = () => {
  return (
    <>
    <Banner/>
    <Work/>
    <Project/>
    <Feature/>
    <Blog/>
    </>
  )
}

export default Home