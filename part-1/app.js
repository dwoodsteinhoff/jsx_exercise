const App = () => {
    return (
        <div>
            <FirstComponent />
            <NamedComponenet name="Luke" />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))