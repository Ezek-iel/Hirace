import { TbCompass, TbChevronRight } from 'react-icons/tb'
export function Navbar({ listings }) {
    return (
        <div className="container">
            <nav className="navbar mt-4" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item has-radius-normal" href="https://bulma.io">
                        <span className="mt-3 ml-2">
                            <span className="icon title is-1">
                                <TbCompass></TbCompass>
                            </span>
                            <span className="icon-text title is-3 ml-3 mb-2">Hirace</span>
                        </span>
                    </a>
                    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false"
                        data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                    </div>
                    {
                        listings.map(
                            (item, index) => { return <a href="" className="navbar-item mx-3 has-radius-normal" key={index}>{item}</a> }
                        )
                    }
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <a className="button is-primary">
                                    <span className="ml-4">Sign Up</span>
                                    <span className="icon">
                                        <TbChevronRight></TbChevronRight>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}