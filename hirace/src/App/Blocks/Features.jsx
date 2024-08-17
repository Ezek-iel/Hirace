import { FeaturesCard } from "../Cards/FeaturesCard"
import { TbLeaf, TbHeartCog, TbHourglassLow } from "react-icons/tb"
export function Features() {
    return (
        <div className="container">
            <section className="hero is-medium is-medium">
                <div className="hero-body">
                    <div className="container my-6">
                        <div className="container is-flex is-align-items-center is-flex-direction-column">
                            <a href="" className="button is-outlined is-primary is-rounded is-uppercase">Why Hirace</a>
                            <p className="title is-1 has-text-weight-normal has-text-centered mt-4">New way to get a job</p>
                            <p className="subtitle is-4 has-text-centered mt-5">Once you gain access to the Hirace platform
                                you start out by adding your first team roles.</p>
                        </div>
                        <div className="container my-6">
                            <div className="columns is-centered is-gap-1">
                                <div className="column is-4">
                                    <FeaturesCard title="Manage candidates easily" subtitle="Our easy-to-use software lets you evaluate candidates and move them faster">
                                        <TbLeaf></TbLeaf>
                                    </FeaturesCard>
                                </div>
                                <div className="column is-4">
                                    <FeaturesCard title="User friendly hiring software" subtitle="Make it easy and quick for top candidates to find your jobs.">
                                        <TbHeartCog></TbHeartCog>
                                    </FeaturesCard>
                                </div>
                                <div className="column is-4">
                                    <div className="card">
                                        <FeaturesCard title="Make the perfect hire" subtitle="Reduce hiring time by finding qualified candidates quickly and easily.">
                                            <TbHourglassLow></TbHourglassLow>
                                        </FeaturesCard>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}