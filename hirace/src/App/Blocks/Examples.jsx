import { ExampleCard } from "../Cards/ExamplesCard"
import { TbBrandFramer, TbBrandLoom, TbBrandTrello, TbBrandNotion, TbBrandSpotify, TbArrowRight } from "react-icons/tb"
export function Examples() {
    return (
        <section className="hero is-halfheight">
            <div className="hero-body">
                <div className="container is-flex is-flex-direction-column is-align-items-center">
                    <a href="" className="button is-primary is-outlined is-rounded my-5">Job Vacancy</a>
                    <p className="title has-text-weight-normal is-1 is-spaced has-text-centered">Discover the best job
                    </p>
                    <p className="subtitle is-4 has-text-centered">Start career with the best company in the world, we
                        ensure you to get
                        the best job possible.</p>
                    <div className="mt-6">
                        <span className="tag p-5">
                            <span className="tag is-primary is-large">Popular</span>
                            <span className="has-text-primary ml-5 is-size-5">Latest</span>
                        </span>
                    </div>
                    <div className="columns is-multiline mt-6 is-gap-6 is-centered">
                        <div className="column is-5">
                            <ExampleCard jobTitle="Web developer" company="Loom" details="We are on a mission to empower everyone at work to communicate more effectively." location="New York" salary="75k/95k yearly" jobType="Full Time" isPrimary={true}>
                                <TbBrandLoom></TbBrandLoom>
                            </ExampleCard>
                        </div>
                        <div className="column is-5">
                            <ExampleCard jobTitle="Product Designer" company="Framer" details="We are Framer.we're building the web design platform to help you do that." location="San Diego" salary="75k/90k yearly" jobType="Part Time">
                                <TbBrandFramer></TbBrandFramer>
                            </ExampleCard>
                        </div>
                        <div className="column is-5">
                            <ExampleCard jobTitle="Product Designer" company="Framer" details="We are Framer.we're building the web design platform to help you do that." location="San Diego" salary="75k/90k yearly" jobType="Part Time">
                                <TbBrandFramer></TbBrandFramer>
                            </ExampleCard>
                        </div>
                        <div className="column is-5">
                            <ExampleCard jobTitle="Senior Devops Engineer" company="Hubspot" details="HubSpot is aleading customer relationship management platform for scaling companies." salary="75k/90k yearly" jobType="Part Time" location="carlifonia">
                                <TbBrandTrello></TbBrandTrello>
                            </ExampleCard>
                        </div>
                        <div className="column is-5">
                            <ExampleCard jobTitle="Frontend Engineer" company="Notion" details="Your all-in-one workspace for tasks, notes, wikis,databases,and team collaboration." location="New York" salary="10/18k monthly" jobType="Internship">
                                <TbBrandNotion></TbBrandNotion>
                            </ExampleCard>
                        </div>
                        <div className="column is-5">
                            <ExampleCard jobTitle="Data Scientist" company="Spotify" details="Passionate music fans. Innovative tech pros. Perfect harmony. Join our band." location = "Carlifonia" salary="75/95k yearly" jobType="Full Time">
                                <TbBrandSpotify></TbBrandSpotify>
                            </ExampleCard>
                        </div>
                    </div>
                    <div className="level is-centered mt-6">Did not find what you are looking for
                        <a href="">

                            <span className="icon-text">View all Jobs</span>
                            <span className="icon is-size-5">
                                <TbArrowRight></TbArrowRight>
                            </span>
                        </a>
                    </div>
                </div>

            </div>
        </section>
    )
}