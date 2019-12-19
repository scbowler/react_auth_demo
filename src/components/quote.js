import React from 'react';
import { connect } from 'react-redux';
import { getMovieQuote } from '../actions';

class Quote extends React.Component {
    componentDidMount() {
        this.props.getMovieQuote();
    }

    render() {
        return (
            <div>
                <h1>Random Movie Quote</h1>

                <h3 className="center">{this.props.quote}</h3>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        quote: state.movie.quote
    }
}

export default connect(mapStateToProps, {
    getMovieQuote: getMovieQuote
})(Quote);
