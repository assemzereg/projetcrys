import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
class Forms extends Component {
  canBeSubmitted() {
    const { fname, lname, course, email } = this.state
    return (
      fname.length > 0 &&
      lname.length > 0 &&
      course.length > 0 &&
      email.length > 0
    )
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  addcertificate = (event) => {
    event.preventDefault()
    this.props.addcertificate(this.state)
    //console.log(this);
  }

  state = {
    fname: '',
    lname: '',
    course: '',
    email: '',
  }
  render() {
    const isEnabled = this.canBeSubmitted()
    return (
      <div
        className="container-fluid "
        style={{
          height: '100vh%',
          //backgroundImage: `url(${b1})`,
          // background: `url(${b1}) no-repeat `,
          // backgroundSize: "cover"
        }}
      >
        <h1
          style={{
            fontFamily: 'Montserrat',
            fontWeight: 'bold',
            fontSize: '60px',
            color: '#105f7f',
          }}
          className="mb-5 pt-3"
        >
          Create certificates on Blockchain
        </h1>
        <div
          style={{ marginBottom: '117px', background: 'rgba(255,255,255,0.5)' }}
          className="w-50 container pt-3 pb-3 mx-auto"
        >
          <h2
            style={{
              fontWeight: 'bold',
              fontFamily: 'Montserrat',
            }}
            className="mb-2"
          >
            Enter the Certificate details
          </h2>
          <Form onSubmit={this.addcertificate}>
            <Form.Group>
              <Form.Control
                type="text"
                name="fname"
                value={this.state.fname}
                onChange={this.handleChange}
                placeholder="First name"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                name="lname"
                value={this.state.lname}
                onChange={this.handleChange}
                placeholder="Last name"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                placeholder="Email@email.com"
              />
            </Form.Group>
            {/* <Form.Group>
              <Form.Control
                type="text"
                name="course"
                value={this.state.course}
                onChange={this.handleChange}
                placeholder="Course name"
              />
            </Form.Group> */}
            {/* <Form.Group as={col}  controlId="formGridState"> */}
            {/* <Form.Group>
              <Form.Label>State</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                <option>...</option>
              </Form.Select>
            </Form.Group> */}
            <Form.Group>
              <div style={{ width: '100%' }}>
                <select
                  style={{ padding: 5, background: 'white', width: '100%' }}
                  value={this.state.course}
                  onChange={this.handleChange}
                  name="course"
                >
                  <option value="" disabled selected hidden>
                    speciality
                  </option>
                  <option value="Sécurité des Système Infomatique">
                    Sécurité des Système Infomatique
                  </option>
                  <option value="Image Visuelle">Image Visuelle</option>
                  <option value="Système Informatique Intilligent">
                    Système Informatique Intilligent
                  </option>
                  <option value="Ingenieur Logiciel">Ingenieur Logiciel</option>
                </select>
              </div>
            </Form.Group>
            <Button
              disabled={!isEnabled}
              className="mt-3"
              variant="primary"
              type="submit"
              style={{ cursor: 'pointer' }}
            >
              Add certificate
            </Button>
          </Form>
        </div>
      </div>
    )
  }
}

export default Forms
