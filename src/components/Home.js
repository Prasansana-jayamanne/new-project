import React, { Component } from 'react'
import firebase from '../configurations/fbconfig'
import { Button, Form } from 'react-bootstrap';

const db = firebase.firestore();

// db.collection('contacts').get().then(data => {
//     data.docs.forEach(doc => {
//         console.log(doc.data());

//     })

// })


class Home extends Component {

    state = {
        contactsData: [],
        Firstname:'',
        Lastname: '',
        Telephone:'',
    }

    componentDidMount() {
        db.collection('contacts').get().then(data => {
            data.docs.forEach(doc => {
                this.setState({
                    contactsData: [...this.state.contactsData, doc.data()]

                })

                // console.log('Home', doc.data());

            })

        })

    }
    handlechange = (e) => {
        this.setState({
            [e.target.name]: e.target.value

        })

    }
    submitdata = (e) =>{
        e.preventDefault();

        console.log(
            this.state.Firstname,
            this.state.Lastname,
            this.state.Telephone

        )
        db.collection('contacts') .add({
            Firstname : this.state.Firstname, 
            Lastname : this.state.Lastname,
            Telephone : this.state.Telephone 
        })
    }

    


    render() {
        return (
            <div>
                <h3>Contact Information</h3>
                {this.state.contactsData.length ? (
                    this.state.contactsData.map(item => {
                        return (
                            <div>
                                <p>{item.Firstname}</p>
                                <p>{item.Lastname}</p>
                                <p>{item.Telephone}</p>
                                <hr />

                            </div>
                        )
                    })
                ) : (
                        <p>loading</p>

                    )}
                <div>
                    <h1>Registration Form</h1>
                    <br />
                    <div className="App" style={{width:"400px"}}>
                    <Form onSubmit={this.submitdata}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>First name</Form.Label>
                            <Form.Control type="text" name="Firstname" placeholder="first name" onChange={this.handlechange} />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Lastname </Form.Label>
                            <Form.Control type="text" name="Lastname" placeholder="Last name" onChange={this.handlechange}/>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Telephone</Form.Label>
                            <Form.Control type="text" name="Telephone" placeholder="Telephone" onChange={this.handlechange} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>

                    </div>
                    

                </div>
            </div>
        )
    }
}

export default Home
