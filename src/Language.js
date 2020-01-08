import React, {Component} from 'react';

class Language extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="langSection">

                <div className="row">
                    <img className="langFlag" src={process.env.PUBLIC_URL + '/assets/' + this.props.data.lanId + '.png'} />
                </div>
                <div className="row">
                    Total Words {this.props.data.totalWords}
                </div>


                <div className="row">
                    Due {this.props.data.dueCount}
                </div>

                <div className="row">
                    Total Avg Due {this.props.data.avgDue}
                </div>

                <div className="row">
                    Satistics {this.props.data.totalStats}
                </div>

                <div className="row">
                    Translated To {this.props.data.lvlsCount}
                </div>


            </section>
        );
    }
}

export default Language;


