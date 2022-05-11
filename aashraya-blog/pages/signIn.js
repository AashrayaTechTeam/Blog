import Header from "../components/Header"


function signIn() {

    const [username , setusername] = useState("");
    const [Email , setEmail] = useState("");
    const [password ,setpassword] = useState("");

const signInHandle = async(e) =>{
    
    e.preventDefault();
}
    return(
        <>
        <Header/>
        <form className="form_card">
        <h1 style={{textAlign:"center"}}>ADMIN LOGIN</h1>
            <input type="text" placeholder="Aashraya Id"/>
            <input type="text" placeholder="Email Id"/>
            <input type="text" placeholder="Password"/>
            <input onClick={signInHandle} style={{background:"black",color:"white",fontSize:"17px",letterSpacing:"1.5px"}} type="submit"/>
        </form>
        </>
    )
}

export default signIn