var Twit = require('twit');
require('dotenv').config()

var T = new Twit({
    //Sawp in your own
    consumer_key: process.env.MB_CK,
    consumer_secret: process.env.MB_CS,
    access_token: process.env.MB_AT,
    access_token_secret: process.env.MB_ATS
});

/*T.post('statuses/update', { status: "kw3 2" }, function(err, data, response) {
    if (err) {
        console.log("There was a problem tweeting the message.", err);
    }
    console.log('Data: ');
    console.log(data);

    console.log('Response: ');
    console.log(response);
});*/

var stream = T.stream('statuses/filter', {
    track: 'blep'
});



stream.on('tweet', function(tweet) {

    //console.log(colors.blue(tweet));
    var handle = '@' + tweet.user.screen_name;
    /*T.post('statuses/retweet/:id', { id: '343360866131001345' }, function(err, data, response) {
        console.log(data);
    });*/

   
    T.post('statuses/update', { status: handle + ' hi!', in_reply_to_status_id: tweet.id_str }, function(err, data, response) {
        console.log('Auto Tweet: ');
        console.log(data);

        /*console.log('Error: ');
        console.log(err.red);

        console.log('Response: ');
        console.log(response.magenta);*/
    })

});

stream.on('error', function(err) {
    console.log('ERRORRRRRRRR!!!');
    console.log(err);
});
