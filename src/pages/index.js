import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Svg from '@site/static/img/bear.svg'; // 引入你的SVG文件
import styles from './index.module.css';

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout
      // title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <div className={styles.hero_wrap} style={{
        background: `url(./img/bg.svg) center center/cover no-repeat`
      }}>
        {/* SVG图形插入位置 */}
        <Svg className={styles.featureSvg} role="img" /> {/* 添加SVG组件 */}
        
        {/* 原有的h1标题 */}
        <h1 className={styles.hero_title}>AsoBear Docs</h1>
        
        {/* 可选的副标题和其他元素 */}
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