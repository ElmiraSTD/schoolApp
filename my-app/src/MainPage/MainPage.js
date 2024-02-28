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


const MainPage = () => {
    return (
        <div className="MainPage">

            <div className='main_text_block'>
                <h2 className='main_title'>Занимайтесь с удовольствием и достигайте новых вершин следующие 2 месяца и всю жизнь</h2>
                <p>KidsBe — это комплексная программа, помогающая получить положительные результаты сразу в нескольких сферах</p>
            </div>
            <div className='main_block'>

                {/* 1 block */}
                <div className='block'>
                    <img src={BrainImage} alt='Brain' />
                    <p className='main_text'>Равномерное развитие обоих полушарий
                        мозга и межполушарных связей</p>
                </div>

                <div className='block'>
                    <img src={BrainImage1} alt='Brain' />
                    <p className='main_text'>Укрепление памяти и внимание</p>
                </div>

                <div className='block'>
                    <img src={BabyImage} alt='Baby' />
                    <p className='main_text'>Развитие мышления
                        и познавательного интереса</p>
                </div>

                {/* 2 block */}

                <div className='block'>
                    <img src={origami} alt='Origami' />
                    <p className='main_text'>Раскрытие творческих
                        способностей</p>
                </div>

                <div className='block'>
                    <img src={moms} alt='Moms' />
                    <p className='main_text'>Налаживание эмоциональных
                        связей с родителями</p>
                </div>

                <div className='block'>
                    <img src={climb} alt='Climb' />
                    <p className='main_text'>Повышение
                        самостоятельности</p>
                </div>

            </div>
        </div>
    );
}

export default MainPage;
