import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import GithubButtons from '../GithubButtons/GithubButtons';

import { githubButtons } from '../../mock/data';

const Footer = () => {
  const { footer } = useContext(PortfolioContext);
  const { networks } = footer;
  const { isEnabled } = githubButtons;

  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <span className="back-to-top">
          <Link onClick={() => { window.scroll({ top: 0, left: 0, behavior: 'smooth' }); }}>
            <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
          </Link>
        </span>
        <div className="social-links">
          {networks &&
            networks.map((network) => {
              const { id, name, url } = network;
              return (
                <a
                  key={id}
                  href={url || 'https://github.com/WentaoLuk'}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={name}
                >
                  <i className={`fa fa-${name || 'refresh'} fa-inverse`} />
                </a>
              );
            })}
        </div>
        <hr />
        <p className="footer__text">
          The landing page template (Not including navbar, resume link and blog function) is initially retrieved from: {' '}
          <a href="https://github.com/cobidev/gatsby-simplefolio" target="_blank" rel="noopener noreferrer">
            Jacobo Martínez
          </a>
        </p>

        {/* {isEnabled && <GithubButtons />} */}
      </Container>
    </footer>
  );
};

export default Footer;
