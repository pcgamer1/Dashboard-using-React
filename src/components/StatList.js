import React from 'react' 
import { connect } from 'react-redux'
import { fetchStats } from '../actions'
import CardCustom from './CardCustom'
import { Row, Col } from 'react-bootstrap'

class StatList extends React.Component {

    componentDidMount() {
        this.props.fetchStats()
    }    

    render() {
        if(this.props.stats) {
        return (
            <>
            <Row>
                <Col lg={3}>
                    <CardCustom  color='pink' tcolor='dark' header='Total Revenue' text={this.props.stats.totalRevenue} />
                </Col>
                <Col lg={3}>
                    <CardCustom  color='pink' tcolor='dark' header="Today's Sales" text={this.props.stats.todaysSales} />
                </Col>
                <Col lg={3}>
                    <CardCustom  color='pink' tcolor='dark' header='Conversion' text={this.props.stats.conversion} />
                </Col>
                <Col lg={3}>
                    <CardCustom  color='pink' tcolor='dark' header="Today's Visits" text={this.props.stats.todaysVisits} />
                </Col>
            </Row>
            </>
        )
        }
        else return <div></div>
    }
}

const mapStateToProps = (state) => {
    return {stats: state.stats.dataForTopFourBoxes}
}

export default connect(mapStateToProps, { fetchStats } )(StatList)