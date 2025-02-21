class Messenger {
  constructor(message) {
    this.message = message;
  }

  sendMessage = (person) => console.log(`Hello ${person}, ${this.message}`);
}

const messenger = new Messenger("hope you're doing well!");
messenger.sendMessage("Alice");
const aliceMessage = new Messenger("I am good thank you");
messenger.sendMessage("Jose");
