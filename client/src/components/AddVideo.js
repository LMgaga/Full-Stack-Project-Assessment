import react, {useState} from 'react'
function AddVideo(props) {
    const [showForm, setShowForm] = useState("hideData")
    let hideInput = "hideData"
    function revealInput() {
    setShowForm("")
       hideInput = ""
    }
    return(
     <div>
        <div className ="addVideo">
            <div className='FirstVideo'>
                <a href="#0" className='SecondVideo' onClick={revealInput}>
                    Add video
                </a>
                <form id="form" className= {hideInput}>
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
                        <button className="btn btn-warning input" type="cancel">Cancel
                        </button><button className="btn btn-danger input" type="submit">ADD
                        </button>
                    </div>
                </form>
            </div>
                {/* <div className="SearchDiv">
                    <label>Search<input className="search" name="search" type="text" value=""/>
                    </label>
                </div> */}
                </div>
                <div className="allVidContainer">
                    </div>
        </div>
    )
}

export default AddVideo