import React, { Component } from "react"
import axios from "axios"
import Layout from "../components/layout"
import { Container, Row, Col } from 'reactstrap';
import { Link } from "gatsby"
class FerryActivities extends Component {
    constructor (props) {
        super(props);
        this.state = {
           activities: [],
           loading: true,
        }
      }
      componentDidMount() {
        this.fetchActivitiesList()
      }

      fetchActivitiesList = () => {
          console.log("Fetching data...");
        this.setState({ loading: true })
        axios
          .get(`https://www.mocky.io/v2/5cec369633000092726d79fb`)
          .then(data => {
            console.log(data);
            this.setState({
              loading: false,
              activities: data.data,
            })
          })
          .catch(error => {
            this.setState({ loading: false, error })
          })
        }

        render() {
            return(
                <Layout>
                      <p><b>Explore experiences</b></p>

                      <Row style={{marginBottom: '50px'}}>
{['Nightlife', 'Sports' , 'Entertaintment' , 'Nature'].map( eachExperience => (
  <Col sm={{ size: 3}} >
  <div style={{margin: '10px'}}>
    <Row style={{boxShadow: ' 0px 4px 32px rgba(189, 189, 189, 0.24)', border: '1px solid #F2F2F2', cursor: 'pointer'}}>
    <Col sm={{ size: 3}} style={{backgroundImage:  `url(https://cdn.prod-carehubs.net/n1/802899ec472ea3d8/uploads/2015/05/shutterstock_36013711.jpg)` , height: '70px',  backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center',  }}>
    </Col>
    <Col sm={{ size: 9}} style={{marginTop: '5%'}}>
    <p style={{ fontFamily: 'Times', fontSize: '16px', color: '#554944', }}><b>{eachExperience}</b></p>
    </Col>
    </Row>
  </div>
  </Col>
))}
   
   
  
  </Row>
                   <Container>
                    <Row>
                        {this.state.activities.map((eachActivity) => (
                              <Col sm={{ size: 3}} style={{marginBottom: '40px'}} >
                            {/* <div style={{backgroundImage:  `url(${eachActivity.url})` , height: '300px', margin: '5px', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}> */}
                            <Link to="/activity-details">

                            <div style={{backgroundImage:  `url(https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Surfer_at_the_Cayucos_Pier%2C_Cayucos%2C_CA.jpg/1200px-Surfer_at_the_Cayucos_Pier%2C_Cayucos%2C_CA.jpg)` , height: '300px', marginLeft: '19px', marginRight: '19px',  backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '5px'}}>
                            </div>
                            </Link>
                        <div style ={{marginLeft: '19px' , marginTop: '5px' , paddingTop: '5px'}}>
                                <p style={{ fontFamily: 'Helvetica', fontSize: '11px', color: 'grey', letterSpacing: '1px', padding: '0px', margin: '0px',}}>Snorkelling - Elephant Beach</p>
                                <p style={{ fontFamily: 'Times', fontSize: '14px', color: '#554944', padding: '0px', margin: '0px',}}><b>Snorkelling at Elephant Beach</b></p>
                                <span style={{ fontFamily: 'Times', fontSize: '13px', color: '#3F4A4A', padding: '5px' , backgroundColor: '#DFE6E6' , boxSizing: 'border-box'}}>3,900 INR per person - 1.5 hours</span>
                        </div>

                            </Col>

                        ))}
                
                    </Row>
                   </Container>
                </Layout>
            )

        }
}

export default FerryActivities