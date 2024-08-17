import { Navbar } from "./Blocks/Navbar"
import { Hero } from "./Blocks/Hero"
import { Companies } from "./Blocks/Companies"
import { Features } from "./Blocks/Features"
import { Steps } from "./Blocks/Steps"
import { Examples } from "./Blocks/Examples"
import { Remarks } from "./Blocks/Remarks"
import { Footer } from "./Blocks/Footers"
function App() {
    return (
        <>
            <Navbar listings={['Job Vacancy', 'Features', 'Pricing', 'About Us']}></Navbar>
            <Hero></Hero>
            <Companies></Companies>
            <Features></Features>
            <Steps></Steps>
            <Examples></Examples>
            <Remarks></Remarks>
            <Footer></Footer>
        </>
    )
}

export default App