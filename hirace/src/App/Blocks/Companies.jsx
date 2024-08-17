import {TbBrandAsana, TbBrandGoogle, TbBrandBlogger, TbBrandFacebook, TbBrandZapier, TbBrandTwilio, TbBrandFinder} from 'react-icons/tb'
export function Companies() {
    return (
        // ! Replace the icons with actual svg
        <section className="hero is-primary is-halfheight">
            <div className="hero-body">
                <div className="container">
                    <div className="p-5 mb-6">
                        <div className="is-flex is-align-items-center is-justify-content-center is-flex-direction-column">
                            <div className="title is-5 has-text-weight-normal">Trusted by 150+ World's best companies</div>
                            <div className="level mt-6">
                                <span className="title is-1 mx-6 level-item">
                                    <span className="icon">
                                        <TbBrandAsana></TbBrandAsana>
                                    </span>
                                </span>
                                <span className="title is-1 mx-6 level-item">
                                    <span className="icon">
                                        <TbBrandGoogle></TbBrandGoogle>
                                    </span>
                                </span>
                                <span className="title is-1 mx-6 level-item">
                                    <span className="icon">
                                       <TbBrandBlogger></TbBrandBlogger>
                                    </span>
                                </span>
                                <span className="title is-1 mx-6 level-item">
                                    <span className="icon">
                                        <TbBrandFacebook></TbBrandFacebook>
                                    </span>
                                </span>
                                <span className="title is-1 mx-6 level-item mb-5">
                                    <span className="icon">
                                        <TbBrandZapier className='title is-1'></TbBrandZapier>
                                    </span>
                                </span>
                                <span className="title is-1 mx-6 level-item mb-5">
                                    <span className="icon">
                                        <TbBrandTwilio></TbBrandTwilio>
                                    </span>
                                </span>
                                <span className="title is-1 mx-6 level-item mb-5">
                                    <span className="icon">
                                        <TbBrandFinder></TbBrandFinder>
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}