# cf-workerd-crash-minimal

**The bus 10 and maximum call stack size errors that this repository was made to reproduce have been solved
in Wrangler 3.2**

To reproduce the errors as they were downgrade this repository to a prior version of Wrangler
(i.e., `3.1.2` for the maximum call stack size error and `3.1.1` for the bus 10 error) and then:

1. Run `yarn install`
2. Run `yarn start`
3. Watch the stress test in the terminal until the error occurs

https://user-images.githubusercontent.com/654783/234979126-830e7ad0-9649-4a13-84e6-fd30d1437868.mp4
