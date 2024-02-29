import React from 'react';
import "./MainPage.css"
// Block 1
import BrainImage from "../img/Brains2.png";
import BrainImage1 from "../img/Brain22.png"
import BabyImage from "../img/baby21.png";

// Block 2
import origami from "../img/Orig.png";
import moms from "../img/moms.png";
import climb from "../img/climb.png"

// group image
import app from '../img/app.png';
import video from '../img/video.png';
import HappyKids from '../img/happyKids.png';


const MainPage = () => {
    return (
        <div className="MainPage">

            <div className='main_text_block'>
                <h2 className='main_title'>Занимайтесь с удовольствием и достигайте новых вершин<br /> следующие 2 месяца и всю жизнь</h2>
                <p className='main_text'>KidsBe — это комплексная программа, помогающая получить положительные результаты сразу в нескольких сферах</p>
            </div>

            <div className='main_block'>
                {/* 1 block */}
                <div className='block'>
                    <img src={BrainImage} alt='Brain' />
                    <p className='main_text'>Равномерное развитие обоих полушарий<br />
                        мозга и межполушарных связей</p>
                </div>

                <div className='block'>
                    <img src={BrainImage1} alt='Brain' />
                    <p className='main_text'>Укрепление памяти и<br /> внимание</p>
                </div>

                <div className='block'>
                    <img src={BabyImage} alt='Baby' />
                    <p className='main_text'>Развитие мышления<br />
                        и познавательного интереса</p>
                </div>
            </div>

            {/* 2 block */}
            <div className='main_block'>
                <div className='block'>
                    <img src={origami} alt='Origami' />
                    <p className='main_text'>Раскрытие творческих<br />
                        способностей</p>
                </div>

                <div className='block'>
                    <img src={moms} alt='Moms' />
                    <p className='main_text'>Налаживание эмоциональных<br />
                        связей с родителями</p>
                </div>

                <div className='block'>
                    <img src={climb} alt='Climb' />
                    <p className='main_text'>Повышение<br />
                        самостоятельности</p>
                </div>
            </div>

            <div className='SecondPage'>
                <div className='SecondPageRight'>
                    <h2 className='SecondPage_title'>
                        Гармония традиционных методик<br />
                        и новейших возможностей педагогики
                    </h2>

                    <p className='main_text'>
                        Практическое пособие KidsBe совмещает офлайн и онлайн-занятия. Ребенок привыкает учиться в нескольких форматах:
                    </p>

                    <div className='group_main'>

                        <div className='group'>
                            <img src={video} alt='book png' />
                            <p>
                                Читать и писать с помощью< br /> красивых книг, прописей,< br />  карточек
                            </p>
                        </div>

                        <div className='group'>
                            <img src={app} alt='app png' />
                            <p>
                                Слушать, запоминать< br />
                                и играть в мобильном< br />
                                приложении
                            </p>
                        </div>

                    </div>
                    <p>
                        Разные варианты работы поддерживают интерес ребенка к занятиям и взаимно усиливают друг друга, что помогает учиться без скуки и развиваться гармонично.
                    </p>

                </div>

                <img src={HappyKids} alt='HappyKids' />
            </div>



        </div>
    );
}

export default MainPage;
