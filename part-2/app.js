const App = () => {
    return (
        <div>
            <Tweet username="TurtleLover" name="Jack" date="01/01/2019" message="I like Turtles"/>
            <Tweet username="ChickenLover" name="Cole" date="01/02/2019" message="I like Chickens"/>
            <Tweet username="CowLover" name="Ash" date="01/03/2019" message="I like Cows"/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))