import Article from "../components/Article";
import Sidebar from "../components/Sidebar";
const News = () => {

    return (
        <div className='home'>
        <div className="container">
          <Sidebar/>
          <Article/>
        </div>
      </div>
    );

    }

export default News;