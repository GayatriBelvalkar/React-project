import {useState} from "react";


function Register(){


const [student,setStudent]=useState({

name:"",
email:""

});



function register(){


let students=
JSON.parse(localStorage.getItem("students"))
|| [];


students.push(student);


localStorage.setItem(
"students",
JSON.stringify(students)
);


alert("Registration Completed");


}



return(

<div className="container">


<h2>
Student Registration
</h2>


<input
placeholder="Student Name"

onChange={(e)=>
setStudent({
...student,
name:e.target.value
})
}

/>


<input
placeholder="Email"

onChange={(e)=>
setStudent({
...student,
email:e.target.value
})
}

/>



<button onClick={register}>
Submit
</button>


</div>

)

}


export default Register;