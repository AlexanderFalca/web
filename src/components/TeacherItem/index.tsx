import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars1.githubusercontent.com/u/8227089?s=460&u=08fd700d2f6d2bd1a17ed6f7aecef707a8ae7e1d&v=4"
          alt="Alexander do Nasciemtno Falca"
        />
        <div>
          <strong>Alexander do Nascimento Falca</strong>
          <span>Pedagogia</span>
        </div>
      </header>
      <p>
        askjfhskjafhjksdahfkjsdahfkjlsdahfkljsdahflkjhasdkfjsahsfkj
        <br />
        <br />
        askjfhskja fhjksdahfkjsd ahfkjlsdahfk ljsdahflkjh a sdk fjsahsfkjas k j
        fhsk jafhjksdahfkjsd a hfkjlsd ahfkljsd ahflkj hasdkf jsahsfkj askj f h
        s kjaf hjksda
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ 100,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
