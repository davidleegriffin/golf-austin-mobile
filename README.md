# golf-austin-mobile

Install Expo
```
npm install -g expo-cli
```

Clone the repo
```
git clone https://github.com/davidleegriffin/golf-austin-mobile
cd golf-austin-mobile
```

Install Dependancies
```
npm install
```

Start up StepZen
```
$ cd stepzen
$ stepzen start
```


Manually add your admin key and uri in the App.tsx. 
```
const client = new ApolloClient({
	link: createHttpLink({
		credentials: "same-origin",
		headers: {
			Authorization: `Apikey {add_key}`,
		},
		uri: "{add_uri}",
	}),
	cache: new InMemoryCache(),
});
```

Start up the development environment
```
expo start
```

Download the expo App on your phone and scan the QR code or open it in your IOS simulator.


<!-- https://accounts.google.com/o/oauth2/token?client_id=747145895419-026k5qev1sfhi4k21tbi7dfcucdqv6e5.apps.googleusercontent.com
&client_secret=TUw0CB23Kz45VSVJYZWBZYC3
&grant_type=authorization_code&code=4/0AX4XfWhjiGIRwXMQNMlF4Axvj-WlNhDSZVY42Jpz-LgOt3c5VUDcpbWCYw2zIYHdNtt7GQ&redirect_uri=https://stepzen.com

https://accounts.google.com/o/oauth2/token?client_id=747145895419-026k5qev1sfhi4k21tbi7dfcucdqv6e5.apps.googleusercontent.com
&client_secret=TUw0CB23Kz45VSVJYZWBZYC3
&grant_type=authorization_code&code=4/0AX4XfWhjiGIRwXMQNMlF4Axvj-WlNhDSZVY42Jpz-LgOt3c5VUDcpbWCYw2zIYHdNtt7GQ&redirect_uri=https://stepzen.com

    "refresh_token": "1//0fLi8aDmOUGWkCgYIARAAGA8SNwF-L9IruP3Z-ICOtHx_piCFGgsKc2c5sdmrmtBRQP6q_BkLm6Dp19SS80ehgEi_nvQ2sivRPvc", -->
