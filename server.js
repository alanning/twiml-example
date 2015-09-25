"use strict"

var handlers = {},
    bodyParser = Meteor.npmRequire('body-parser')

Picker.middleware(bodyParser.json())
Picker.middleware(bodyParser.urlencoded( {extended: false} ))

handlers.voice = function (params, req, res, next) {
  var twilio = Twilio,
      sig = req.headers['x-twilio-signature'],
      url,
      resp,
      msg

  console.log('[twilio] headers:', JSON.stringify(req.headers));
  console.log('[twilio] body:', req.body)
  console.log('[twilio] query:', params.query)
  console.log("[twilio] path", req.headers.host + req.url)
  //console.log("[twilio] req", req)
  console.log('[twilio] Twilio signature:', sig);

  // Use url with `twilio.validateRequest`.  Not included in example
  // because it requires a Twilio Auth Token
  //url = 'http://' + req.headers.host + req.url

  resp = new twilio.TwimlResponse()
  msg = 'Hello, thanks for using Meteor and Twilio! ' +
        'Here is another sentence for you with a period at the end. ' +
        'You should have noticed a slight pause at punctuation mark. ' +
        'This message should repeat twice. .'

  resp.say({voice: 'man', loop: 2}, msg)
      .pause({length: 1})
      .say({voice: 'man'}, "Goodbye!")

  res.statusCode = 200
  res.setHeader("Content-Type", "text/xml")
  res.end(resp.toString())
}

Picker.route("/api/v1/twiml/voice/:refId", handlers.voice)
