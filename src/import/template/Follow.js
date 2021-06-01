import Video from "../components/Video";

const Follow = ()=>{
    return (
        <div className="Follow">
            <header className="follow-header px-2 pt-3 pb-5">
                <div className="group d-flex">
                    <a>
                        <img src="https://i.imgur.com/jONHmE5.png" className="rounded-circle user-head-img direct" alt="User"></img>
                    </a>
                    <a>
                        <img src="https://i.imgur.com/eX3hkoc.png" className="rounded-circle user-head-img direct" alt="User"></img>
                    </a>
                    <a>
                        <img src="https://i.imgur.com/rWYtZa6.png" className="rounded-circle user-head-img" alt="User"></img>
                    </a>
                    <a>
                        <img src="https://i.imgur.com/QwZod6m.png" className="rounded-circle user-head-img" alt="User"></img>
                    </a>
                    <a>
                        <img src="https://i.imgur.com/eX3hkoc.png" className="rounded-circle user-head-img" alt="User"></img>
                    </a>
                    <a>
                        <img src="https://i.imgur.com/rWYtZa6.png" className="rounded-circle user-head-img" alt="User"></img>
                    </a>
                    <a>
                        <img src="https://i.imgur.com/QwZod6m.png" className="rounded-circle user-head-img" alt="User"></img>
                    </a>
                </div>
            </header>
            <main className="follow-main">
                {/* VIDEO USER INFO */}
                <header className="main-header py-5 w-100 position-absolute fixed-top d-flex justify-content-center align-items-center">
                    <a className="active">Follows</a>
                    <a>Friends</a>
                </header>
                <main className="video-main">
                    <Video direct={false} like={true} />
                    <Video direct={true} />
                </main>
            </main>
        </div>
    );
}

export default Follow;