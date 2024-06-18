const Tweet = ({username, name, date, message}) => {
    return (
        <div>
            <h2>{username}</h2>
            <h4> By: {name}</h4>
            <h4> Date: {date}</h4>
            <p> {message}</p>
        </div>
    )
}