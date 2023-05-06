import style from './HomePage.module.css';


export default function Home() {
  return (
    <div className={style.container}>
      <h1 className={style.title}>
        Contacts Book welcome page{' '}
        {/* <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span> */}
      </h1>
    </div>
  );
}