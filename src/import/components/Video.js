const Video = (props)=>{
    return (
        <div>
            <video className="video-player" src="https://i.imgur.com/1A7AKoF.mp4"></video>
            {/* VIDEO USER INFO */}
            <section className="video-user-info d-flex flex-column align-items-center justify-content-between">
                <a className="user-head">
                    <img src="https://i.imgur.com/IigY4Hm.png" className={`rounded-circle user-icon-redirect user-head-img ${((props.direct)?'direct':'')}`} alt="User"></img>
                    <div className="user-add-action rounded-circle d-flex justify-center align-items-center">
                        <ion-icon name="add-outline"></ion-icon>
                        {/* <ion-icon name="checkmark-outline"></ion-icon> */}
                    </div>
                </a>
                <a className={(props.like)?'text-danger':''}>
                    <ion-icon name={`heart${(props.like)?'':'-outline'}`}></ion-icon>
                </a>
                <a>
                    <ion-icon name="chatbubbles-outline"></ion-icon>
                </a>
                <a>
                    <ion-icon name="arrow-redo-outline"></ion-icon>
                </a>
                <a>
                    <div className="bgm-disk mr-3">
                        <img src="https://i.imgur.com/IigY4Hm.png" className="rounded-circle user-icon-bgm" alt="BGM"></img>
                    </div>
                </a>
            </section>
            {/* VIDEO DESCRIPTION */}
            <section className="video-description">
                <h6 className="theme-text">@Maria Luisa</h6>
                <p>Lorem, ipsum dolor. <span className="tag theme-text">#Lorem</span></p>
                <div className="bgm-name mt-2">
                    <span className="mr-3 note">
                        <ion-icon name="musical-notes-outline"></ion-icon>
                    </span>
                    <div className="bgm-name-roll position-relative">
                        <span>Lorem Song - Lorem, ipsum dolor. Ed.</span>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Video;