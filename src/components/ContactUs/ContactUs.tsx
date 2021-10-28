import style from "./ContactUs.module.css";

export function ContactUs() {
  return (
    <>
      <div className={style.wrap}>
        <h3 className={style.title}>Our contacts</h3>
        <div className={style.container}>
          <div className={style.smallContainer}>
            <div className={style.smallContainer}>
              <h3 className={style.subtitle}>Training track:</h3>
              <p className={style.text}>Test site for mobile machines "Lipki"</p>{" "}
            </div>
            <div className={style.smallContainer}>
              <h3 className={style.subtitle}>Email:</h3>
              <a className={style.text} href="mailto:hormard@mail.ru">
                hormard@mail.ru
              </a>
            </div>
          </div>

          <div className={style.smallContainer}>
            <div className={style.smallContainer}>
              <h3 className={style.subtitle}>Telephone:</h3>
              <a className={style.text} href="tel:+375297532444">
                +375297532444
              </a>
              <a className={style.text} href="tel:+375297532444">
                +375336657803
              </a>
            </div>
            <div className={style.smallContainer}>
              <h3 className={style.subtitle}>Social network:</h3>
              <a className={style.link} href="https://vk.com/id144543023">
                vk.com/id144543023
              </a>
              <a className={style.link} href="https://www.instagram.com/evgeeeeeen_/">
                instagram.com/evgeeeeeen_
              </a>
              <a className={style.link} href="https://github.com/Hormard">
                github.com/Hormard
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
