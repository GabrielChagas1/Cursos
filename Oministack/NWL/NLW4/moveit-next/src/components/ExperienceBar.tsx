import { ChallengesContext } from '../contexts/ChallengesContext';
import { useContext } from 'react';

import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar(){

    // recuperando o xp que o usuário tem e o xp total para ele passar de level
    const { currentExperience, experienceToNextLevel} = useContext(ChallengesContext);

    // calculando a porcentagem que o xp do user etá de alcançar a meta
    const percentToNextLevel = Math.round((currentExperience * 100)) / experienceToNextLevel;

    return (
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{ width: `${percentToNextLevel}%` }} />
                <span className={styles.currentExperience} style={{left: `${percentToNextLevel}%`}}>
                    {currentExperience} xp
                </span>
            </div>
            <span>{experienceToNextLevel } xp</span>
        </header>
    )
}