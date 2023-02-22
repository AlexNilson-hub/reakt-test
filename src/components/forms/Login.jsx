import React from 'react';
// import Item from "../Items/Item";


export default function Login() {
    // const [value, setValue] = useState([])
    // const [isLoading, error, data] = useFetch('https://jsonplaceholder.typicode.com/posts')
    // if (isLoading) return "Loading..."
    // if (error) return "Error..."


    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //         .then(res => {
    //             if (res.ok) {
    //                 return res.json()
    //             }
    //             throw res
    //         })
    //         .then(resJson => {
    //             setValue(resJson)
    //         })
    //         .catch(error => {
    //             console.log("Error fetching data: ", error)
    //         })
    // }, [])
    return (
        <>
            {/*<div>*/}
            {/*    {data.result[0]}*/}
            {/*    <pre>*/}
            {/*        {JSON.stringify(data, null, 2)}*/}
            {/*    </pre>*/}
            {/*    /!*{value.map((val) => <Item key={val.id} title={val.title} id={val.id}/>)}*!/*/}
            {/*</div>*/}
            <h3>Введите Логин</h3>
            <form>
                <label>Login:
                    <input type="text" name="username"/>
                </label>
                <label>Password:
                    <input type="password" name="password"/>
                </label>
                <button type="submit">Login</button>
            </form>
        </>
    )
}




// const Login = () => {
//     function handleSubmit(event) {
//         event.preventDefault();
//
//         const userDate = {
//             username: event.target.username.value,
//             password: event.target.password.value,
//         }
//         console.log(userDate)
//         let login = JSON.parse(JSON.stringify(userDate))
//         // let str = JSON.stringify(userDate)
//         // let date = JSON.parse(str)
//         // return {date}
//     }
