import "../../assets/css/include/cards.css"

function Cards(props) {
  const Symbol = ({ suit }) => {
    // alert(JSON.stringify(suit)
    if (suit === "hearts") {
      return <i>&hearts;</i>
    } else if (suit === "clubs") {
      return <i>&clubs;</i>
    } else if (suit === "diamonds") {
      return <i>&diams;</i>
    } else if (suit === "spades") {
      return <i>&spades;</i>
    } else {
      return ""
    }
  }

  // const numLetter = ()
  const Card = ({ rank, suit, times }) => {
    var numLetter = "";
    if (rank === "A") {
      numLetter = "ace";
    } else if (rank === "2") {
      numLetter = "two";
    } else if (rank === "3") {
      numLetter = "three";
    } else if (rank === "4") {
      numLetter = "four";
    } else if (rank === "5") {
      numLetter = "five";
    } else if (rank === "6") {
      numLetter = "six";
    } else if (rank === "7") {
      numLetter = "seven";
    } else if (rank === "8") {
      numLetter = "eight";
    } else if (rank === "9") {
      numLetter = "nine";
    } else if (rank === "10") {
      numLetter = "ten";
    } else if (rank === "J") {
      numLetter = "jack";
    } else if (rank === "Q") {
      numLetter = "queen";
    } else if (rank === "K") {
      numLetter = "king";
    }

    return (
      <div className={`card ${suit} ${numLetter}`}>
        <header>
          <span className="rank">{rank}</span>
          <span className="suit"><Symbol suit={suit} /></span>
        </header>
        <main>
          {Array.from({ length: times }).map((_, index) => {
            if (rank === "J" || rank === "Q" || rank === "K") {
              if (index === 0 || index === times - 1) {
                return <Symbol suit={suit} />
              } else {
                return <i key={index}>{rank}</i>
              }
            } else {
              return <Symbol suit={suit} />
            }
          })}
        </main>
        <footer>
          <span className="rank">{rank}</span>
          <span className="suit"><Symbol suit={suit} /></span>
        </footer>
      </div>
    )
  };

  return (
    <div>
      {props.blank ?
        <Card rank={props.rank} suit={props.suit} times={props.times} />
        :
        <div className="card reverse"></div>
      }
    </div>
  );
}

// <div>
//   <Card rank="A" suit="hearts" times={1} />
//   <Card rank="2" suit="clubs" times={2} />
//   <Card rank="3" suit="diamonds" times={3} />
//   <Card rank="4" suit="spades" times={4} />
//   <Card rank="5" suit="hearts" times={5} />
//   <Card rank="6" suit="clubs" times={6} />
//   <Card rank="7" suit="diamonds" times={7} />
//   <Card rank="8" suit="spades" times={8} />
//   <Card rank="9" suit="hearts" times={9} />
//   <Card rank="10" suit="clubs" times={10} />
//   <Card rank="J" suit="diamonds" times={4} />
//   <Card rank="Q" suit="spades" times={4} />
//   <Card rank="K" suit="hearts" times={4} />
//   <div className="card reverse"></div>
// </div>
export default Cards;
