import styled from 'styled-components'
import db from '../db.json';

// importando o componente widget
import {Widget} from '../src/components/Widget'

// importando o componente footer
import {Footer} from '../src/components/Footer'

// importando o componente GitHubCorner
import {GitHubCorner} from '../src/components/GitHubCorner'

// importando o componente QuizBackground
import {QuizBackground} from '../src/components/QuizBackground'

// importando o componente QuizLogo
import {QuizLogo} from '../src/components/QuizLogo'


const BackgroundImage = styled.div`
  background-image: url(${db.bg});
  flex: 1;
  background-size: cover;
  background-position: center;
`;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;

  @media screen and (max-width: 500px){
    margin: auto;
    padding: 15px;
  }

`;


export default function Home() {
  return (
    <BackgroundImage>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>the Legend of zelda</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Lorem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>
        <Widget>
         <Widget.Header>
          <h1>Quizes da Galera</h1>
         </Widget.Header>

         <Widget.Content>
          <p>Lorem ipsum dolor sit amet...</p>
         </Widget.Content>

        </Widget>
      </QuizContainer>
    </BackgroundImage>
  );
}
