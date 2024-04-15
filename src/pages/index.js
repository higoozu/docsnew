import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      // title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <div  className={styles.hero_wrap} style={{
        background: `url(./img/bg.svg) center center/cover no-repeat`
      }}>
        <h1 className={styles.hero_title}>AsoBear Docs</h1>
        <p className={styles.hero_subtitle}>AsoBear Docs</p>
        {/* <header>
          <div className={styles.container}>
            
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <div className={styles.buttons}></div>
          </div>
        </header> */}
      </div>
    </Layout>
  );
}

export default Home;
