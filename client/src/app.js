import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route} from 'react-router-dom';
import style from './styles/style.css';
import Home from './components/Home/HomeContainer'
import FoodComponent from './components/Food/FoodComponent';
import { Form } from 'react-bootstrap';
import PostPageComponent from './components/PostPageWeb1/PostPageComponent';
import CardLatestComponent from './components/Home/LatestComponent/CardLatestComponent';
import CardComponent from './components/PostPageWeb1/CardComponent/CardComponent';
import CardContainer from './components/Home/LatestComponent/CardContainer';
import InnerLatest from './components/Home/LatestComponent/InnerLatest';
import InnerArticle from './components/Home/ArticlesComponent/InnerArticle'
import InnerLeft from './components/Food/InnerLeft';
import InnerRight from './components/Home/ImgGridComponent/InnerRight';
import InnerTopPost from './components/Home/ArticlesComponent/InnerTopPost';

function App(){
    

    return(
        <div className="app">
            <BrowserRouter>

                <Route path="/Home/topPost/:id" component={InnerTopPost} />
                <Route path="/Home/ImgCol1" component={PostPageComponent}   />
                <Route path="/Home/topSection/:id" component={InnerRight} />
                <Route path="/food/:id" component={InnerLeft}/>
                <Route path="/Home/Img1" component={PostPageComponent}   />
                <Route path="/Home/post/:id" component={InnerArticle}/>
                <Route path="/Home/latest/:id" component={InnerLatest}/>
                <Route path="/food" component={FoodComponent} exact /> 
                <Route path="/Home" component={Home} exact   />
                <Route path="/" component={Home}  exact   />
             
          
        

            </BrowserRouter>
      
        </div>
    )
}
export default App;