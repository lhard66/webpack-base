import '../style/main.css';

document.getElementById('num').innerHTML = 'hello worl000000000d!!9999!';

if (process.env.NODE_ENV == 'production') {
  console.log('Looks like we are in production mode!');
} else {
  console.log('we are in development mode!');
}
