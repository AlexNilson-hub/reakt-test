import React, {useState} from 'react';
import {generateExports} from '../utils/functions'
import {Button} from '../components/buttons/Button'
import {Person} from "./date/Person";
import Logo from "../logo.svg"
import Zakat from "../Images/zakat.png"
import Item from "./Items/Item";


// import  {Img} from 'react-image'

const news = [
    {
        title: 'Название News',
        name: 'Имя News',
        images: ['https://images.unsplash.com/photo-1551963831-b3b1ca40c98e', 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d', `${Logo}`, `${Zakat}`],
        links: ['https://lenta.ru/', 'https://rg.ru/news.html'],
        partners: [{
            title: 'Партнеры проекта 1',
            site: 'https://ru.wikipedia.org/wiki/site',
            keywords: 'Мы партнеры 1',
        },
            {
                title: 'Партнеры проекта 2',
                site: 'https://ru.wikipedia.org/wiki/site',
                keywords: 'Мы партнеры 2',
            }]
    },
];

const keywords = news[0].partners[1].keywords;
console.log(keywords)
const images = news[0].images[1];
console.log(images)

const texts = ['A', 'B', 'C']



const Main = ({propsButton, maxNum}) => {
    const [buttonText, setButtonText] = useState(propsButton)
    const [buttonStyle, setButtonStyle] = useState('')
    const [generate, setGenerate] = useState(generateExports(maxNum))
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(() => count + 1)
    }
    const countReset = () => {
        setCount(0)
    }

    const onButtonClick = () => {
        setButtonText(`Спасибо: ${Math.random()}`)
        setButtonStyle('green-btn')
    }
    const onGenerateClick = () => {
        setGenerate(generateExports(maxNum))
    }

    return (
        <div>
            <p>Заголовок для массивов</p>
            <button className={buttonStyle} onClick={onButtonClick} >{buttonText}</button>
            <h1>{generate}</h1>
            <button onClick={onGenerateClick} >{buttonText}</button>
            {texts.map((text, index) =>
                <Button key={index} onClick={onGenerateClick} text={text}/>
            )}
            {news.map((n, index) => {
                return <Person key={index} {...n} />
            })}
            <h3>{count}</h3>
            <button onClick={increment}>Click Incr</button>
            <div>
                { count > 0 && (
                    <button onClick={countReset}>Reset</button>
                )}
            </div>
           <Item/>

        </div>
    );
};

export default Main;
