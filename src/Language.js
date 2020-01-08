import React, {Component} from 'react';

class Language extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="langSection">

                <div className="card">
                    <div className="card-body">


                        <div className="row">
                            <img className="langFlag"
                                 src={process.env.PUBLIC_URL + '/assets/' + this.props.data.lanId + '.png'}/>
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

                        <div className="row">

                            <table className="table table-bordered table-striped">
                                <thead>
                                <tr>
                                    <th>Set</th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.props.data.sets.map((set) => {
                                    return (<tr key={set.setId}>
                                        <td>{set.title}</td>
                                    </tr>)
                                })}
                                </tbody>
                            </table>


                        </div>
                    </div>
                </div>

            </section>
        );
    }
}

export default Language;


