import Link from 'next/link';
import styles from './index.module.scss';

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <div className={styles.page}>
      <div className="wrapper">
        <div className="container">
          {/* <Link href="/about">
            <a>About</a>
          </Link> */}
          <div id="welcome">
            <h1>
              <span> Hello there, </span>
              Welcome easy-web 👋 v1
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
