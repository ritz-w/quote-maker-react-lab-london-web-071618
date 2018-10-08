import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addQuote, removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes';
import QuoteCard from '../components/QuoteCard';

class Quotes extends Component {


  render() {
    let quotes = this.props.quoteInfo.quotes.map(quote => <QuoteCard quote={quote} upvote={this.props.upvoteQuote}/>)

    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {
                quotes
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    quoteInfo: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addQuote: (quote) => {
      dispatch(addQuote(quote))
    },
    removeQuote: (quoteId) => {
      dispatch(removeQuote(quoteId))
    },
    upvoteQuote: (quoteId) => {
      dispatch(upvoteQuote(quoteId))
    },
    downvoteQuote: (quoteId) => {
      dispatch(downvoteQuote(quoteId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
