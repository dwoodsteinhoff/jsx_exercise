const App = () => {
    return (
        <div>
            <Person name="Luke" age={28} hobbies={["Chess", "Gaming", "Watching Anime"]} />
            <Person name="anastasia" age={17} hobbies={["Hanging With Friends", "Reading"]} />
            <Person name="Victoria" age={27} hobbies={[]} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))