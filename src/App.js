import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";


function App() {
    return (
        <div className='app-wrapper'>
            <Header/>
            {/*<heder className='header'>*/}
            {/*    <div>*/}
            {/*    <img src='https://www.pngall.com/wp-content/uploads/11/World-Wide-Web-WWW-Internet-PNG-Image.png'/>*/}
            {/*    </div>*/}
            {/*</heder>*/}
            <nav className='nav'>
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Messages</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Setting</a>
                </div>
            </nav>


            <div className='content'>
                <img src='https://w-dog.ru/wallpapers/11/0/500831153565704/priroda-pejzazh-prosmotret-nebo-zakat-pole-derevya-oblaka-vid-krasivyj-doroga.jpg'/>
                <div>
                    ava + description
                </div>
                <div>
                    My Posts
                    <div>
                        New post
                    </div>
                </div>
                <div>
                    Post 1
                </div>
                <div>
                    Post 2
                </div>
            </div>
        </div>
    );
}

export default App;
