

function check()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if (username=="jishnu"&& password =="2255")
    {
        window.location ="http://projava.rf.gd"
        alert("Login Successfull");
        return false;

    }
    else
    {
        alert("Incorrect credentils");
    }
}