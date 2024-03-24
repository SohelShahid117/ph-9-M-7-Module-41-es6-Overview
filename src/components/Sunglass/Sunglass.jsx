import './Sunglass.css'
import Watch from './../Watch/Watch';
import { add, mul,divideFirstNumberBySecondNumber as divide } from '../Utilities/Utilities';
// import add from './../Utilities/Utilities';
const Sunglass = () => {
    const num1 = 10;
    const num2 = 15;
    // const sum = add(num1,num2);
    const sum = add(num1,num2);
    const gonFol = mul(num1,num2);
    const vaagFol = divide(num1,num2)
    console.log(gonFol)
    console.log(sum)
    console.log(vaagFol)
    return (
        <div>
            <Watch></Watch>
            
        </div>
    );
};

export default Sunglass;