import React from 'react';

function L()
{
    return (
        <>
            <div class="x">
                {/* <h1>Hello {n}  😉</h1>
            Name : <input type="text" placeholder="Enter name" value={name} onChange={y} /><br></br><hr></hr>
                <button onClick={x}>Click 😊</button> */}

                <h2><b><u>Registration Form</u></b></h2>
                <form action="index.html" method="POST">
                    <label htmlFor=""><b><u>Name :</u></b></label>
                    <input type="text" placeholder="username" /><br></br>
                    <label htmlFor=""><b><u>E-mail :</u></b></label>
                    <input type="email" placeholder="email" /><br></br>
                    <label htmlFor=""><b><u>Gender :</u></b></label><br></br>
                    <label><input type='radio' name='gender' /> Female</label><br></br>
                    <label><input type='radio' name='gender' /> Male</label><br></br>
                    <label><input type='radio' name='gender' /> Others</label><br></br>
                    <label><b><u>Upoload Image :</u></b></label>
                    <input type="file" /><br />


                    <label><b><u>Skills :</u></b></label><br />
                    <label>Html<input type='checkbox' /></label><br />
                    <label>Css<input type='checkbox' /></label><br />
                    <label>Javascript<input type='checkbox' /></label><br />
                    <label>Python<input type='checkbox' /></label><br />
                    <br />
                    <label><b><u>Profession :</u></b></label>
                    <input list='profs' /> <br /><br />

                    <datalist id='profs'>
                        <option value='Engineer'></option>
                        <option value='Doctor'></option>
                        <option value='Lawyer'></option>
                    </datalist>

                    <label><b><u>Password :</u></b></label>
                    <input type='password' /><br />

                    <label><b><u>Re-Enter Password :</u></b></label>
                    <input type='password' /><br />

                    <input type='submit' class='sbtn' onClick="f()" />
                </form>
            </div>
        </>  
    );
}
export default L;