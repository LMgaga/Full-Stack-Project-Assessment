import react from 'react'
function ShowVideo(props) {
    let videoList = []
    props.displayVideo.videos.forEach((video, index) => {
        videoList.push(
            <div className={"allVidContainer " + props.displayVideo.showVideo} key = {index}>
            <div className="vidContainer">
                <h5 id="vidTitle">test</h5>
                <div id="votes">
                     <i className="fas fa-thumbs-up vote">
                        </i> <h4> votes</h4>
                        <i className="fas fa-thumbs-down vote"></i>
                </div>
                <div>
                    <iframe width="560" height="315" src={"" + video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div>
                    <button className="btn btn-danger">Delete</button>
                </div>
            </div>
         </div>
        )
    }

    )
    return(
       videoList 
    )
}
export default ShowVideo