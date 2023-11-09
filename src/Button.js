const sayHi=()=>{
    alert('Hiiii')
}

function Button() {
    return (
        <div>
            <button onClick={sayHi} type="">click on me</button>
        </div>
    )
}

export default Button 