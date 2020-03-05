var config;

if (process.env.NODE_ENV === "production") {
  config = {
    apiUrl: "https://api.xxx.com",
    timeoutDuration: 30000,
    someOtherProps: 'xyz'
  };
} else {
  config = {
    apiUrl: "http://localhost:3000/api/V1",
    timeoutDuration: 1000,
    someOtherProps: 'abc'
  };
}

export {config}