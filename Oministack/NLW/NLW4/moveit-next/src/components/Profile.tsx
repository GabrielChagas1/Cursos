import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';
import { ThemeContext } from '../contexts/ThemeContext';

// importando icons do react
import {MdWbSunny} from 'react-icons/md';
import {FaMoon} from 'react-icons/fa'


export function Profile(){

    const { toggleTheme, currentTheme } = useContext(ThemeContext);
    const { level } = useContext(ChallengesContext)

    return(
        <div className={styles.profileRow}>
            <div className={styles.profileContainer}>
                <img src="https://github.com/diego3g.png" alt="Foto do Usuário"/>
                <div>
                    <strong>Gabriel Chagas</strong>
                    <p>
                        <img src="icons/level.svg" alt="Level"/>
                        Level { level } 
                    </p>
                </div>
            </div>
                {currentTheme === 'theme-dark' ? <MdWbSunny onClick={toggleTheme} /> : <FaMoon color="#2E384D" onClick={toggleTheme} />}
        </div>
    )
}