# API documenttion

## Endpoints functions explanation
They exist in 'api/users',in  [uid].js and index.js

[uid].js handles things like GET, Put/post and DELETE, as well as other operations dealing with the user
index.js- this file initializes a user, while [uid]handles the rest of the operations pertaining to the user

### /api/users/'uid' (GET) //this will get info of specified user
#### Request cURL
```
curl -X GET http://localhost:3000/api/users/UQRvIqdnqQgTwQ33piVpRlZgTPy2
```
#### Response body
```
{"firstname":"Andrew","phone":"3344301846","created":"4/29/2022, 12:00:38 PM","lastInitial":"B","email":"abyerle@gmail.com","updated":"4/29/2022, 12:00:43 PM","password":"password","lastLoginDate":"4/29/2022, 12:00:43 PM","uid":"UQRvIqdnqQgTwQ33piVpRlZgTPy2","lastname":"Byerle","username":"abyerle@gmail.com","firstInitial":"A"}
```
#### Response headers
```
< HTTP/1.1 200 OK
< Content-Type: application/json; charset=utf-8
< ETag: "149-V8UP5QiPJ+7m3wgDHPIumwsrPns"
< Content-Length: 329
< Vary: Accept-Encoding
< Date: Fri, 29 Apr 2022 17:19:33 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5
```

### /api/users/'uid' (GET) //this will get info of specified user


#### Request cURL
```
curl -v GET http://localhost:3000/api/users/NaCEINhpKXTzYXFfkcGGnHxtkZq1 // different user than before
```
#### Response body
```
{"lastname":"meme","email":"dm@eemail.com","lastInitial":"m","created":"4/29/2022, 2:01:30 PM","password":"password","uid":"NaCEINhpKXTzYXFfkcGGnHxtkZq1","firstInitial":"d","firstname":"dank ","username":"dm","phone":"111-111-1111"}
```

#### Response headers
```
< HTTP/1.1 200 OK
< Content-Type: application/json; charset=utf-8
< ETag: "e8-koFDXc5l4uXCEG9tT6E4Z3wnbc8"
< Content-Length: 232
< Vary: Accept-Encoding
< Date: Fri, 29 Apr 2022 18:47:05 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5
```


### /api/users/'uid' (GET) //this will get info of specified user
#### Request cURL
```
curl -v GET http://localhost:3000/api/users/iejoKlxINmXy8x9XeX6l8A5tb8y1 // different user than before
```
#### Response body
```
{"phone":"888-999-9898","email":"ir@email.com","uid":"iejoKlxINmXy8x9XeX6l8A5tb8y1","firstInitial":"i","lastname":"idoo","password":"password","lastInitial":"i","created":"4/29/2022, 2:00:45 PM","username":"iroo","firstname":"irur"}
```

#### Response headers
```
< HTTP/1.1 200 OK
< Content-Type: application/json; charset=utf-8
< ETag: "e8-KQ0qnvlMnaJ5HsoETgsbvFn4BoU"
< Content-Length: 232
< Vary: Accept-Encoding
< Date: Fri, 29 Apr 2022 18:48:21 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5
```

### /api/hello (GET)  //this will list all information of all current users


#### Request cURL

```
curl -X GET http://localhost:3000/api/hello
```

#### Response body

```
{"NaCEINhpKXTzYXFfkcGGnHxtkZq1":{"lastInitial":"m","uid":"NaCEINhpKXTzYXFfkcGGnHxtkZq1","created":"4/29/2022, 2:01:30 PM","username":"dm","phone":"111-111-1111","email":"dm@eemail.com","password":"password","lastname":"meme","firstInitial":"d","firstname":"dank "},"a1fsvVOTW0OUgHb4eHRV6MlcKTc2":{"lastInitial":"d","email":"jogndoe@email.com","uid":"a1fsvVOTW0OUgHb4eHRV6MlcKTc2","firstInitial":"j","created":"4/29/2022, 1:59:28 PM","lastname":"doe","password":"password","username":"johnny@gmail.com","firstname":"john","phone":"123-456-7890"},"iejoKlxINmXy8x9XeX6l8A5tb8y1":{"firstInitial":"i","email":"ir@email.com","phone":"888-999-9898","password":"password","lastname":"idoo","firstname":"irur","created":"4/29/2022, 2:00:45 PM","lastInitial":"i","username":"iroo","uid":"iejoKlxINmXy8x9XeX6l8A5tb8y1"},"ysgXDpBvBtX2s599d309WHYOmdg1":{"uid":"ysgXDpBvBtX2s599d309WHYOmdg1","firstname":"J1","phone":"333-333-3333","username":"j","lastname":"D1","password":"password","created":"4/29/2022, 2:00:09 PM","email":"J@email.com","firstInitial":"J","lastInitial":"D"}}
```

#### Response headers

