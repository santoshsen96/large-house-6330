import { useEffect, useState } from 'react'
import '../Style/AccountStyle.css'
import { Link } from 'react-router-dom'
import axios from 'axios'


export const Account = () =>{
// let userdata = JSON.parse(localStorage.getItem("UserDetails"))
let token = JSON.parse(localStorage.getItem("token"))
const [firstname,seFirstname] = useState('-');
const [lastname,setLastname] = useState('-')
let match = window.matchMedia("(max-width:770px)").matches;
const [speacial,setSpeacial] = useState(false)


const getUser  = () =>{
axios.get(`https://asos-of6d.onrender.com/users?token=${token}`)
.then((data)=>{
seFirstname(data.data[0].firstname)
setLastname(data.data[0].lastname)
})
.catch((error)=>{
console.log(error)
})
}

const handleSpeacial = () =>{
setSpeacial(!speacial)
}

useEffect(()=>{
getUser();
},[])

return (
    <div style={{backgroundColor:'rgba(186, 186, 186, 0.416)'}}>
    <span>
        <div>
            <h1><Link to={'/'}>← back</Link></h1>
        </div>
    </span>

    <div className='account_1'>
    <div className='account_1_item'>
        <div style={speacial&&match?{flexDirection:'row',margin:'0'}:null}>
            <div onClick={handleSpeacial} style={speacial&&match?{margin:'0',width:'70px',height:'70px',borderRadius:'50%',alignItems:'center',textAlign:'center',border:'1px solid grey',padding:'10px'}:{display:'flex',width:'70px',height:'70px',borderRadius:'50%',border:'1px solid grey',alignItems:'center',textAlign:'center',padding:'26px'}}>
            <h1 style={{fontSize:'30px'}}>
            {firstname[0]}
            </h1>
            </div>
            <h1 style={speacial&&match?{marginLeft:'25px',display:'block'}:{marginLeft:'25px'}}>
                {firstname} {lastname}
            </h1>
        </div>
        <div>
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj48cGF0aCBmaWxsPSIjMkQyRDJEIiBkPSJNMTAgMmE0IDQgMCAxMDAgOCA0IDQgMCAwMDAtOHptMCAxMGE2IDYgMCAxMTAtMTIgNiA2IDAgMDEwIDEyem03LjY3OCA4TDE5IDE4LjQ2OGE2LjgwOSA2LjgwOSAwIDAwLS4yMDctLjQ2OEguMjA3Yy0uMDc1LjE1NC0uMTQ0LjMxLS4yMDcuNDY4TDEuMzIyIDIwaC4yODJjLjU2NC0yLjc5MiAzLjgxNC01IDcuODk2LTVzNy4zMzIgMi4yMDggNy44OTYgNWguMjgyek0wIDIwaDIwYy0uNTUzLTQuMDA2LTQuODE5LTctMTAtN1MuNTUzIDE1Ljk5NCAwIDIweiIvPjwvc3ZnPg==" alt="" />
        <p>Account overview</p>
        </div>
        <div>
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj48ZyBmaWxsPSIjMkQyRDJEIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTE4IDQuNjY3TDE2IDJINEwyIDQuNjY3VjE4aDE2VjQuNjY3ek0wIDRsMy00aDE0bDMgNHYxNkgwVjR6Ii8+PHBhdGggZD0iTTAgNGgyMHYySDB6Ii8+PHBhdGggZD0iTTkgMS4xMTFoMnY0SDl6Ii8+PC9nPjwvc3ZnPg==" alt="" />
        <p>My orders</p>
        </div>
        <div>
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj48ZyBmaWxsPSIjMkQyRDJEIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTE4IDZIMnYxMmgxNnYtNUg4di0yaDEydjlIMFY0aDIwdjVoLTJ6Ii8+PHBhdGggZD0iTTkgMWgydjRIOXoiLz48cGF0aCBmaWxsLXJ1bGU9Im5vbnplcm8iIGQ9Ik00LjYgMS4yTDMgMmgxbC42LS44ek0xNyAybC0xLjYtLjguNi44aDF6bS0xIDBsMS41IDJIMjBsLTMtNEgzTDAgNGgyLjVMNCAyaDEyem0xIDBsLTEuNi0uOC42LjhoMXpNMyAybDEuNi0uOEw0IDJIM3ptMTQuNSAydi40MzhIMjBWNGwtMy00SDNMMCA0di40MzhoMi41VjRMNCAyaDEyIi8+PHBhdGggZD0iTTguODI4IDEyLjAwM2wyLjgyOSAyLjgyOC0xLjQxNCAxLjQxNEw2IDEyLjAwM2wuNzA3LS43MDcgMy41MzYtMy41MzYgMS40MTQgMS40MTQtMi44MjkgMi44Mjl6Ii8+PC9nPjwvc3ZnPg==" alt="" />
        <p>My returns</p>
        </div>
        <div>
        <img src="data:image/png;base64,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" alt="" />
        <p>FSAQ Premier</p>
        </div>
        <div>
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMiIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDIyIDE4Ij48ZyBmaWxsPSIjMkQyRDJEIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTIgMTZoMThWMkgydjE0ek0wIDBoMjJ2MThIMFYweiIvPjxwYXRoIGQ9Ik0xMiA1aDR2MWgtNHptMCAzaDZ2MWgtNnptMCAzaDZ2MWgtNnpNOSA3YTIgMiAwIDExLTQgMCAyIDIgMCAwMTQgMHptLTIgM2MtMS41NTQgMC0yLjgzNCAxLjI4My0zIDNoNmMtLjE2Ni0xLjcxNy0xLjQ0Ni0zLTMtM3oiLz48L2c+PC9zdmc+" alt="" />
        <p>My details</p>
        </div>
        <div>
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDE4IDIwIj48ZyBmaWxsPSIjMkQyRDJEIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTIgMThoMTRWOC4zMTZMOSAyLjU4NWwtNyA1LjczVjE4ek0wIDcuMzY4TDkgMGw5IDcuMzY4VjIwSDBWNy4zNjh6Ii8+PHBhdGggZD0iTTExIDloMnYyaC0yem0tNCA0aDR2Nkg3eiIvPjwvZz48L3N2Zz4=" alt="" />
        <p>Address book</p>
        </div>
        <div>
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIxNCIgdmlld0JveD0iMCAwIDIwIDE0Ij48ZyBmaWxsPSIjMkQyRDJEIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTAgMmwyLTJ2MTRsLTItMmgyMGwtMiAyVjBsMiAySDB6bTIwLTJ2MTRIMFYwaDIweiIvPjxwYXRoIGQ9Ik0xIDNoMTl2NEgxeiIvPjwvZz48L3N2Zz4=" alt="" />
        <p>Payment methods</p>
        </div>
        <div>
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj48ZyBmaWxsPSIjMkQyRDJEIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTIgMTR2MmwyLjctMmgxMS4zMDZjMS4xIDAgMS45OTQtLjkgMS45OTQtMi4wMDlWNC4wMUEyLjAwMyAyLjAwMyAwIDAwMTYuMDA2IDJIMy45OTRDMi44OTQgMiAyIDIuOSAyIDQuMDA5VjE0em0zLjMzMyAyTDAgMjBWNC4wMDlBNC4wMDIgNC4wMDIgMCAwMTMuOTk0IDBoMTIuMDEyQzE4LjIxNSAwIDIwIDEuOCAyMCA0LjAwOXY3Ljk4MkE0LjAwMiA0LjAwMiAwIDAxMTYuMDA2IDE2SDUuMzMzeiIvPjxwYXRoIGQ9Ik02IDlhMSAxIDAgMTEwLTIgMSAxIDAgMDEwIDJ6bTQgMGExIDEgMCAxMTAtMiAxIDEgMCAwMTAgMnptNCAwYTEgMSAwIDExMC0yIDEgMSAwIDAxMCAyeiIvPjwvZz48L3N2Zz4=" alt="" />
        <p>Content preferences</p>
        </div>
        <div>
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIxNCIgdmlld0JveD0iMCAwIDIwIDE0Ij48ZyBmaWxsPSIjMkQyRDJEIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xNC45MyAxMmE4LjAzNiA4LjAzNiAwIDAwLTMuMzU2LTMuMTZjLjg3OC0uNTMgMS45NTgtLjg0IDMuMTI1LS44NCAyLjc0NyAwIDUuMDA4IDEuNzEgNS4zMDEgNGgtNS4wN3pNMTggNGEzIDMgMCAxMS02IDAgMyAzIDAgMDE2IDB6bS0yIDBhMSAxIDAgMTAtMiAwIDEgMSAwIDAwMiAweiIvPjxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTcgMmEyIDIgMCAxMDAgNCAyIDIgMCAwMDAtNHptMCA2YTQgNCAwIDExMC04IDQgNCAwIDAxMCA4em02LjU0NCA0LjUyMmE1LjExNiA1LjExNiAwIDAwLS4yOTktLjUyMkguNzU1Yy0uMTEuMTY5LS4yMS4zNDMtLjI5OS41MjJMMS43NDcgMTRoLjI4NkMyLjQzNiAxMi4zNDEgNC40NCAxMSA3IDExYzIuNTU5IDAgNC41NjQgMS4zNDEgNC45NjcgM2guMjg2bDEuMjkxLTEuNDc4ek03IDljLTMuNjI3IDAtNi42MTMgMi4xMzgtNyA1aDE0Yy0uMzg3LTIuODYyLTMuMzczLTUtNy01eiIvPjwvZz48L3N2Zz4=" alt="" />
        <p>Social accounts</p>
        </div>
        <div>
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDIwIDE2Ij48ZyBmaWxsPSIjMkQyRDJEIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTAgMmwyLTJ2MTZsLTItMmgyMGwtMiAyVjBsMiAySDB6bTIwLTJ2MTZIMFYwaDIweiIvPjxwYXRoIGQ9Ik02IDFoMnYxNEg2eiIvPjxwYXRoIGQ9Ik0zLjkyMiA5LjMyTDcuNyA2LjQ1N2wuOTU3Ljk1Ny00LjcgMy43ODZ6Ii8+PHBhdGggZD0iTTkuNzM0IDkuMzJMNS45NTcgNi40NTcgNSA3LjQxNCA5LjcgMTEuMnoiLz48cGF0aCBkPSJNMCA3aDIwdjJIMHoiLz48ZWxsaXBzZSBjeD0iOC41IiBjeT0iNyIgcng9IjEuNSIgcnk9IjEiLz48ZWxsaXBzZSBjeD0iNS41IiBjeT0iNyIgcng9IjEuNSIgcnk9IjEiLz48L2c+PC9zdmc+" alt="" />
        <p>Gift cards</p>
        </div>
        <div>
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj48ZyBmaWxsPSIjMkQyRDJEIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTEwIDJhOCA4IDAgMTAwIDE2IDggOCAwIDAwMC0xNnptMCAxOEM0LjQ3NyAyMCAwIDE1LjUyMyAwIDEwUzQuNDc3IDAgMTAgMHMxMCA0LjQ3NyAxMCAxMC00LjQ3NyAxMC0xMCAxMHoiLz48cGF0aCBkPSJNOSA4LjUwNXY2aDJ2LTZIOXpNOSA2YzAgLjU0OC40NTIgMSAxIDFzMS0uNDUyIDEtMS0uNDUyLTEtMS0xLTEgLjQ1Mi0xIDF6Ii8+PC9nPjwvc3ZnPg==" alt="" />
        <p>Need helps?</p>
        </div>
        <div>
        <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIxNyIgdmlld0JveD0iMCAwIDIwIDE3Ij48ZyBmaWxsPSIjMkQyRDJEIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xOS45NjUuMXYxNi44aC05LjQ0MXYtMi4wNjdoNy4zODhzLjA0LTEyLjY4OSAwLTEyLjY4OWgtNy4zODhWLjFoOS40NDF6Ii8+PHBhdGggZD0iTTIuMTQzIDkuNTV2LTIuMWgxMS41MjR2Mi4xeiIvPjxwYXRoIGQ9Ik0xLjUyNSAxMC4wMzRsLS4wMDIuMDAyTC4wNDIgOC41NTRsLjAwMS0uMDAxLS4wMDEtLjAwMkwxLjUyMyA3LjA3bC4wMDIuMDAxIDMuNzE0LTMuNzE0TDYuNzIxIDQuODQgMy4wMDcgOC41NTNsMy43MTQgMy43MTQtMS40ODIgMS40ODEtMy43MTQtMy43MTR6Ii8+PC9nPjwvc3ZnPg==" alt="" />
        <p>Sign out</p>
        </div>
    </div>
    <div className='account_1_item'>
    <div>
    <h1 style={{fontSize:'30PX',height:'80vh'}}>Hii,<br />{firstname} {lastname} ...</h1>
    </div>
    </div>
    </div>
    </div>
)
}