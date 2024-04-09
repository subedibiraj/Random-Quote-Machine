import { useState } from "react";
import "./App.css";
import quotes from "./assets/quotes.json";
import {FaTwitter, FaQuoteLeft, FaQuoteRight} from "react-icons/fa";

interface Quote {
  quote: string;
  author: string;
}

const getRandomQuote = (): Quote => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

const getColor = (): string => {
  const red = Math.floor(Math.random()*128);
  const green = Math.floor(Math.random()*128);
  const blue = Math.floor(Math.random()*128);

  return `rgb(${red},${blue},${green})`;
};

const transition = "all 2s";

function App() {
  const [quote, setQuote] = useState<Quote>(getRandomQuote());
  const [color,setColor] = useState<string>(getColor());

  const changeQuote = () => {
    setQuote(getRandomQuote());
    setColor(getColor());
  };

  return (
    <>
      <div className="background" style={{backgroundColor: color, transition}}>
        <div id="quote-box">
          <div className="quote-content" style={{color: color}}>
            <h2 id="text">
              <FaQuoteLeft size='30' style={{marginRight:"10px"}} />
              {quote.quote}
              <FaQuoteRight size='30' style={{marginLeft:"10px"}} />
            </h2>
            <h4 id="author" style={{marginTop: "20px"}}>
              - {quote.author}
            </h4>
          </div>
          <div className="buttons">
            <a href ="twitter.com/intent/tweet" id="tweet-quote" style={{backgroundColor:color,transition, marginRight:'15px'}}>
              <FaTwitter color="white"/>
            </a>
            <button id="new-quote" onClick={changeQuote} style={{backgroundColor: color, transition}}>New Quote</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
