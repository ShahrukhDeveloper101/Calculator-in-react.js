import styles from './InputBox.module.css'

function InputBox({value}) {
    return (
        <>
            <div className={styles.inputArea}>
                <input type="text" value={value} className={styles.inputBox} readOnly/>
            </div>
        </>
    )
}

export default InputBox
