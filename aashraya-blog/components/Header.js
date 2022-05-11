import Link from "next/link"
function Header() {
    return (
              <div className="Navbar">
                <span style={{color:"white", display:"flex",fontSize:"30px",padding:"25px"}}>Aashraya</span>
                <ul style={{display:"flex",color:"white",position:"absolute",right:'60px', listStyle:"none"}}>
                  <Link href="/"><li  style={{padding:"10px",margin:"10px"}} >Main site</li></Link>
                  <Link href="/"><li  style={{padding:"10px",margin:"10px"}} >Home</li></Link>
                  <Link href="/CreatePost"><li  style={{padding:"10px",margin:"10px"}} >Admin</li></Link>
                  <Link href="/signIn"><li  style={{padding:"10px",margin:"10px"}} >Login</li></Link>
                </ul>
              </div>
    
    )
  }
  
  export default Header