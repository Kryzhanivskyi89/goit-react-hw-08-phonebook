import style from './HomePage.module.css';



export default function Home() {
  return (
    <div className={style.container}>
      <h1 className={style.title}>
        Welcome to contacts book {' '}
        {/* <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span> */}
      </h1>
    </div>
  );
}