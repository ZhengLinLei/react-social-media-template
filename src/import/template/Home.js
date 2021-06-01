import Header from '../components/Header';
import Video from '../components/Video';

const Home = ()=>{
    return (
        <div className="Home">
            <Header />

            <main className="video-main">
                <Video direct={true} />
                <Video />
            </main>
        </div>
    );
}

export default Home;