// Write your React code here.
import './index.css'

import {Component} from 'react'

class Feedback extends Component {
  state = {isEmojiClicked: false}

  onClickChange = () => {
    this.setState({isEmojiClicked: true})
  }

  render() {
    const {isEmojiClicked} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources

    return (
      <div className="bg-container">
        <div className="feedback-card">
          {isEmojiClicked ? (
            <div className="love-card-container">
              <img src={loveEmojiUrl} className="love-emoji" alt="love emoji" />
              <h1 className="heading">Thank You!</h1>
              <p className="para">
                We will use your feedback to improve our customer support
                performance
              </p>
            </div>
          ) : (
            <div className="emojis-card-container">
              <h1 className="heading">
                How satisfied are you with our customer support performance?
              </h1>

              <ul className="emojis-list">
                {emojis.map(emoji => (
                  <li key={emoji.id}>
                    <button
                      type="button"
                      className="emoji-btn"
                      onClick={this.onClickChange}
                    >
                      <img
                        src={emoji.imageUrl}
                        alt={emoji.name}
                        className="emoji"
                      />
                      <br />
                      <span className="emoji-name">{emoji.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Feedback
