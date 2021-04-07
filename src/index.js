import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Context from "./components/context/Context";
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(
	
	<React.StrictMode>
		<Provider store={store}>
			<Context>
				<App />
			</Context>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);


reportWebVitals();
