import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';
import { ThemeContext } from '../contexts/ThemeContext';
import styles from '../styles/components/Countdown.module.css';

export function Countdown(){

    const {currentTheme} = useContext(ThemeContext);

    const {
        minutes, 
        seconds, 
        hasFinished, 
        isActive, 
        startCountdown, 
        resetCountdown 
    } = useContext(CountdownContext) 

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    return (
       <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
                
            </div>

            {/* { hasFinished && (
                <button 
                disabled
                className={styles.startCountdownButton}
                >
                    Ciclo Encerrado 
                </button>
            )} */}

            { hasFinished ? (
                <button 
                disabled
                className={styles.countdownButton}
                >
                    Ciclo Encerrado 
                    <img src="/icons/check.svg" alt="check svg" />

                </button>
            ) : (
                <>
                    { !isActive ? (

                        currentTheme === 'theme-dark' ?
                    
                        <button 
                        type="button" 
                        className={`${styles.countdownButton} ${styles.countdownButtonDark}`}
                        onClick={startCountdown}
                        >
                            Iniciar um ciclo
                            <img src="/icons/clock.svg" alt="clock svg"/>
                        </button>

                        :

                        <button 
                        type="button" 
                        className={styles.countdownButton}
                        onClick={startCountdown}
                        >
                            Iniciar um ciclo
                            <img src="/icons/clock.svg" alt="clock svg"/>
                        </button>


                        ) : (
                            <button 
                            type="button" 
                            className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                            onClick={resetCountdown}
                            >
                                Abandonar um ciclo
                                <img src="/icons/clock.svg" alt="clock svg"/>
                            </button>
                        )
                    }
                </>
            )}
       </div>
    )
}