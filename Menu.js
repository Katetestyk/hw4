import React from 'react';
import styled from 'styled-components';
import dbMenu from './DBMenu';
import { ListItem } from './ListItem';
import ImgBanner from '../img/banner.png';



const MenuStyled = styled.main`
      background-color: #ccc;
      margin-top: 80px;
`;
const SectionMenu = styled.section`
   padding: 30px;
`;


 export const Menu = () => (
     <MenuStyled>
         <div>
           <img src={ImgBanner} alt="баннер"/>
           
         </div>
         <SectionMenu>
             <h2>Бургеры</h2>
             <ListItem itemList={dbMenu.burger}/>
         </SectionMenu>
         <SectionMenu>
             <h2>Закуски  / Напитки</h2>
             <ListItem itemList = {dbMenu.other}/>
         </SectionMenu>
     </MenuStyled>
 );