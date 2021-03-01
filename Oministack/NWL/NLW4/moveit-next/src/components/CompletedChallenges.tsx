import { ChallengesContext } from '../contexts/ChallengesContext';
import { useContext } from 'react';

import styles from '../styles/components/CompletedChallenges.module.css';

export function CompletedChallenges(){

    // recuperando o total de challenges completados usando o context
    const { challengesCompleted } = useContext(ChallengesContext);


    return(
        <div className={styles.challengesContainer}>
            <span>Desafios Completos</span>
            <span>{challengesCompleted}</span>
        </div>
    )
}