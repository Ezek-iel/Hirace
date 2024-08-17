import { TbChevronRight, TbLocationFilled, TbReceiptDollar } from "react-icons/tb"

export function ExampleCard({children, jobTitle, company, details, location, salary, jobType, isPrimary}) {
    return (
        <div className={isPrimary ? "card has-background-primary-10" : "card"}>
            <div className="card-content">
                <div className="content">
                    <div className="is-flex is-justify-content-space-between">
                        <div className="is-flex">
                            <span className="icon title is-1">
                                {children}
                            </span>
                            <div className="ml-5">
                                <p className="title has-text-weight-normal is-6">{jobTitle}</p>
                                <p className="subtitle has-text-weight-light is-6 has-text-grey">
                                    {company}
                                </p>
                            </div>
                        </div>
                        <span className="icon is-size-4 has-text-primary">
                            <TbChevronRight></TbChevronRight>
                        </span>
                    </div>
                    <p className="subtitle has-text-weight-light is-6 has-text-grey">{details}</p>
                    <hr></hr>
                        <div className="is-flex">
                            <span>
                                <span className="icon is-size-5 has-text-primary">
                                    <TbLocationFilled></TbLocationFilled>
                                </span>
                                <span className="icon-text">{location}</span>
                            </span>

                            <span className="ml-4">
                                <span className="icon is-size-5 has-text-primary">
                                    <TbReceiptDollar></TbReceiptDollar>
                                </span>
                                <span className="icon-text">{salary}</span>
                            </span>

                            <span className="ml-4">
                                <span className="icon-text has-text-weight-semibold">{jobType}</span>
                            </span>

                        </div>
                </div>
            </div>
        </div>
    )
}