```
< HTTP/1.1 200 OK
< Content-Type: application/json; charset=utf-8
< ETag: "429-uqxPvxiT7T220PZFH1J5saZSExM"
< Content-Length: 1065
< Vary: Accept-Encoding
< Date: Fri, 29 Apr 2022 18:42:10 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5
```


### /api/users/ (DElETE) // this will remove all instances of user from the firebase database

#### Request cURL

```
curl -X DELETE http://localhost:3000/api/users/UQRvIqdnqQgTwQ33piVpRlZgTPy2
```

#### Response body

```
// nothing happens because user 'UQRvIqdnqQgTwQ33piVpRlZgTPy2' was deleted from the firebase databse
```

#### Response headers

```
 HTTP/1.1 404 Not Found
< Date: Fri, 29 Apr 2022 17:51:17 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5
< Transfer-Encoding: chunked
```
// 404 not found because user doen't exist which is good


### /api/users/ (DElETE)// this will remove all instances of user from the firebase database

#### Request cURL

```
curl -X DELETE http://localhost:3000/api/users/a1fsvVOTW0OUgHb4eHRV6MlcKTc2
```

#### Response body

```
{"email":"jogndoe@email.com","uid":"a1fsvVOTW0OUgHb4eHRV6MlcKTc2","username":"johnny@gmail.com","firstInitial":"j","created":"4/29/2022, 1:59:28 PM","lastInitial":"d","phone":"123-456-7890","password":"password","lastname":"doe","firstname":"john"}


// nothing happens if you use -x instead of -v because user 'a1fsvVOTW0OUgHb4eHRV6MlcKTc2' was deleted from the firebase databse
```

#### Response headers

```
 HTTP/1.1 404 Not Found
< Date: Fri, 29 Apr 2022 17:51:17 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5
< Transfer-Encoding: chunked
```
// 404 not found because user doen't exist which is good





### /api/user/'uid' (PUT) // all this does this is updates/overwrites the time when the user last logged in.

#### Request cURL

```
curl -X PUT http://localhost:3000/api/users/iejoKlxINmXy8x9XeX6l8A5tb8y1
```

#### Response body

```
/*
nothing happens, 
but when you run curl -v GET http://localhost:3000/api/users/iejoKlxINmXy8x9XeX6l8A5tb8y1
You get:
{"firstInitial":"i","uid":"iejoKlxINmXy8x9XeX6l8A5tb8y1","username":"iroo","lastInitial":"i","created":"4/29/2022, 2:00:45 PM","firstname":"irur","updated":"4/29/2022, 3:39:09 PM","password":"password","email":"ir@email.com","lastname":"idoo","phone":"888-999-9898"}

There is now a new '"updated":"4/29/2022, 3:39:09 PM"' which adds an updated timestamp and date for when it was last logged in.
*/
```

#### Response headers

```
< HTTP/1.1 200 OK
< Content-Type: application/json; charset=utf-8
< ETag: "10a-Cdsc6gOzbQbIEx3TD/n/rV5Wf24"
< Content-Length: 266
< Vary: Accept-Encoding
< Date: Fri, 29 Apr 2022 19:46:08 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5
```



















# lets compare more carefully what happens when you do curl -X PUT
## I will first use GET for user "NaCEINhpKXTzYXFfkcGGnHxtkZq1", then I will do PUT to better demonstrate the difference


### /api/users/'uid' (GET) //this will get info of specified user
#### Request cURL
```
curl -v GET http://localhost:3000/api/users/NaCEINhpKXTzYXFfkcGGnHxtkZq1 // different user than before
```
#### Response body
```
{"lastname":"meme","email":"dm@eemail.com","lastInitial":"m","created":"4/29/2022, 2:01:30 PM","password":"password","uid":"NaCEINhpKXTzYXFfkcGGnHxtkZq1","firstInitial":"d","firstname":"dank ","username":"dm","phone":"111-111-1111"}
```

### /api/user/'uid' (PUT) // all this does this updates the time 
#### Request cURL

```
curl -X PUT http://localhost:3000/api/users/NaCEINhpKXTzYXFfkcGGnHxtkZq1
```

#### Response body
```
/*
nothing happens
*/
// but when you run 'curl -X GET http://localhost:3000/api/users/NaCEINhpKXTzYXFfkcGGnHxtkZq1

Response body-
{"firstInitial":"d","lastInitial":"m","lastname":"meme","username":"dm","uid":"NaCEINhpKXTzYXFfkcGGnHxtkZq1","phone":"111-111-1111","firstname":"dank ","email":"dm@eemail.com","created":"4/29/2022, 2:01:30 PM","password":"password","updated":"4/29/2022, 4:06:18 PM"}

### The difference is the "updated":"4/29/2022, 4:06:18 PM" time/date stamp that logs when the user last logged in or updated his/her information.














