import React from 'react';
import { Box, Boxes, BoxTitle, BoxText } from './AcomplishmentsStyles';

const data = [
  { title: 'Fayetteville, NC', text: '\'11 - \'13: Cypress Lakes Golf Course: Golf Cart Attendent'},
  { title: 'Columbia, SC', text: '\'15 - \'18: Aberdeen Catery: Server/Bartender'},
  { title: 'Charleston, SC', text: '\'18 - \'19: CaroTrans International: Documentation Specialist'},
  { title: 'Atlanta, GA', text: '\'19 - \'22: CaroTrans International: Account Executive'}
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
