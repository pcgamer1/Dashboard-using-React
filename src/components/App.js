import React from 'react'
import '../main.css'
import { Row, Col, Container } from 'react-bootstrap'

import NavMain from './NavMain'
// import SideBar from './SideBar'
import StatList from './StatList'
import Chart1 from './Chart1'
import Chart2 from './Chart2'
class App extends React.Component {

    state = {sidebarOpen: false}

    render() {
      return (
        <>
          {/* <SideBar /> */}
          <NavMain />
          <Row>
            <Col md={2}></Col>
            <Col md={10} style={{marginTop: "30px"}}>
              <Container>
              <StatList />
              <Row style={{marginTop: "10px"}}>
                <Col md={6}>
                  <Chart1 />
                </Col>
                <Col md={6}>
                  <Chart2 />
                </Col>
              </Row>
              </Container>
              
            </Col>
          </Row>
        </>
      )
    }
}

export default App
