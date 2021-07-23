import React from 'react';
import './Preloader.css';

const Preloader = ({ preloaderActive }) => {
  return (
    <div className={`lds-ellipsis ${preloaderActive ? '' : 'preloader_hidden'}`}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Preloader;
