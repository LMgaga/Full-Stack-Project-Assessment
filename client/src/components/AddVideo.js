import react, {useState} from 'react'
function AddVideo(props) {
    const [showForm, setShowForm] = useState("hideData")
    function revealInput() {
       setShowForm("")
    }
    function addSingleVideo() {
     props.showVideos()
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
                            <input className="input" name="title" type="text" required=""/>
                        </label>
                    </div>
                    <div>
                        <label>URL
                            <input className="input" name="vurl" type="text" required=""/>
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