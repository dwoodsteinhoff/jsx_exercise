const Person = ({name, age, hobbies}) => {
    let reply;
    if(age >= 18){
        reply = 
        <h3>
            Please go Vote!
        </h3>
    } else {
        reply =
        <h3>
            You must be 18
        </h3>
    }
    if(name.length > 8){
        name = name.slice(0,6)
    }
    return (
        <div>
            <p> Learn Some Information about this person</p>
            <p> Name: {name}</p>
            {reply}
            <ul>{hobbies.map(h => (
                                    <li key={h.id}>
                                        {h}
                                    </li>
                                )
                            )
                }
            </ul>
        </div>
    )
}