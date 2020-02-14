import React, { Component } from 'react'

class BirdList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trueAnswer: false,
            birdInformation: null,
            score: 5,
        }
    }


    isCorrectBird = (birdInformation, e) => {
        if (e.target.tagName !== 'LI') return;
        this.setState({
            birdInformation: birdInformation,
        });
        if (document.querySelector('.true')) {
            this.setState({
                trueAnswer: true,
            });
            return;
        };
        if (birdInformation.name === this.props.birdsData[this.props.currentRound][this.props.randomNumb].name) {
            console.log(this.props.randomNumb);
            e.target.classList.add("true");
            this.props.birdNameAndImg(birdInformation);
            this.props.changeScore(this.state.score);
            document.querySelector('.footer').classList.add('active_nextLvl')
            this.setState({
                trueAnswer: true,
                score: 5,
            });
        } else {
            if (e.target.classList.contains("error")) return;
            e.target.classList.add("error");
            this.setState({
                score: this.state.score - 1,
            });
        }
    }

    nextLvl = () => {
        if (!this.state.trueAnswer) return;
        document.querySelectorAll('.bird_list').forEach((elem) => {
            elem.classList.remove('error')
            elem.classList.remove('true')
        })
        this.setState({
            birdInformation: null,
        })
        this.props.currentLvl(this.props.fun)
        document.querySelector('.footer').classList.remove('active_nextLvl')
        this.props.birdNameAndImg(null)
        this.setState({
            trueAnswer: false,
        })
    }


    render() {
        const birdsData = this.props.birdsData;
        const list = birdsData[this.props.currentRound].map(birdInfo => {
            return <li className='bird_list' key={birdInfo.id} onClick={this.isCorrectBird.bind(this, birdInfo)}>{birdInfo.name}</li>
        });
        return (
            <div>
                <div className='info_answer'>
                    <div className='answer'>
                        <ol className='all_answer'>
                            {list}
                        </ol>
                    </div>
                    <Information
                        birdInf={this.state.birdInformation}
                    />
                </div>
                <button onClick={this.nextLvl} className="footer">
                    <span>Next Level</span>
                </button>
            </div>
        )
    }
}


class Information extends Component {
    render() {
        console.log(this.props.birdInf, !this.props.birdInf, document.querySelector('.true'), document.querySelector('.error'))
        if (!this.props.birdInf) {
            return (
                <div className='information' >
                    <div className='img_information'>
                        <div className='answer_photo'>
                            <span>Photo</span>
                        </div>
                        <div className='name_information'>
                            <div className='name'>*********</div>
                            <div className='answer_sound'>
                                <audio controls='control'>
                                    <source/>
                                </audio>
                            </div>
                        </div>
                    </div>
                    <div className='answer_information'>'Birds information'</div>
                </div>
            )
        } else {
            return (
                <div className='information'>
                    <div className='img_information'>
                        <div className='answer_photo'>
                            <img className='answer_photo' src={this.props.birdInf.img}></img>
                        </div>
                        <div className='name_information'>
                            <div className='name'>{this.props.birdInf.name}</div>
                            <div className='lat'>(lat. - {this.props.birdInf.special})</div>
                            <div className='answer_sound'>
                                <audio controls='control'>
                                    <source src = {this.props.birdInf.song} />
                                </audio>
                            </div>
                        </div>
                    </div>
                    <div className='answer_information'>{this.props.birdInf.info}</div>
                </div>
            )
        }
    }
}

export default BirdList;