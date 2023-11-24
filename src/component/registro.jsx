import { useEffect, useState } from "react"
const Registro = () => {
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [email, setEmail] = useState("")
    const [telefono, setTelefono] = useState("")
    const [password, setPassword] = useState("")
    const [rePassword, setRePassword] = useState("")
    const [terminos, setTerminos] = useState(false)
    const [msjError, setMsjError] = useState("")
    const [msjErrorEmail, setMsjErrorEmail] = useState("")
    const [msjErrorColor, setMsjErrorColor] = useState(false)
    const [msjErrorColorEmail, setMsjErrorColorEmail] = useState(false)
    const [msjRegistro, setMsjRegistro] = useState(false)
   
    useEffect(() => {
        if (password.length > 4 && rePassword.length > 4) {
            if ((password === rePassword)) {
                setMsjErrorColor(true)
                setMsjError("Password Valido")
                setMsjRegistro("")
            } else {
                if (password.length !== rePassword.length) {
                    setMsjErrorColor(false)
                    setMsjError("Invalido:Los password deben coincidir")
                    setMsjRegistro("")
                }

            }
        } else {
            setMsjError("")
        }
        if (email !== "") {
            if (isValidEmail(email)) {
                setMsjErrorColorEmail(true)
                setMsjErrorEmail("Email Valido")
                document.getElementById('email').style.border=""
                setMsjRegistro("")
            } else {
                setMsjErrorColorEmail(false)
                document.getElementById('email').style.border=" 2px solid red"
                setMsjErrorEmail("Invalido: Ingrese un mail valido")
                setMsjRegistro("")
            }
        } else {
            setMsjErrorEmail("")
        }


    }, [password, rePassword, email])

 
    const isValidEmail = (email) => {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email);
    }
    const registro = (e) => {
        e.preventDefault()
        if (msjErrorColor && msjErrorColorEmail) {
            if(terminos){
                setMsjRegistro("Se registraron correctamente los Datos")
            }else{
                
                setMsjRegistro("Debe aceptar los terminos y Condiciones")
            }
            
        } else {
            document.getElementById('nombre').value===""?document.getElementById('nombre').style.border=" 2px solid red":document.getElementById('nombre').style.border=""
            document.getElementById('apellido').value===""?document.getElementById('apellido').style.border=" 2px solid red":document.getElementById('apellido').style.border=""
            document.getElementById('email').value===""?document.getElementById('email').style.border=" 2px solid red":document.getElementById('email').style.border=""
            document.getElementById('telefono').value===""?document.getElementById('telefono').style.border=" 2px solid red":document.getElementById('telefono').style.border=""
            document.getElementById('password').value===""?document.getElementById('password').style.border=" 2px solid red":document.getElementById('password').style.border=""
            document.getElementById('rePassword').value===""?document.getElementById('rePassword').style.border=" 2px solid red":document.getElementById('rePassword').style.border=""
            setMsjRegistro("Faltan datos para completar")
        }

    }

    return (
        <>

            <div className="container shadow">
                <div className="row align-items-stretch">
                    <div className="col imagen d-none d-lg-block col-md-5 col-lg-5 col-xl-6" >

                    </div>
                    <div className="col col-xs-12 ">
                        <h2 className="text-center mb-3 mt-3"> Formulario Registro</h2>
                        <form className="px-3 py-3" onSubmit={registro}>
                            <div className="mb-3">
                                <label htmlFor="nombre">Nombre</label>
                                <input id="nombre" onChange={e => setNombre(e.target.value)} value={nombre} className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="apellido">Apellido</label>
                                <input id="apellido" onChange={e => setApellido(e.target.value)} value={apellido} className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email">Email</label>
                                <input id="email" onChange={e => setEmail(e.target.value)} value={email} className="form-control" placeholder="Ej. emanuel@gmail.com" />
                                <span style={msjErrorColorEmail ? { color: "green" } : { color: "red" }}>{msjErrorEmail}</span>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="telefono">Telefono</label>
                                <input id="telefono" type="number" onChange={e => setTelefono(e.target.value)} value={telefono} className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} value={password} className="form-control" placeholder="Ingrese un password de mas de 5 caracteres" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="rePassword">Confirmar Password</label>
                                <input type="password" id="rePassword" onChange={(e) => setRePassword(e.target.value)} className="form-control" value={rePassword} />
                                <span style={msjErrorColor ? { color: "green" } : { color: "red" }}>{msjError}</span>
                            </div>
                            <div className="mb-4 form-check">
                                <input className="form-check-input text-rigth" defaultChecked={terminos} onChange={() => setTerminos(!terminos)} id="terminos" type="checkbox" />
                                <label className="form-check-label terminos" htmlFor="terminos">He leido y acepto los <a href="">términos y condiciones</a></label>
                            </div>
                            <div className="mb-4">
                                <div className="d-grid">
                                    <button className="btn btn-primary text-rigth" type="submit">Registrar</button>
                                    <span style={msjErrorColor&&terminos ? { color: "green" } : { color: "red" }}>{msjRegistro}</span>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>

            </div>
            <h3 className="text-center mt-2">--Emanuel Agüero--</h3>


        </>
    )
}
export default Registro