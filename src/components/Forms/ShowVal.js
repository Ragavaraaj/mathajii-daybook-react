import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter ,Table } from 'reactstrap';
import { connect } from 'react-redux';

const TableRow = (props) => {
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.data}</td>
        </tr>
    )
}

// const TableRows = (props) => {
//     const keys = Object.keys(props.data)
// }

const ShowVal = (props) => {

    let moredata = null
    let newdate = new Date()
    let project = null

    if(props.data.moredata)
        moredata = <TableRow name="Details" data={props.data.moredata} />
    
    if(props.data.project)
        project = <TableRow name="Project" data={props.data.project} />

    return (
      <div>
        <Modal isOpen={props.show} toggle={props.toggle} className={props.className} centered={true}>
        <ModalHeader>Check your entered data</ModalHeader>
            <ModalBody>
                <Table borderless>
                    <tbody>
                        <TableRow name="Date" data={props.data.date !== null ? props.data.date : newdate} />
                        {project}
                        <TableRow name="Particulars" data={props.data.particulars} />
                        <TableRow name="Amount" data={props.data.amount} />
                        {moredata}
                    </tbody>
                </Table>
            </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={props.toggle} block outline>Cancel</Button>
            <Button color="success" onClick={null} block outline>Submit</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
}

const mapStateToProps = state => {
    return {
        data : state.data
    }
}

export default connect(mapStateToProps)(ShowVal);
