import react from 'react'
function ShowVideo(props) {
    let videoList = []
    props.displayVideo.videos.forEach((video, index) => {
        if(video.url != undefined) {
            videoList.push(
                <div className={"allVidContainer " + props.displayVideo.showVideo} key={index}>
                    <div className="vidContainer">
                        <h5 id="vidTitle">{video.title}</h5>
                        <div id="votes">
                            <a href='javascript:void()' onClick={() => props.updateLikes(video.id, '+')}><i className="fa fa-thumbs-up fa-lg vote"></i></a> <h4> votes {video.rating}</h4>
                            <a href='javascript:void()' onClick={() => props.updateLikes(video.id, '-')}><i className="fa fa-thumbs-down fa-lg vote"></i></a>
                        </div>
                        <div>
                            <iframe width="560" height="315" src={"" + video.url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                        <div>
                            <button className="btn btn-danger" onClick={() => props.removeVideo(video.id)}>Delete</button>
                        </div>
                    </div>
                </div>
            )
        }
    }

    )
    return(
       videoList
    )
}
export default ShowVideo
