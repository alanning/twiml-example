# twiml-example

An example TwiML endpoint for use when making Voice calls with Twilio.


## Live App

http://twiml-example.meteor.com/api/v1/twiml/voice/113


## How to use

Log in to your Twilio account and go to this URL:
https://www.twilio.com/user/account/developer-tools/api-explorer/call-create

Enter in the phone number you want to call and use the twiml-example URL from your live app as the URL field (the endpoint Twilio will ping to get the text to say).

Hosting on meteor.com is a great way to test your twiml endpoint so you can avoid firewall issues.  Just be sure not to deploy any sensitive account info such as your Twilio credentials!

If you want, you can use the Live version of this example app for testing.  Note that it may take a bit for the service to wake up if no-one has used it for a while so this may delay the initial reading.


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
