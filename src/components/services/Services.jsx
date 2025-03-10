import React from "react";
import "./services.css";

const Services = () => {
  return (
    <section id="services">
      <h5>My Development Journey</h5>
      <h2>Proven Expertise</h2>
      <div className="services__container">
        <article className="service">
          <div className="service__head">
            <h3>Technology Stack</h3>
          </div>
          <ul className="service__list">
            <li>
              <p>Robust apps with React & TypeScript</p>
            </li>
            <li>
              <p>
                Seamless integration via{" "}
                <a
                  href="https://thirdweb.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Thirdweb SDK
                </a>
              </p>
            </li>
            <li>
              <p>
                Secure payments with{" "}
                <a
                  href="https://stripe.com/docs/api"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Stripe API
                </a>
              </p>
            </li>
            <li>
              <p>
                Enhanced UX with{" "}
                <a
                  href="https://docs.dynamic.xyz/introduction/welcome"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Dynamic Wallets API
                </a>
              </p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Web 3 Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <p>DAPP launches on Ethereum & Solana</p>
            </li>
            <li>
              <p>
                Manage 1000+ NFTs with{" "}
                <a
                  href="https://hashlips.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  HashLips
                </a>{" "}
                &{" "}
                <a
                  href="https://metaplex.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Metaplex
                </a>
              </p>
            </li>
            <li>
              <p>
                Consult on trends via{" "}
                <a
                  href="https://opensea.io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  OpenSea
                </a>
              </p>
            </li>
            <li>
              <p>Smart contracts: ERC-721A, ERC-1155, & ERC-20</p>
            </li>
            <li>
              <p>
                Deploy NFT collections with{" "}
                <a
                  href="https://thirdweb.com/thirdweb.eth/TokenERC721"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Thirdweb
                </a>
              </p>
            </li>
            <li>
              <p>Intuitive DAPP UIs with MetaMask, Magic, & Phantom</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Strategic Innovation</h3>
          </div>
          <ul className="service__list">
            <li>
              <p>Optimized Web 3 solutions for efficiency</p>
            </li>
            <li>
              <p>Applied blockchain insights for cost & security gains</p>
            </li>
            <li>
              <p>Expert support for wallet integration</p>
            </li>
            <li>
              <p>Streamlined operations to boost performance</p>
            </li>
            <li>
              <p>Mentored teams & integrated automation tools</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
