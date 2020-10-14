import React, { useCallback, useContext,/*  useState  */ } from 'react';
import { UserContext } from '../UserContext';
import { login } from '../utils/login';

function Index() {
    const { user, setUser } = useContext(UserContext);
    // const [user, setUser] = useState();

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
                    id="logout"
                    onClick={() => {
                        // call logout
                        setUser(null);
                    }}
                >
                    logout
                </button>
            ) : (
                    <button
                        id="login"
                        onClick={onLogin}
                    >
                        login
                    </button>
                )}
        </div>
    );
}
// Index.displayName = 'Index';

export default Index