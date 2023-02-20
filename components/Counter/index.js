import { useState } from "react";
import styles from './counter.module.css'

export default function Button() {
    const [number, setNumber] = useState(0);

    return (
        <div className={styles.body}> 
            <button 
            type="button"
            className={styles.button.incrementButton}
            onClick={() => setNumber(number + 2)}>Increment by 2
            </button>
            
            <button 
            type="button"
            className={styles.button.decrementButton}
            onClick={() => setNumber(number - 2)}>Decrement by 2
            </button>

            {number}
        </div>
        
    )

}


