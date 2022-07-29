import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/image-1.jpg'
import IMG2 from '../../assets/image-2.jpg'
import IMG3 from '../../assets/image-3.jpg'
import IMG4 from '../../assets/image-4.jpg'
import IMG5 from '../../assets/image-5.jpg'
import IMG6 from '../../assets/image-6.jpg'

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'title name',
        github: 'https://github.com',
        demo: 'https://github.com'
    },
    {
        id: 2,
        image: IMG2,
        title: 'title name',
        github: 'https://github.com',
        demo: 'https://github.com'
    },
    {
        id: 3,
        image: IMG3,
        title: 'title name',
        github: 'https://github.com',
        demo: 'https://github.com'
    },
    {
        id: 4,
        image: IMG4,
        title: 'title name',
        github: 'https://github.com',
        demo: 'https://github.com'
    },
    {
        id: 5,
        image: IMG5,
        title: 'title name',
        github: 'https://github.com',
        demo: 'https://github.com'
    },
    {
        id: 6,
        image: IMG6,
        title: 'title name',
        github: 'https://github.com',
        demo: 'https://github.com'
    }
]



const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">

                {
                    data.map(({id, image, title, github, demo}) => {
                        return (
                        <article className="portfolio__item">
                            <div className="portfolio__item-image">
                                <img src={image} alt={title}/>
                            </div>
                            <h3>{title}</h3>
                            <div className="portfolio__item-cta">
                                <a href={github} className="btn">Github</a>
                                <a href={demo} className="btn btn-primary" target="_blank">Live Demo</a>
                            </div>
                        </article>
                        )
                    })
                }

                    {/* you can also use below */}
                    
                {/* <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG1} alt="portfolioImage"/>
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com" className="btn">Github</a>
                        <a href="https://github.com" className="btn btn-primary" target="_blank">Live Demo</a>
                    </div>
                </article>

                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG2} alt="portfolioImage"/>
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com" className="btn">Github</a>
                        <a href="https://github.com" className="btn btn-primary" target="_blank">Live Demo</a>
                    </div>
                </article>

                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG3} alt="portfolioImage"/>
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com" className="btn">Github</a>
                        <a href="https://github.com" className="btn btn-primary" target="_blank">Live Demo</a>
                    </div>
                </article>

                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG4} alt="portfolioImage"/>
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com" className="btn">Github</a>
                        <a href="https://github.com" className="btn btn-primary" target="_blank">Live Demo</a>
                    </div>
                </article>

                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG5} alt="portfolioImage"/>
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com" className="btn">Github</a>
                        <a href="https://github.com" className="btn btn-primary" target="_blank">Live Demo</a>
                    </div>
                </article>

                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG6} alt="portfolioImage"/>
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com" className="btn">Github</a>
                        <a href="https://github.com" className="btn btn-primary" target="_blank">Live Demo</a>
                    </div>
                </article> */}

            </div>
        </section>
    )
}

export default Portfolio
