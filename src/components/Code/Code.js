import React from "react";
import PropTypes from "prop-types";
import Prism from "prismjs";
import styles from "./code.css";
import "./prism.css";

const Code = ({ code, lang }) => (
  <div className={styles.code}>
    <header className={styles.header}>
      <span className={styles.red} />
      <span className={styles.yellow} />
      <span className={styles.green} />
      <span className={styles.lang}>{lang}</span>
    </header>
    <div className={styles.snippet}>
      <pre>
        <code
          dangerouslySetInnerHTML={{
            __html: Prism.highlight(code, Prism.languages[lang])
          }}
        />
      </pre>
    </div>
  </div>
);

Code.propTypes = {
  code: PropTypes.string.isRequired,
  lang: PropTypes.string
};

Code.defaultProps = {
  lang: "javascript"
};

export default Code;
