import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import imgMap from '../../../static/img/Goals-Progress/CWMA.png'


function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
        <img src={imgMap} alt="Hydrologic Areas" useMap="#image-map" />
        <map className='image-map' name="image-map">
          <area target="" alt="Loma-Alta" title="Loma-Alta" href="/docs/LomaAlta/Overview" coords="48,226,108,183,128,193,219,139,310,132,359,148,344,184,310,193,291,209,259,199,190,215,164,230,112,237,82,274" shape="poly" />
          <area target="" alt="Agua-Hedionda" title="Agua-Hedionda" href="/docs/AguaHedionda/Overview" coords="136,351,204,311,254,305,304,275,335,245,381,250,437,262,480,249,517,204,563,220,559,250,554,277,564,304,535,308,514,324,501,346,472,359,440,393,383,408,320,404,224,411,171,421" shape="poly" />
          <area target="" alt="Encincas" title="Encincas" href="/docs/Encinas/Overview" coords="174,422,193,464,249,454,275,462,303,455,325,452,333,416" shape="poly" />
          <area target="" alt="San-Marcos" title="San-Marcos" href="/docs/category/attachments" coords="195,468,333,457,358,416,398,420,439,413,574,308,575,190,671,216,671,304,710,349,650,422,617,445,529,468,481,491,456,537,403,602,371,658,265,689" shape="poly" />
          <area target="" alt="Buena-Vista" title="Buena-Vista" href="/docs/BuenaVista/Overview" coords="128,341,208,295,334,237,396,236,468,233,523,170,494,115,374,141,342,188,291,211,229,215,178,229,116,245,87,277" shape="poly" />
          <area target="" alt="Escondido" title="Escondido" href="/docs/EscondidoCreek/Overview" coords="304,812,334,783,458,738,505,690,655,554,954,331,1132,264,1126,194,846,197,772,219,760,356,546,495,441,594,392,661,274,701" shape="poly" />
        </map>
        </div>
      </div>
    </section>
  );
}
