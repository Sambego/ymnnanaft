export default class AI {
  static respond(input) {
    let date = new Date();

    switch (true) {
      case input.includes("how about you") || input.includes("how are you"):
        return "I'm a machine, I don't have feelings!";
      case input.includes("time"):
        date = new Date();
        return `The time is ${date.getHours()}:${date.getMinutes()}`;
      case input.includes("date") || input.includes("day"):
        return `It is the ${date.getDate()}th of ${date.toLocaleString(
          "en-US",
          {
            month: "long"
          }
        )} in the year ${date.getFullYear()}`;
      case input.includes("play"):
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
        return "There you go, enjoy!";
      case input.includes("close"):
        return "This message will self destruct in 3... 2... 1... Bye!!";
      default:
        return "I didn't quite get that, can you repeat your question?";
    }
  }
}
