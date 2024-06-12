import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.PNG'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'TikiToken ETH Decentralized Application - Web 3 Developer',
    github: 'https://mint.tikitoken.io/',
    demo: 'https://tikitoken.io/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Puff Puff Pass NFT ETH Decentralized Application - Web 3 Developer / Smart Contractor Auditor',
    github: 'https://rarible.com/rollup/itemsm',
    demo: 'https://nft.carniroll.com/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Lost Cats 2D/3D SOL Decentralized Application - Web 3 Developer / Web 3 Reseacher',
    github: 'https://nftlostcats.company.site/',
    demo: 'https://lost-cats-ui.vercel.app/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Hang Over Bears ETH Decentralized Application - Engineering Director',
    github: 'https://twitter.com/Bearshangover',
    demo: 'https://hangoverbears.io/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Moverz Media Group Web 3 Innovators - Chief Technology Officer',
    github: 'https://moverzgroup.com/how-we-do-it/',
    demo: 'https://moverzgroup.com/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Fighter Heart - Web 3 Developer / Smart Contractor Auditor',
    github: 'https://github.com',
    demo: 'https://www.fighterheart.io/'
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work That I Worked On And My Roles In The Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Other</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Visit Site</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio