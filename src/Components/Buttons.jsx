import styles from './Buttons.module.css';

function Buttons({ buttonsArray, onButtonClick }) {
  return (
    <>
      {buttonsArray.map((btn, index) => (
        <div className="col-3 text-center" key={index}>
          <button className={`${styles.btn} ${styles[btn.className]}`} onClick={() => onButtonClick(btn.label)}>{btn.label}</button>
        </div>
      ))}
    </>
  );
}

export default Buttons;
