import React, {Component} from 'react'

class ClickityClick extends Component {
    state={
        toggled: false
    }

    handleClick = () => {
        this.setState(previousState => {
            return {toggled: !previousState.toggled}
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>{this.state.toggled ? 'ON' : 'OFF'}</button>
            </div>
        )
    }
}

export default ClickityClick