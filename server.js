"use strict"

var handlers = {},
    bodyParser = Meteor.npmRequire('body-parser')

Picker.middleware(bodyParser.json())
Picker.middleware(bodyParser.urlencoded( {extended: false} ))

handlers.voice = function (params, req, res, next) {
  var twilio = Twilio,
      sig = req.headers['x-twilio-signature'],
      url,
      resp

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
  resp.say({voice: 'man'}, 'Hello, thanks for using Meteor and Twilio!')

  res.statusCode = 200
  res.setHeader("Content-Type", "text/xml")
  res.end(resp.toString())
}

Picker.route("/api/v1/twiml/voice/:refId", handlers.voice)
