import { useContext } from 'react';
import styles from '../styles/components/ChallengeBox.module.css';
import { ChallengesContext } from '../contexts/ChallengesContext';

export function ChallengeBox(){

    const {activeChallenge, resetChallenge, completedChallenge} = useContext(ChallengesContext);

    return (
        <div className={styles.challengeBoxContainer}>
            { activeChallenge ? (
                    <div className={styles.challengeActive}>
                        <header>Ganhe {activeChallenge.amount} xp</header>

                        <main>
                            <img src={`icons/${activeChallenge.type}.svg`} alt="Body SVG"/>
                            <strong>Novo desafio</strong>
                            <p>{activeChallenge.description}</p>
                        </main>

                        <footer>
                            <button type="button" className={styles.challengeFailedButton} onClick={resetChallenge}>Falhei</button>
                            <button type="button" className={styles.challengeSucceededButton} onClick={completedChallenge}>Completei</button>
                        </footer>

                    </div>
                ) : (
                    <div className={styles.challengeNotActive}>
                        <strong>Finalize um ciclo para receber um desafio</strong>
                        <p>
                            <img src="icons/level-up.svg" alt="level up" />
                            Complete-os e ganhe experiência e avance de leve.
                        </p>
                    </div> 
                )

            }
            
        </div>
    )
}