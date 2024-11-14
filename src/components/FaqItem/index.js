import React, {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
    }
  }

  toggleAnswer = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }))
  }

  render() {
    const {faq} = this.props
    const {questionText, answerText} = faq
    const {isOpen} = this.state

    return (
      <li className="faq-item">
        <div className="faq-question-container">
          {/* Updated to use an h1 element for the question */}
          <h1 className="faq-question">{questionText}</h1>
          <button className="toggle-button" onClick={this.toggleAnswer}>
            <img
              src={
                isOpen
                  ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
              }
              alt={isOpen ? 'minus' : 'plus'}
              className="toggle-icon"
            />
          </button>
        </div>
        {isOpen && <p className="faq-answer">{answerText}</p>}
      </li>
    )
  }
}

export default FaqItem
