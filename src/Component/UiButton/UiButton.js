// import styled from 'styled-components';
// with styled component i do not need to selector i need & for sudo selectors
// and styled is object have all method of html tags you do not need import react
// it is not react component it can applied for every button and it generate classes
//for every buttonn
// const Button = styled.button`
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;

//   @media (min-width: 768px) {
//     width: auto;
//   }
  
//   &:focus {
//     outline: none;
//   }
//   &:hover,
//   &:active {
//     background: #ac0e77;
//     border-color: #ac0e77;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }
// `;

// export default Button;
import React from 'react';
import styles from './UiButton.module.css';
const Button = props => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;