import React, { Component } from 'react'
import birdData from './BirdsData.js'


class BirdsQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            birdAudio: '',
            song: null
        }
        this.corsUrl = 'https://cors-anywhere.herokuapp.com/';
        this.audioRef = React.createRef();
    }

    birdVoiceAudio = (birdName) => {
        const url = `https://www.xeno-canto.org/api/2/recordings?query=${birdName}`;
        this.birdVoiceData(url);
    }

    birdVoiceData = async (url) => {
        const data = await fetch(this.corsUrl + url).then((res) => res.json());
        this.setState({
            birdAudio: data.recordings[0].file,
        });
        console.log(data.recordings[0].file);
        return data.recordings[0].file;
    }

    componentDidMount() {
        this.birdVoiceAudio('Anser fabalis');
    }




    render() {
        return (
            <div className='question'>
                <div className="photo">
                    <img className='photo_bird' src={this.props.birdImg} alt='photo' height='150' width='200'></img>
                </div>
                <div className='listener'>
                    <div className='secret'>
                        {this.props.birdName}
                    </div>
                    <div className='player'>
                        <audio id="question_sound" controls="controls">
                            <source src={birdData[this.props.currentRound][this.props.randomNumber].song} type="audio/mpeg" />
                        </audio>
                    </div>
                </div>
            </div>
        )
    }
}

export default BirdsQuestion;