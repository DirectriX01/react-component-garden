
function ProfileCard(props) {
    return (
    <div className="card">
    <div className="card-image">
        <figure className="image is-1by1">
        <img src={props.imageSrc} alt="xyz" />
        </figure>
    </div>
    <div className="card-content">
        <div className="media-content">
            <p className="title is-4">{props.title}</p>
            <p className="subtitle is-6">{props.handle}</p>
        </div>
    </div>
    <div class="content">
      {props.description}
    </div>    
    </div>            
    );
}





export default ProfileCard;