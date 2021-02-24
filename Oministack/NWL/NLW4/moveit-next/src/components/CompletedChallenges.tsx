import styles from '../styles/components/CompletedChallenges.module.css';

export function CompletedChallenges(){
    return(
        <div className={styles.challengesContainer}>
            <span>Desafios Completos</span>
            <span>00</span>
        </div>
    )
}