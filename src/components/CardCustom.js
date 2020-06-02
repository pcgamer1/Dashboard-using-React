import React from 'react' 
import {Card} from 'react-bootstrap'

class CardCustom extends React.Component {
    render() {
        console.log(this.props.color)
        return (
            // <div>
                <Card
                    bg={this.props.color}
                    text={this.props.tcolor}
                    style={{ width: '16rem'}}
                    >
                {/* <Card.Header>{this.props.header}</Card.Header> */}
                    <Card.Body style={{boxShadow: "3px 3px 5px rgba(0, 0, 0, 0.2)"}}>
                        <Card.Title> {this.props.text} </Card.Title>
                        <Card.Text> {this.props.header} </Card.Text>
                    </Card.Body>
                </Card>
            // </div>
            
        )
    }
}

export default CardCustom