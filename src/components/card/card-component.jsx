import './card.styles.css';

const Card = ( {monster }) =>  {
  const { id, name, email } = monster;

  return (
    <div className="card-container" key={id}>
      <img
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
        alt={`monster ${name}`}
      />
      <h2 className="monster-name">{name}</h2>
      <p className="monster-desc">{email}</p>
    </div>
  );
}


// class Card extends Component {
//     render() {
      
//         const {name, email, id } = this.props.monster;

//         return (
//           <div className="card-container" key={id}>
//             <img
//               alt={`monster ${name}`}
//               src={`https://robohash.org/${id}?set=set2&size=180x180`}
//             />
//             <h2 className='monster-name'>{name}</h2>
//             <p className='monster-desc'>{email}</p>
//           </div>
//         );
//     }
// }

export default Card;