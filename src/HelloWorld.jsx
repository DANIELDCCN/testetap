function HelloWorld(props){
    return(
        <>
            <h1>Hello {props.nome}, you have {props.idade} years old</h1>
            <h1>and your e-mail is {props.email}</h1>
        </>
    );
}

export default HelloWorld;