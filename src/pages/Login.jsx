import { React } from 'react';
import {
    useLoaderData,
    Form,
    redirect,
    useActionData,
    useNavigation
} from 'react-router-dom';
import { loginUser } from '../../api';



export function loader({ request }) {
    return new URL(request.url).searchParams.get("message")
}


export async function action({ request }) {
    const formData = await request.formData()
    const email = formData.get('email')
    const password = formData.get('password')
    const pathname = new URL(request.url)
    .searchParams.get('redirectTo') || '/host'
    try {
        const data = await loginUser({ email, password })
        localStorage.setItem('loggedin', true)
        return redirect(pathname)
    } catch (err) {
        return err.message
    }
}


function Login() {
    const message = useLoaderData()
    const errorMessage = useActionData()
    const navigation = useNavigation()


    return (
        <div className="login--container">
            <h1>Sign in to your account</h1>
            {message && <h4>{message}</h4>}
            {errorMessage && <p>{errorMessage}</p>}

            <Form
                method='post'
                className="login--form"
                replace
            >
                <input
                    name="email"
                    type="email"
                    placeholder="Email address"
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                />
                <button
                    disabled={navigation.state === "submitting"}
                >
                    {navigation.state === "submitting"
                        ? 'Loggin in...'
                        : 'Log in'}
                </button>
            </Form>
            <div className='user--data'>
                <h4>User created in the server.js for testing</h4>
                <p>Email: b@b.com</p>
                <p>Password: p123</p>
            </div>
            
        </div>
    )
}

export default Login