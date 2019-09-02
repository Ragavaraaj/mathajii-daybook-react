import React from 'react'
import { Container , Row  } from 'reactstrap'
import Fade from 'react-reveal/Fade'
import WPTable from '../../components/DataTable/WPTable';
class DayBookContainer extends React.Component {

    render() {
        return (
                <Fade>
                    <Container className="mt-3" fluid>
                        <Row>
                           <WPTable /> 
                        </Row>
                    </Container>
                </Fade>
        )
    }
}

export default DayBookContainer
