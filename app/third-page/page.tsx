import Header from "../components/header/header";
import Content from "../components/content/content";
import Footer from "../components/footer/footer";

import styles from '../page.module.css'

export default function Home() {
    return (
      <div className={styles.page}>
        <Header/>
        <div className={styles.main}>
            <Content/>
            <Content/>
        </div>
        <Footer/>
      </div>
    );
  }