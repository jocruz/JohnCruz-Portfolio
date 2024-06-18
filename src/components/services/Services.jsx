import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>Highlighting My Full Stack Development Journey</h5>
      <h2>Proven Expertise</h2>

      <div className="container services__container">
        {/* Technology Stack and Projects Section */}
        <article className="service">
          <div className="service__head">
            <h3>Technology Stack Used in Projects 🛠️</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Developing with React JS and TypeScript for scalable
                applications 👨‍💻
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Building and integrating applications using{" "}
                <a
                  href="https://thirdweb.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Thirdweb SDK
                </a>{" "}
                🌐
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Implementing payment solutions with{" "}
                <a
                  href="https://stripe.com/docs/api"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Stripe API
                </a>{" "}
                💳
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Enhancing user experience with{" "}
                <a
                  href="https://docs.dynamic.xyz/introduction/welcome"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Dynamic Wallets API 🎨
                </a>
              </p>
            </li>
          </ul>
        </article>
        {/* End of Technology Stack Section */}

        {/* Web 3 Development Section */}
        <article className="service">
          <div className="service__head">
            <h3>Web 3 Development 🌍</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Launch personalized DAPPs with NFT collections on Ethereum and
                Solana blockchains 🚀
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Generate and manage 1000+ NFTs using advanced scripting,
                including platforms like{" "}
                <a
                  href="https://hashlips.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  HashLips
                </a>{" "}
                and{" "}
                <a
                  href="https://metaplex.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Metaplex
                </a>{" "}
                🎨
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Consultation on the latest Web 3 technologies and trends,
                including marketplaces like{" "}
                <a
                  href="https://opensea.io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  OpenSea
                </a>{" "}
                📈
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Expertise in Solidity smart contracts, including{" "}
                <a
                  href="https://www.erc721a.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ERC-721A
                </a>
                ,{" "}
                <a
                  href="https://eips.ethereum.org/EIPS/eip-1155"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ERC-1155
                </a>
                , and{" "}
                <a
                  href="https://eips.ethereum.org/EIPS/eip-20"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ERC-20
                </a>{" "}
                standards 🔗
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Development and integration of smart contracts using{" "}
                <a
                  href="https://thirdweb.com/thirdweb.eth/TokenERC721"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Thirdweb's NFT Collection
                </a>
                ,{" "}
                <a
                  href="https://thirdweb.com/thirdweb.eth/DropERC721"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Edition Drop
                </a>
                , and NFT Drop contracts ⚙️
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Design and consultation for DAPP user interfaces and
                experiences, utilizing wallets like MetaMask and{" "}
                <a
                  href="https://magic.link/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Magic Wallet
                </a>{" "}
                🖌️ and{" "}
                <a
                  href="https://docs.phantom.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Phantom Wallets 👻
                </a>
              </p>
            </li>
          </ul>
        </article>
        {/* End of Web 3 Development Section */}

        {/* Consulting Services Section */}
        <article className="service">
          <div className="service__head">
            <h3>Web 3 Development and Strategic Innovation 🚀</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Spearheaded the development and optimization of a cost-efficient
                Web 3 application for Moverz, enhancing NFT minting processes
                and smart contract management 🌐💸
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Conducted comprehensive research and applied cutting-edge
                solutions in blockchain technology to drive significant cost
                reductions and security enhancements 🔍🔗
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Provided expert on-site support and client education for Web 3
                wallet integration and troubleshooting, ensuring high customer
                satisfaction and smoother operations 🛠️👥
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Engaged actively in leading Web 3 developer communities to stay
                abreast of industry trends and technologies, applying insights
                to deliver state-of-the-art solutions 🌍📡
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Collaborated with marketing and technical teams to streamline
                operations and enhance ticket sales through strategic use of
                blockchain technology 📊🎟️
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Mentored team members and supported the integration of
                automation tools, fostering a culture of innovation and
                continuous improvement in technology deployment 🧑‍🏫⚙️
              </p>
            </li>
          </ul>
        </article>

        {/* End of Consulting Services Section */}
      </div>
    </section>
  );
};

export default Services;
