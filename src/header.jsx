import React, { Component } from 'react';
import './index';

export class Header extends Component {
    render() {
        return (
            < header >
                <div className='container'>
                    <div className='head'>
                        <div className='title'>
                            Songbird
                            </div>
                        <div class='score'>
                            Score: <div className="score_number">
                                {this.props.score}
                            </div>
                        </div>
                    </div>
                    <Questionlvl 
                    current = {this.props.current}
                    />
                </div>
            </header >
        )
    }
}

class Questionlvl extends Component {
    render() {
        const arrLvl = ['Разминка', 'Большие тицы', 'Лесные птицы', 'Певчие птицы', 'Хищные птицы', 'Морские птицы'];
        const arrquestion = arrLvl.map((question, index) =>{
                if (index === this.props.current){
                return <li className = 'current_lvl'>{question}</li>
                }
                else
            return <li>{question}</li>
        }
        );
        return (
            <div className='level'>
                <ol className='level_list'>
                    {arrquestion}
                </ol>
            </div>
        )
    }
}

export default Header