import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer / What I do / What You Might Need</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Mentoring</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Learn Programming fundamentals</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Understand Computer Science Theory</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Feel confident picking up multiple programming languages</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Interview Prep for Bootcamps or similar programs</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Career coaching; Get insight in the tech industry</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Meet other professionals I've mentored</p>
            </li>
          </ul>
        </article>
        {/* End of Mentoring Section */}

        {/* Beginning of Web Dev Section */}
        <article className="service">
          <div className="service__head">
            <h3>Web 3 Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Get your NFT Collection Launched with a personilzed DAPP</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Get your 1000+ NFT Generated through scripting</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Consultation on Web 3 Technologies and latest Web 3 Trends</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Sites that function with the ETH BlockChain</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Get your SOL Blockchain DAPP set up</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Solidity Smart Contract Research </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>UX/UI consultation regarding DAPP user flows.</p>
            </li>
          </ul>
        </article>
        {/* End of Web Dev Section */}

        {/* Beginning of IT Section */}
        <article className="service">
          <div className="service__head">
            <h3>IT Support</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Work with clients to build a better Computer Enviroment for productivity</p>
            </li>
          <li>
              <BiCheck className='service__list-icon' />
              <p>Computer Repair and Build Consultations</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Get machines up and running on any Operating Systems!</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Write Scripts for multiple installation of software</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Teach Basic Internet Security</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Build your dream PC</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services