import '../../../public/main-img.svg'
export function Hero() {
    return (
    <div className="container">
        <section className="hero is-large">
            <div className="hero-body">
                <div className="columns is-gap-6">
                    <div className="column is-6">
                        <div className="mb-6">
                            <span className="tag p-5 is-rounded">
                                <span className="tag is-primary is-rounded is-medium">
                                    NEW
                                </span>
                                <span
                                    className="icon-text title is-5 has-text-primary has-text-weight-normal ml-3 mt-5">WE
                                    ARE HIRING</span>
                                <span className="icon has-text-primary title is-5 has-text-weight-normal">
                                    <i className="ti ti-arrow-right"></i>
                                </span>
                            </span>
                        </div>
                        <p className="title is-1 mt-6">The best place to find your dream job</p>
                        <p className="subtitle is-4 mt-6 has-text-grey mb-5">Find job you love and research the
                            fastest-growing
                            companies, and hire experienced workers.</p>
                        <div className="mt-5">
                            <span className="ml-4">
                                <span className="icon is-size-5">
                                    <i className="ti ti-circle-check-filled has-text-primary"></i>
                                </span>
                                <span className="icon-text is-size-5">7 Days free trial</span>
                            </span>
                            <span className="ml-5">
                                <span className="icon is-size-5">
                                    <i className="ti ti-circle-check-filled has-text-primary"></i>
                                </span>
                                <span className="icon-text is-size-5">Easy to set up</span>
                            </span>
                        </div>
                    </div>
                    <div className="column is-6">
                        <figure className="image is-1by1">
                            <img src='main-img.svg'></img>
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    </div>
    )
}