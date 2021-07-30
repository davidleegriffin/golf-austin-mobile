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

DEMO EXAMPLE
![Demo Example](./golf-austin-mobile-demo.gif)