import { ChangeEvent, useState } from "react";
import { useParams } from "react-router";
import slides from "../Slider/slides.json";
import styles from "./SignUp.module.css";

interface IParams {
  id: string;
}

export function SignUp() {
  const params: IParams = useParams();
  const id: number = Number(params.id);
  const { title } = slides[id];

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [carMark, setCarMark] = useState("");
  const [telephone, setTelephone] = useState("");

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <h1 className={styles.sub_title}>Sign up</h1>
      <div className={styles.input_container}>
        <h4 className={styles.input_title}>First name</h4>
        <input
          className={styles.input}
          value={firstName}
          onChange={(event: ChangeEvent<HTMLInputElement>) => setFirstName(event.target.value)}
        />
      </div>
      <div className={styles.input_container}>
        <h4 className={styles.input_title}>Last name</h4>
        <input
          className={styles.input}
          value={lastName}
          onChange={(event: ChangeEvent<HTMLInputElement>) => setLastName(event.target.value)}
        />
      </div>
      <div className={styles.input_container}>
        <h4 className={styles.input_title}>Car mark</h4>
        <input
          className={styles.input}
          value={carMark}
          onChange={(event: ChangeEvent<HTMLInputElement>) => setCarMark(event.target.value)}
        />
      </div>
      <div className={styles.input_container}>
        <h4 className={styles.input_title}>Email</h4>
        <input
          className={styles.input}
          value={email}
          onChange={(event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
        />
      </div>
      <div className={styles.input_container}>
        <h4 className={styles.input_title}>Telephone</h4>
        <input
          className={styles.input}
          value={telephone}
          onChange={(event: ChangeEvent<HTMLInputElement>) => setTelephone(event.target.value)}
        />
      </div>
      <button className={styles.button}>Sign up</button>
    </div>
  );
}
