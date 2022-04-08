import React from 'react';
import { Box, Boxes, BoxTitle, BoxText } from './AcomplishmentsStyles';

const data = [
  { title: 'Fayetteville, NC', text: '\'97-\'13'},
  { title: 'Columbia, SC', text: '\'13-\'18'},
  { title: 'Charleston, SC', text: '\'18-\'19'},
  { title: 'Atlanta, GA', text: '\'19-\'22'}
];

const Acomplishments = () => (
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxTitle>{card.title}</BoxTitle>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
);

export default Acomplishments;
