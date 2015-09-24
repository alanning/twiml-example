# twiml-example

An example TwiML endpoint for use when making Voice calls with Twilio.


## Live App

http://twiml-example.meteor.com/api/v1/twiml/voice/113


## Server Logs

To view server logs when deployed on meteor.com's free hosting, enter the following on your command line:

```
$ meteor logs twiml-example.meteor.com > logs.txt
```

## Production Use

There are two changes that should be made before using this code in a live system.

* POST-only

The TwiML endpoint in this example responds to all methods but in production, you probably want to only accept POST requests.

* validateRequest

You should also include use of [validateRequest](http://twilio.github.io/twilio-node/#validateRequest) when using this code in production.  It is left out of the example because it requires a Twilio Auth Token.
