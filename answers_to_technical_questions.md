**1)**
Approximately 20 hours to get it to working; then, I went down a tunnel of constantly trying to improve data management between React components that ended up backfiring. So, add 5 hours on top of that. Researching and Implementing the React.Context took a little while since it was my first time, but was worth it since I was excited about an alternative to Redux for state management.

**2)**
React Contexts API. I wanted to create an overarching layer that not only holds a JWT authentication token, but checks that it is present and verified. This layer component will then render the proper routes/views to the user based on authentication, thereby satisfying the need for protected routes simply by taking them out of the equation.

The context function:

```const AuthContext = React.createContext()


function AuthProvider({ children, value }) {
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

const AuthConsumer = AuthContext.Consumer

export { AuthProvider, AuthConsumer }
```

And staying right under the router component, controlling which view/container components are shown to user:

```<Router>
					<AuthProvider value={this.state}>
						<Navigation/>

						<hr/>
						<Switch>
							<Route exact path="/" component={() => <LogInPage setUserAuth={this.setUserAuth} />} />
							<Route path="/admin-dashboard" component={() => <TeamDashboard email={this.state.currentEmail} /> } />
							<Route path="/sign-up" component={() => <SignUpPage setUserAuth={this.setUserAuth} />} />
						</Switch>
					</AuthProvider>
				</Router>
```
**3**
(I) Monitoring tools
-  Page Speed Insights
- Tools at sitespeed.io

(II) Web Crawling/Automation Scripts
- Either using Selenium to crawl through and run basic user/customer processes, or even using taking pictures for every page load (useful for images missing, transition slowdowns)

(III) Manually By hand
- Going through with dummy accounts, to pretend to be a customer and click around. Tedious, but sometimes necessary.

- Things I've done to fix slowdowns: compressing images, server side rendering/caching.

**4**
```
{
  "name": "Mac",
  "lastname": "McCarthy",
  "age": 31,
  "livesin": "Denver",
  "passions": [
    "Brazilian JiuJitsu",
    "Building with code, datasets, and APIs",
    "Brewing mead",
    "Travelling to non-English speaking countries and struggling to communicate"
  ],
  "interests": [
    "Tech",
    "History",
    "How people think",
    "Languages"
  ],
  "dreams": [
    "To look back and know I tried my best, in nearly all situations, to make a difference."
  ],
  "5 year goals": [
    "Buy a house",
    "Get purple belt",
    "Be a competitor at mead competitions",
    "Climb Mount Kilimanjaro",
    "Travel horseback or dirt bike in Mongolia"
  ]
}
```



