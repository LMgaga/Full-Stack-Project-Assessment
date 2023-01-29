import react from 'react'
function AddVideo(props) {
    return(
     <div>
        <div className ="addVideo" style="display: flex;">
            <div style="width: 30%; margin: 1rem;">
                <a href="#0" style="font-style: normal; text-decoration: none; font-size: 1.2rem;">
                    Add video
                </a>
                <form id="form">
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
                <div style="width: 40%; margin: 2rem;">
                    <label>Search<input className="search" name="search" type="text" value=""/>
                    </label>
                </div>
                </div>
                <div className="allVidContainer">
                    </div></div>
    )
}

export default AddVideo