import { Component } from 'react'
import s from './SearchBar.module.css'

console.log(s);

function SearchBar() {
    return (<header className={s.container}>
                 <form className={s.form}>
                  <button type="submit" className={s.button}>
                     <span className={s.buttonLabel}>Search</span>
                   </button>
              
                   <input
                    className={s.input}
                     type="text"
                     autoComplete="off"
                     autoFocus
                    placeholder="Search images and photos"
                   />
                </form>
              </header>)
}

// class SearchBar extends Component {
//     render() {
//         console.log(s);
//         return (<header className={s.container}>
//         <form className={s.form}>
//           <button type="submit" className={s.button}>
//             <span className={s.buttonLabel}>Search</span>
//           </button>
      
//           <input
//             className={s.input}
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//           />
//         </form>
//       </header>)
//     }
// }

export default SearchBar