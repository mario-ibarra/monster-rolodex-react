import './search-box.styles.css';

const SearchBox = ({className, placeholder, onChangeHandler}) =>( 
            <input
              className={`search-box ${className}`}
              type={className}
              placeholder={placeholder}
              onChange={onChangeHandler}
            />
          
        
)



// class SearchBox extends Component {
//     render(){
//         return (
//           <div>
//             <input
//               className={`search-box ${this.props.className}`}
//               type={this.props.className}
//               placeholder={this.props.placeholder}
//               onChange={this.props.onChangeHandler}
//             />
//           </div>
//         );
//     }
// }

export default SearchBox;