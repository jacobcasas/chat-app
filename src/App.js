import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () => {
	if(!localStorage.getItem('username')) return <LoginForm />

	return (
		<ChatEngine
			height = "100vh"
			projectID = "81a00ed1-3199-4142-bc72-a97fedc04a2e"
			userName = {localStorage.getItem('username')}
			userSecret = {localStorage.getItem('password')}
			renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps} />}
			/>	
		);
}

export default App;