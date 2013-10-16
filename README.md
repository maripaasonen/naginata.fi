# naginata.fi

A web site in Finland for an ancient martial art from Japan.

All the code is under Creative Commons License - Attribution & Share Alike (http://creativecommons.org/licenses/by-sa/3.0/).
Full legal text available in `LICENSE.md`.

[![Dependency Status](https://gemnasium.com/paazmaya/naginata.fi.png)](https://gemnasium.com/paazmaya/naginata.fi)

## Technologies

 * Apache web server with `mod_rewrite` (http://httpd.apache.org/)
 * PHP 5.4 (http://www.php.net/)
 * MySQL database as content storage (http://www.mysql.com/)
 * JSON used as a data format for configuration (http://www.json.org/)
 * HTML5 for markup (http://developers.whatwg.org/)
 * CSS3 for styling (http://www.css3.info/modules/)
 * Local Storage replacing browser cookies (http://www.w3.org/TR/webstorage/)
 * Application Cache for faster loading and possible offline browsing (http://www.html5rocks.com/en/tutorials/appcache/beginner/)
 * Google Web Fonts (http://www.google.com/fonts)
 * Node.js (http://nodejs.org)
 * Express.js (http://expressjs.com/)
 * Jade (http://jade-lang.com/)

## About the martial art

Naginata is a weapon made of a long wooden stick on which a curved blade is attached.

The art of using this weapon is often called simply as Naginata, but more accurately
it can be called as Atarashii Naginata, in the case of the post-Meiji era standarsised
version.

The method of using naginata as a weapon has existed much longer and some around 500 styles
have existed in the past.

Today these are still some ten active style, of which most of them contain other weapons
aside using just a naginata. In any case in these styles naginata is used against a sword.

This website will focus on the following two:

 * Atarashii Naginatado (http://naginata.jp/)
 * Jikishinkageryu Naginatajutsu (http://www.jikishin-naginata.jp/)

## About this software project

The main reason for this website and this Github project is to learn to use the given
technologies and to promote the martial art.

The domain, `naginata.fi` is privately registered to Jukka Paasonen.

Leena Lecklin was kind enough to draw the `naginata-bogu-chudan-artwork-lecklin.png` picture used in
_Atarashii Naginata_ page.

Contributors are welcome.

[JetBrains](http://www.jetbrains.com/) has kindly provided this project with an open source license for
[PhpStorm IDE](http://www.jetbrains.com/phpstorm/).
![Developed with JetBrains PhpStorm](http://www.jetbrains.com/phpstorm/documentation/phpstorm_banners/phpstorm1/phpstorm125x37_white.gif)


## PHP libraries used and included

 * Possible contributors and administrators can login via OpenID (https://openid.net/) which is supported via LightOpenID (https://gitorious.org/~paazmaya/lightopenid/paazmayas-lightopenid)
 * Edited content is saved for moderation and diff generated with PHP-Diff (https://github.com/chrisboulton/php-diff)
 * PHPMailer for sending those diffs to moderator (https://github.com/Synchro/PHPMailer)
 * HybridAuth used for authentication via 3rd party providers (http://hybridauth.sourceforge.net)

## JavaScript libraries used and included

 * jQuery for client interaction (http://jquery.com/)
 * Content editing highlight via CodeMirror (http://codemirror.net/)
 * jQuery plugin "Colorbox" used for opening content in same page (http://jacklmoore.com/colorbox/)

## Other notes

 * Both JavaScript and CSS files are combined to a single file, minified and finally compressed.
 * This reduces the amount of HTTP requests and if supported by the client, the download size.
 * Unused JavaScript could be stripped out with JSlim (https://github.com/zgrossbart/jslim)
 * 3rd party media service data cached locally server side in order to reduce API calls. cURL is optimal for fetching updates (http://curl.haxx.se/)
 * Microformats add meaning to what is already semantically correct markup (http://microformats.org/)
 * Open Graph Protocol, mainly used by Facebook makes "liking" more trackable (http://ogp.me/)
 * Speed study (http://blog.chromium.org/2010/07/do-you-know-how-slow-your-web-page-is.html)

## Configuration file structure

The `naginata-config.json` file is for configuring all API keys, database access, etc.
Since PHP `[json_decode](http://php.net/manual/en/function.json-decode.php json_decode)` does not supported
JSON string that contains comments, the file contained in this repository do not provide documentation.
Thus the documentation for this file is below.

```js
"database": {
    "type": "sqlite", // PDO driver name, http://php.net/manual/en/pdo.getavailabledrivers.php
    "address": "naginata.fi.sqlite", // Server address, or file path for SQLite
    "database": "", // Name of the database, if not SQLite
    "username": "",
    "password": ""
},
"email": { // Email server settings. SMTP is used for sending emails
    "address": "email@address.com", // address of the sender and who will get all copies
    "name": "Some Tonttu", // name of the owner of the address abowe
    "username": "", // username for the servers listed below
    "password": "", // password for the servers listed below
    "pop3": "pop3.address.com:110",
    "smtp": "smtp.address.com:587"
},
"facebook": { // Facebook API keys if needed
    "app_id": "",
    "secret": "",
    "admins": ""
},
"flickr": { // Flickr API keys if needed
    "apikey": "",
    "secret": ""
},
"google": { // Google API keys if needed
    "consumer_key": "",
    "consumer_secret": ""
},
"twitter": { // Twitter API keys if needed
    "consumer_key": "",
    "consumer_secret": "",
    "access_token": "",
    "access_token_secret": "",
    "request_token_url": "https://api.twitter.com/oauth/request_token",
    "authorize_url": "https://api.twitter.com/oauth/authorize",
    "access_token_url": "https://api.twitter.com/oauth/access_token"
},
"vimeo": { // Vimeo API keys if needed
},
"youtube": { // Youtube API keys if needed
},
"users": { // Users that can login via OpenID, only email is used
    "administrators": [
        "olavic@gmail.com"
    ],
    "contributors": [

    ]
}
```

## Grading requirements for printing

The **Finnish Kendo Association - Naginata Grading Rules** are included in
this repository as Markdown files. In order to print those, they should
be converted to PDF files first.
[This can be achieved with _pandoc_](http://johnmacfarlane.net/pandoc/).

```sh
pandoc -V geometry:margin=0.5in -o grading-rules-english.md grading-rules-english.pdf
```


## TODO

 * Translations for application strings
 * Configuration of `language_TERRITORY`
 * Separate handling per page type, not all are simple articles
 * OpenID login redirects to wrong page. It is always / when there should be something more.
 * Facebook liking and related, https://developers.facebook.com/tools/debug/og/object?q=naginata.fi
