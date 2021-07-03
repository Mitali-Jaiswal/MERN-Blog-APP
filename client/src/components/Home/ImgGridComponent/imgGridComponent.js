import ImgGridStyle from './ImgGridStyle.css';
import { Container, Row, Col ,Card} from "react-bootstrap";
import React from 'react';
import RightColImg from './rightColImg';
import axios from 'axios';
class ImgGridComponent extends React.Component{

     
    state ={
    
        topSections:[{}]

      };

componentDidMount(){
             this.getPosts();
            }

async getPosts(){
    const res = await axios.get("http://localhost:3000/topSection");
    console.log(res,"meeta");
    this.setState({topSections:res.data});
    
}


    renderList(){
        return this.state.topSections.map(topSection=>{
            return(
              <RightColImg key={topSection._id} topSection={topSection}  />
            );
        });
    };



    onShowImg1=()=>{
        window.location.pathname=`/Home/Img1`
    }

    render(){
        
    return(
        <div>
         <Container className="Container1" >
            <Row>
                <Col   >
                <h4  className="text-heading1"> Title of vertical gallery</h4>
                <p className="text-para1">Travel/ August 21 2017</p>
                <button onClick={this.onShowImg1} className="Img1Btn">
                    <img className="col1" src="https://picsum.photos/id/1018/367/267"></img>
                </button>
                </Col>

                <Col className="none"  >
                <Row>
                    <Col>
                    {this.renderList()}
                    </Col>
                    
                   
                </Row>
               
                </Col>
            </Row>
        </Container>
        </div>
    )
    }

}
export default ImgGridComponent;