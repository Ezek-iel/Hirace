import { TbBrandFacebook, TbBrandLinkedin, TbBrandTwitter } from "react-icons/tb";

export function Footer() {
    return (
        <footer className="footer m-5 has-radius-normal">
            <div className="content">
                <div className="container">
                    <div className="columns is-gap-1">
                        <div className="column is-4">
                            <p href="" className="">
                                <span className="mt-3 ml-2">
                                    <span className="icon is-size-1">
                                        <i className="ti ti-compass"></i>
                                    </span>
                                    <span className="icon-text title is-3 ml-3 mb-2">Hirace</span>
                                </span>
                            </p>
                            <p className="subtitle is-4">Find job you love and research the
                                fastest-growing companies.</p>
                        </div>
                        <div className="column is-3">
                            <div className="content has-text-centered">
                                <p className="subtitle has-text-grey is-5 has-text-weight-semibold">Product</p>
                                <p>Remote Job</p>
                                <p>Startup</p>
                                <p>Investor & Board</p>
                                <p>Company</p>
                            </div>
                        </div>
                        <div className="column is-3">
                            <div className="content has-text-centered">
                                <p className="subtitle has-text-grey is-5 has-text-weight-semibold">Features</p>
                                <p>For Candidate</p>
                                <p>For Company</p>
                                <p>Society</p>
                            </div>
                        </div>
                        <div className="column is-3">
                            <div className="content has-text-centered">
                                <p className="subtitle has-text-grey is-5 has-text-weight-semibold">About Us</p>
                                <p>Documentation</p>
                                <p>Contact Us</p>
                                <p>Career</p>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="content is-flex is-justify-content-space-between is-align-items-center">
                        <p className="subtitle has-text-grey is-5">©2023 Hirace Technologies, Inc.</p>
                        <div className="is-flex">
                            <div className="is-flex is-gap-2 mr-6">
                                <p>Terms</p>
                                <p>Privacy</p>
                                <p>Legal</p>
                            </div>
                            <div className="buttons ml-6 mb-6">
                                <a className="">
                                    <span className="icon is-size-3">
                                        <TbBrandFacebook></TbBrandFacebook>
                                    </span>
                                </a>
                                <a className="">
                                    <span className="icon is-size-3">
                                        <TbBrandLinkedin></TbBrandLinkedin>
                                    </span>
                                </a>
                                <a className="">
                                    <span className="icon is-size-3">
                                        <TbBrandTwitter></TbBrandTwitter>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}