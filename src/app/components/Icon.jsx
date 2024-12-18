export default function Icon(props){
    return (
        <a href={props.link} target="_blank">
          <img src={`${props.alt}.svg`} alt={props.alt} />
        </a>
    );
}