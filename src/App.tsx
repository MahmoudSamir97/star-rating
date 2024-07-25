import StartRating from "./components/StartRating";

function App() {
  const messages = ["terrible", "bad", "moderate", "good", "amazing"];
  return (
    <>
      <div>
        <StartRating
          maxRating={5}
          color={"#fcc419"}
          size={40}
          className="success"
          messages={messages}
        />
      </div>
      <div>
        <StartRating maxRating={5} color="red" size={20} className="test" />
      </div>
    </>
  );
}

export default App;
