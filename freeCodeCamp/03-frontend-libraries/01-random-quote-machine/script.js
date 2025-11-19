const { useState, useEffect } = React;

const QUOTES = [
  {
    text: "The mind is everything. What you think you become.",
    author: "Buddha",
  },
  {
    text: "I have learned over the years that when one’s mind is made up, this diminishes fear.",
    author: "Rosa Parks",
  },
  {
    text: "If you want to lift yourself up, lift up someone else.",
    author: "Booker T. Washington",
  },
  {
    text: "I am not a product of my circumstances. I am a product of my decisions.",
    author: "Stephen Covey",
  },
  {
    text: "Education costs money. But then so does ignorance.",
    author: "Claus Moser",
  },
  {
    text: "First, have a definite, clear practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end.",
    author: "Aristotle",
  },
  {
    text: "Your time is limited, so don’t waste it living someone else’s life.",
    author: "Steve Jobs",
  },
];

const COLORS = [
  "#FF6B6B", // coral red
  "#FFD93D", // sunflower
  "#6BCB77", // mint green
  "#4D96FF", // sky blue
  "#9D4EDD", // lavender violet
  "#F7A4A4", // pastel rose
  "#FF9F1C", // warm orange
];

function getRandomIndex(exclude) {
  let i = Math.floor(Math.random() * QUOTES.length);
  while (i === exclude) i = Math.floor(Math.random() * QUOTES.length);
  return i;
}

function getRandomColor(exclude) {
  let c = COLORS[Math.floor(Math.random() * COLORS.length)];
  while (c === exclude) c = COLORS[Math.floor(Math.random() * COLORS.length)];
  return c;
}

function App() {
  const [index, setIndex] = useState(0);
  const [color, setColor] = useState("#6BA8A9");

  // initial random quote + color
  useEffect(() => {
    setIndex(getRandomIndex());
    setColor(getRandomColor());
  }, []);

  // apply background color to <body> whenever color changes
  useEffect(() => {
    document.body.style.backgroundColor = color;
    document.body.style.transition = "background-color 0.7s ease";
  }, [color]);

  const current = QUOTES[index];

  const handleNewQuote = () => {
    setIndex((prev) => getRandomIndex(prev));
    setColor((prev) => getRandomColor(prev));
  };

  const tweetURL =
    "https://twitter.com/intent/tweet?text=" +
    encodeURIComponent(`"${current.text}" — ${current.author}`);

  return (
    <div id="quote-box" style={{ color: color }}>
      <div id="text">❝ {current.text}</div>
      <div id="author">— {current.author}</div>

      <div className="buttons">
        <a
          id="tweet-quote"
          href={tweetURL}
          target="_blank"
          rel="noopener noreferrer"
          style={{ backgroundColor: color }}
        >
          Tweet
        </a>

        <button
          id="new-quote"
          onClick={handleNewQuote}
          style={{ backgroundColor: color }}
        >
          New Quote
        </button>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
