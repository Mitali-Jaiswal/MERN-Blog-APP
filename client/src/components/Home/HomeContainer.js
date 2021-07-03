
import ArticlesComponent from './ArticlesComponent/ArticlesComponent'
import ImgGridComponent from './ImgGridComponent/imgGridComponent'
import LatestComponent from './LatestComponent/LatestComponent'
import StoriesComponent from './Stories/StoriesComponent';
import CardLatestComponent from './LatestComponent/CardLatestComponent';
import './HomeStyle.css';
import Header from '../Header/Header';


const Home=()=>{
    
    return(
        <>
              <Header />
            <ImgGridComponent/>
            <LatestComponent />
            <ArticlesComponent />
            <StoriesComponent />
           
        </>
    )
}
export default Home;