import {createContext, ReactNode, useState} from 'react';

import challenges from  '../../challenges.json'; 
import { CompletedChallenges } from '../components/CompletedChallenges';

interface ChallengesProviderProps{
    children: ReactNode
}

// interface para os challenge
interface Challenge{
    type: 'body' | 'eye';
    description: string;
    amount: number
}

// interface para os challenges data
interface ChallengesContextData{
    level: number;
    currentExperience: number;  
    challengesCompleted: number;
    activeChallenge: Challenge;
    experienceToNextLevel: number; 
    levelUp: () => void;
    startNewChallenge: () => void;
    resetChallenge: () => void;
    completedChallenge: () => void;
}

// exportando o context para recuperar valores de outros componentes
export const ChallengesContext = createContext({} as ChallengesContextData);


export function ChallengesProvider({ children }: ChallengesProviderProps){
    
    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0); 
    const [challengesCompleted, setchallengesCompleted] = useState(0);
    const [activeChallenge, setActiveChallenge] = useState(null);

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

    // function para subir o level do usuário
    function levelUp(){
        setLevel(level + 1 );
    }

    // Função para recuperar um novo challenge
    function startNewChallenge(){
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengeIndex];
        setActiveChallenge(challenge);
    }   

    // função para resertar o challenge
    function resetChallenge(){
        setActiveChallenge(null);
    }

    // função para quando um challenge for completado
    function completedChallenge(){
        if(!activeChallenge) return

        const {amount} = activeChallenge;

        let finalExperience = currentExperience + amount;

        if(finalExperience >= experienceToNextLevel){
            finalExperience = finalExperience - experienceToNextLevel;
            levelUp();
        }

        setCurrentExperience(finalExperience);
        setActiveChallenge(null);
        setchallengesCompleted(challengesCompleted + 1);
    }


    // retornandos as variáveis para outros components terem acessos.
    return (
        <ChallengesContext.Provider 
        value={{
            level,
            levelUp, 
            currentExperience, 
            challengesCompleted,
            startNewChallenge,
            activeChallenge,
            resetChallenge,
            experienceToNextLevel,
            completedChallenge
            }}>
            {children}
        </ChallengesContext.Provider> 
    )
}