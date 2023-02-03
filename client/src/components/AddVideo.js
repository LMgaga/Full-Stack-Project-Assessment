import react, {useState} from 'react'
function AddVideo(props) {
    const [showForm, setShowForm] = useState("hideData") 
    const [title, setTitle] = useState("") 
     const [url, setUrl] = useState("") 
    function revealInput() {
       setShowForm("")
    }
    function addSingleVideo() {
     props.diplayVideo.videos.push(url)
     props.showVideos()
    }
    function addTitle(e) {
       setTitle(e.target.value)
    }
     function addUrl(e) {
       setUrl(e.target.value)
    }
    return(
     <div>
        <div className ="addVideo">
            <div className='FirstVideo'>
                <a href="#0" className='SecondVideo' onClick={revealInput}>
                    Add video
                </a>
                <form id="form" className= {showForm}>
                    <div>
                        <label>Title
                            <input className="input" name="title" type="text" required="" onChange = {addTitle}/>
                        </label>
                    </div>
                    <div>
                        <label>URL
                            <input className="input" name="vurl" type="text" required="" onChange = {addUrl}/>
                        </label>
                    </div>
                    <div>
                        <button className="btn btn-warning input" type="cancel">Cancel</button>
                        <button className="btn btn-danger input" type="submit" onClick={addSingleVideo}>ADD
                        </button>
                    </div>
                </form>
            </div>
              
        </div>
                <div className="allVidContainer">
                </div>
        </div>
    )
}

export default AddVideo