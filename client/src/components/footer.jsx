import React, { Component } from "react";
import "../css/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGoogle,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer className="text-center text-white footer">
        <div className="footer-icon-row">
          <div className="footer-icon">
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
              target="_blank"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <div className="footer-icon-divider"></div>
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="https://www.google.com/"
              role="button"
              data-mdb-ripple-color="dark"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGoogle} />
            </a>
            <div className="footer-icon-divider"></div>
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="https://github.com/LuongHongTienDat/demoBlockchain"
              role="button"
              data-mdb-ripple-color="dark"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>

        <div className="text-center text-dark p-3 footer-copyright">
          © 2022 Copyright :
          <a className="text-dark" href="https://google.com">
            {" "}
            DHK Entertainment
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
