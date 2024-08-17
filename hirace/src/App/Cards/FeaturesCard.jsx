import {TbArrowRight} from 'react-icons/tb'

export function FeaturesCard({children, title, subtitle}) {
    return (
        <div className="card">
            <div className="card-content">
                <div className="content">
                    <span className="icon title is-1">
                        {children}
                    </span>
                    <p className="title is-4 has-text-weight-normal my-3">{title}
                    </p>
                    <p className="subtitle is-6 mt-3">{subtitle}</p>
                    <a href="" className="has-text-primary">
                        <span className="icon-text">Learn More</span>
                        <span className="icon is-size-3">
                            <TbArrowRight></TbArrowRight>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    )
}