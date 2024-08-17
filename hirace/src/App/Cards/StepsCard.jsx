import {TbCircleCheckFilled} from 'react-icons/tb'
export function StepCard({number, title, subtitle, firstListing, secondListing}) {

    return (

        <div className="container my-6">
            <div className="columns is-gap-3 mt-5">
                <div className="column">
                    <figure className="image is-2by1 is-600x480">
                        <img src="./assets/process_outline-I_black.svg"></img>
                    </figure>
                </div>
                <div className="column">
                    <div className="card has-background-dark is-shadowless">
                        <div className="card-content">
                            <div className="content">
                                <p className="subtitle has-text-primary is-4 my-5">{number}</p>
                                <p className="title is-3">{title}</p>
                                <p className="subtitle is-5 mt-2">{subtitle}</p>
                                <hr></hr>
                                <div className="mb-6">
                                    <span className="icon is-size-5 has-text-primary">
                                        <TbCircleCheckFilled></TbCircleCheckFilled>
                                    </span>
                                    <span className="icon-text">{firstListing}</span>
                                </div>
                                <div>
                                    <span className="icon is-size-5 has-text-primary">
                                        <TbCircleCheckFilled></TbCircleCheckFilled>
                                    </span>
                                    <span className="icon-text">{secondListing}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}