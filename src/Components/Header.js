

const Header = (props)=>{

    return (
        <div className='row'>
        {/* <div className='col s1'></div> */}
        <div className='col s12  center-align'> 
             <h5 className="card-panel teal lighten-2 ">{props.Heading}</h5>
        </div>
        {/* <div className='col s1'></div> */}
      </div>


   
    ) 

}

export default Header;