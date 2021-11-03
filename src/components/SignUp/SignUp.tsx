import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { ACTIONS } from "../../redux/constants";
import { IPilot } from "../../redux/reducers/events";
import { IState } from "../../redux/store";
import slides from "../Slider/slides.json";
import styles from "./SignUp.module.css";

interface IParams {
  id: string;
}

export function SignUp() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dispatch = useDispatch();
  const history = useHistory();

  const emailInput: any = useRef(null);
  const firstInput: any = useRef(null);
  const lastInput: any = useRef(null);
  const brandInput: any = useRef(null);
  const modelInput: any = useRef(null);
  const telInput: any = useRef(null);

  const params: IParams = useParams();
  const id: number = Number(params.id);
  const { title } = slides[id];

  const events = useSelector((state: IState) => state.events.events);
  let event = events.filter((item) => item.id === id);

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [carBrand, setCarBrand] = useState("");
  const [telephone, setTelephone] = useState("");
  const [model, setModel] = useState("");
  const [error, setError] = useState(false);

  const onClickAdd = () => {
    if (
      telephone.length < 7 ||
      isNaN(Number(telephone)) ||
      firstName === "" ||
      !isNaN(Number(firstName)) ||
      lastName === "" ||
      !isNaN(Number(lastName)) ||
      carBrand === "" ||
      !isNaN(Number(carBrand)) ||
      model === "" ||
      email === "" ||
      !email.includes("@" || ".")
    ) {
      setError(true);

      if (telephone.length < 7 || isNaN(Number(telephone))) {
        telInput.current.className = styles.errorInput;
      }

      if (firstName === "" || !isNaN(Number(firstName))) {
        firstInput.current.className = styles.errorInput;
      }

      if (lastName === "" || !isNaN(Number(lastName))) {
        lastInput.current.className = styles.errorInput;
      }

      if (carBrand === "" || !isNaN(Number(carBrand))) {
        brandInput.current.className = styles.errorInput;
      }

      if (model === "") {
        modelInput.current.className = styles.errorInput;
      }

      if (email === "" || !email.includes("@" || ".")) {
        emailInput.current.className = styles.errorInput;
      }
    } else {
      let pilot: IPilot = {
        id: event[0].pilots.length,
        firstName: firstName,
        lastName: lastName,
        carBrand: carBrand,
        model: model,
        email: email,
        tel: telephone,
      };

      event[0].pilots.push(pilot);
      dispatch({ type: ACTIONS.ADD_PILOT, event });
      history.push("/");
    }
  };

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
          ref={firstInput}
        />
      </div>
      <div className={styles.input_container}>
        <h4 className={styles.input_title}>Last name</h4>
        <input
          className={styles.input}
          value={lastName}
          onChange={(event: ChangeEvent<HTMLInputElement>) => setLastName(event.target.value)}
          ref={lastInput}
        />
      </div>
      <div className={styles.input_container}>
        <h4 className={styles.input_title}>Car brand</h4>
        <input
          className={styles.input}
          value={carBrand}
          onChange={(event: ChangeEvent<HTMLInputElement>) => setCarBrand(event.target.value)}
          ref={brandInput}
        />
      </div>
      <div className={styles.input_container}>
        <h4 className={styles.input_title}>Car model</h4>
        <input
          className={styles.input}
          value={model}
          onChange={(event: ChangeEvent<HTMLInputElement>) => setModel(event.target.value)}
          ref={modelInput}
        />
      </div>
      <div className={styles.input_container}>
        <h4 className={styles.input_title}>Email</h4>
        <input
          className={styles.input}
          value={email}
          type="email"
          onChange={(event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
          ref={emailInput}
        />
      </div>
      <div className={styles.input_container}>
        <h4 className={styles.input_title}>Telephone</h4>
        <input
          className={styles.input}
          value={telephone}
          type="tel"
          maxLength={13}
          onChange={(event: ChangeEvent<HTMLInputElement>) => setTelephone(event.target.value)}
          ref={telInput}
        />
      </div>
      {error === true ? <p className={styles.err}>Wrong info</p> : null}
      <button className={styles.button} onClick={onClickAdd}>
        Sign up
      </button>
    </div>
  );
}
