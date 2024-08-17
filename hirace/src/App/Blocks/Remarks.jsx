import '../../../public/search.svg'
export function Remarks() {
    return (
        <section className="hero is-halfheight">
            <div className="hero-body">
                <div className="container">
                    <div className="card p-4 py-6 has-background-primary">
                        <div className="card-content">
                            <div className="content is-flex">
                                <div className="columns is-gap-3">
                                    <div className="column is-6 is-offset-1">
                                        <p className="title is-1">Set up personalized
                                            job search alerts</p>
                                        <a className="button is-medium is-light  has-text-primary">
                                            <span>Sign Up</span>
                                            <span className="icon">
                                                <i className="ti ti-chevron-right"></i>
                                            </span>
                                        </a>
                                    </div>
                                    <div className="column is-6">
                                        <figure className="image is-16by9 is-640x360">
                                            <img src="search.svg"></img>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}