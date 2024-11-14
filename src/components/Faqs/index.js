import React, {Component} from 'react'
import './index.css'
import FaqItem from '../FaqItem'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props

    return (
      <div className="faqs-container">
        <h1 className="faqs-heading">FAQs</h1>
        <ul className="faqs-list">
          {faqsList.map(faq => (
            <FaqItem key={faq.id} faq={faq} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Faqs
