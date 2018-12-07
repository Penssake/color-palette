import React, {Component} from 'react'

class Button extends Component {
    constructor(props) {
        super(props)
        this.state = { colorState: null, individualView: false}

        this.clickHandler = this.clickHandler.bind(this)
}

clickHandler(e) {
    return superagent
    .get(process.env.__API_URL__/colors/random/)
    .then(response => {
        this.setState({
            colorState: response.body,
            individualView: true,
          })
    })
    .catch(err => console.log(err))
}
render() {
    return (
        <button
            className="btn"
            onClick={this.clickHandler}>Random Color</button>
    )}
}

export default Button
