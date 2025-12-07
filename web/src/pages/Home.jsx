import Header from "../components/Header";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <>
      <Header title="SkillShare Hub" />
      <main className={styles.main}>
        <h1 className={styles.hero}>
          Learn and Teach.
          <br />
          Exchange Skills.
        </h1>
        <p className={styles.lead}>
          SkillShare Hub is a community-driven platform where you can exchange
          skills and knowledge with others.
        </p>

        <div className={styles.search}>
          <Input placeholder="Search for skills" />
        </div>

        <Button>Get Started</Button>
      </main>
    </>
  );
}
