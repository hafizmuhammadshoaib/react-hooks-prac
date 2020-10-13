import React, { useCallback, useContext } from 'react';
import { UserContext } from '../UserContext';
import { login } from '../utils/login';

export function Index() {
    const { user, setUser } = useContext(UserContext);

    const onLogin = useCallback(async () => {
        const user = await login();
        setUser(user);
    }, [setUser])

    return (
        <div>
            <h2>Home</h2>
            <pre>{JSON.stringify(user, null, 2)}</pre>
            {user ? (
                <button
                    onClick={() => {
                        // call logout
                        setUser(null);
                    }}
                >
                    logout
                </button>
            ) : (
                    <button
                        onClick={onLogin}
                    >
                        login
                    </button>
                )}
        </div>
    );
}