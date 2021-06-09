import React from 'react';
import './Login.css';

export default function Login() {
    return (
        <div className="login-wrapper">
            <h2>Kirjaudu sisään</h2>
            <form>
                <label>
                    <p>Käyttäjätunnus:</p>
                    <input type="text" />
                </label>
                <label>
                    <p>Salasana:</p>
                    <input type="password" />
                </label>
                <div>
                    <button type="submit">Kirjaudu</button>
                </div>
            </form>
        </div>
    )
}