import { Swiper, SwiperSlide } from 'swiper/react'
import { StepCard } from '../Cards/StepsCard'
import 'swiper/css'
export function Steps() {

    return (
        <section className="hero is-halfheight">
            <div className="hero-body">
                <div className="container">
                    <div className="container">
                        <div
                            className="container is-flex is-flex-direction-column is-align-items-center is-justify-content-center">
                            <a href="" className="button is-outlined is-primary is-rounded is-uppercase">How it
                                works</a>
                            <p className="title is-1 mt-5">Getting started is easy.</p>
                            <p className="subtitle is-4 has-text-centered mt-3">Create a profile and we'll match you with the best your dream companies and jobs in the world.</p>
                        </div>
                    </div>

                    <Swiper
                        slidesPerView={1}
                        autoplay={{delay: 3000}}
                    >
                        <SwiperSlide>
                            <StepCard number="01" title="Login or Rdegister" subtitle="Follow the whole step and you are just ready to get started" firstListing="Easy and efficient Login process" secondListing="Use 2FA to extra-secure your account"></StepCard>
                        </SwiperSlide>
                        <SwiperSlide>
                            <StepCard number="02" title="Fill your Personal Data" subtitle="Finish your registeration and and complete your personal data and prepare your resume." firstListing="Easily collaborate with teams to find & hire the right candidate." secondListing="Create account that will engage your profile."></StepCard>
                        </SwiperSlide>
                        <SwiperSlide>
                            <StepCard number="03" title="Upload your Resume" subtitle="Upload your resume that match with your background" firstListing="Easy and better discovery" secondListing="Automatic suggestions to make your resume more better"></StepCard>
                        </SwiperSlide>
                        <SwiperSlide>
                            <StepCard number="04" title="Find the match job" subtitle="Look for job vacancy and easily get your dream job" firstListing="Easy and better discovery" secondListing="Automatic filtering"></StepCard>
                        </SwiperSlide>
                    </Swiper>

                </div>
            </div>
        </section>
    )
}