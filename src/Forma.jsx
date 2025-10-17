import {  memo } from "react";
import { Container } from "react-bootstrap";
import InputCompanent from "./Input";


const Form = memo((props) => {
  console.log("render");

  return (
    <Container>
      <form className="w-50 border mt-5 p-3 m-auto">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label mt-3">
            Email address
          </label>
          <InputCompanent />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Example textarea
          </label>
          <textarea
            value={props.text}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
      </form>
    </Container>
  );
});


// class InputCompanent extends Component {

//   static contextType = dataContext;

//   render() {
//     return(
//       <Consumer>
//         {
//           value => {
//             return (
//               <input
//                value={value.mail}
//                 type="email"
//                  className="form-control"
//                   placeholder="name@example.com" />
//             )
//           }
//         }
//       </Consumer>

//       <input
//                value={this.context.mail}
//                 type="email"
//                  className="form-control"
//                   placeholder="name@example.com" />

//     )
//   }
// }


export default Form;