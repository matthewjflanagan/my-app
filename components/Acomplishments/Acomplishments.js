import React from 'react';
import { Box, Boxes, BoxTitle, BoxText } from './AcomplishmentsStyles';

const data = [
  { title: 'Fayetteville, NC', text: 'Cypress Lakes Golf Course: Golf Cart Attendent'},
  { title: 'Columbia, SC', text: 'Aberdeen Catery: Server/Bartender'},
  { title: 'Charleston, SC', text: 'CaroTrans International: Documentation Specialist'},
  { title: 'Atlanta, GA', text: 'CaroTrans International: Account Executive'}
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
