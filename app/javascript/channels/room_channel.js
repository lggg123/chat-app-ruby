import consumer from "./consumer"

consumer.subscriptions.create("RoomChannel", {
  connected() {
    console.log('yiha we are live!')
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel

    $('#msg').append('<div class="message">' + data.content + '</div>')
    console.log(data.content)
  }
});
