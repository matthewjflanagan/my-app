import React from 'react';
import { DiFirebase, DiNodejs, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technical Skills</SectionTitle>
    <SectionText>
      I have worked with a range of technologies in the from Back-End to Design with a focus on the MERN stack.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            HTML, CSS, Bootstrap, JavaScript, JQuery<br />
            React.js, Next.js, Handlebars
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiNodejs size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            APIs, Node.js, Express.js, <br />
            SQL, Sequalize, Mongo.db, GraphQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size="3rem" />
        <ListContainer>
          <ListTitle>Additional</ListTitle>
          <ListParagraph>
            Experience with tools like<br />
            Figma, Sanity.io, Groq <br />
            Heroku, Insomnia
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
