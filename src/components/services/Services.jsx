import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer / My Projects / What You Might Need</h5>
      <h2>Freelance Experience & Expertise in Development</h2>

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
            <h3>Consulting and Leadership Services 🚀</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Led full-stack projects independently, delivering robust web and
                Web 3 applications 🌐
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Strategic consulting to optimize computing environments,
                enhancing team productivity and project efficiency 📈
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Implemented cost-saving development strategies at Moverz,
                significantly reducing project budgets 💸
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Mentoring an intern with a focus on hands-on project
                involvement, fostering new talent in tech 🧑‍🏫
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Expertise in setting up and maintaining diverse operating
                systems, ensuring seamless workflow across platforms 🖥️
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Develop and deploy automation scripts for efficient software
                installation and operations automation ⚙️
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Provide education on internet and data security principles,
                enhancing organizational cyber hygiene 🔒
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Custom PC building and tech consultation tailored to specific
                business needs and creative projects 🛠️
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
