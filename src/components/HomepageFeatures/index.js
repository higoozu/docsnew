import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '👋 Hi there!',
    Svg: require('@site/static/img/bear.svg').default,
    description: (
      <>
        这是一个个人知识库，更多内容会逐步补充。<br />
        这些内容不一定对每个人都有用，但这里是一个很好的地方，供存放一些需要随时查阅的内容。<br />
        本网站尚在建设中...
      </>
    ),
  },
];


function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center margin-index">
      <Heading as="h1">{title}</Heading></div>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md margin-index">
        
      <p>{description}</p>

      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row justify-content--center">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}