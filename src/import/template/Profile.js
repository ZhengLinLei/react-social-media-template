const Profile = ()=>{
    let background_url = {
        backgroundImage: `url(https://i.imgur.com/tsY5QWa.jpg)`
    };
    return (
        <div className="Profile">
            <header className="bg-profile" style={background_url}>
                <header className="p-3 d-flex justify-content-end">
                    <section className="profile-action bubble bubble-circle d-flex align-items-center justify-content-center">
                        <a className="d-flex align-items-center">
                            <ion-icon name="ellipsis-vertical"></ion-icon>
                        </a>
                    </section>
                    <section className="ml-3 profile-action bubble bubble-circle d-flex align-items-center justify-content-center">
                        <a className="d-flex align-items-center">
                            <ion-icon name="arrow-redo-outline"></ion-icon>
                        </a>
                    </section>
                </header>
                <div className="bg-profile-dark"></div>
            </header>
            <main className="profile-main">
                <header className="p-2">
                    <section className="p-2 d-flex">
                        <img src="https://i.imgur.com/IigY4Hm.png" className="rounded-circle user-icon user-head-img" alt="User"></img>
                        <div className="ml-2 d-flex">
                            <div className="mx-3 group">
                                <div className="num">2.23K</div>
                                <div>Followers</div>
                            </div>
                            <div className="mx-3 group">
                                <div className="num">201</div>
                                <div>Follows</div>
                            </div>
                            <div className="mx-3 group">
                                <div className="num">2</div>
                                <div>Posts</div>
                            </div>
                        </div>
                    </section>
                    <section className="px-3 main-main">
                        <h6>Dalia Brommer <span className="badge badge-pill badge-theme chat-alert ml-1">Blogger</span></h6>
                        <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet interdum mauris.</p>
                    </section>
                    <section className="px-3 pb-3 main-account-action">
                        <button className="btn btn-theme">Edit profile</button>
                        <button className="btn btn-theme">Contact</button>
                    </section>
                </header>
                <main className="mt-5">
                    <header className="main-header d-flex justify-content-center align-items-center">
                        <a className="active">Posts</a>
                        <a>Photos</a>
                        <a>Likes</a>
                    </header>
                    <main className="mt-5 main-videos">
                        <div>
                            <div className="video-info">10 <ion-icon name="heart-outline"></ion-icon></div>
                            <video src="https://i.imgur.com/1A7AKoF.mp4"></video>
                        </div>
                        <div>
                            <div className="video-info">3k <ion-icon name="heart-outline"></ion-icon></div>
                            <video src="https://i.imgur.com/al6MLay.mp4"></video>
                        </div>
                        <div>
                            <div className="video-info">10 <ion-icon name="heart-outline"></ion-icon></div>
                            <video src="https://i.imgur.com/Kzvbeup.mp4"></video>
                        </div>
                        <div>
                            <div className="video-info">3k <ion-icon name="heart-outline"></ion-icon></div>
                            <video src="https://i.imgur.com/FTBP02Y.mp4"></video>
                        </div>
                    </main>
                </main>
            </main>
        </div>
    );
}

export default Profile;