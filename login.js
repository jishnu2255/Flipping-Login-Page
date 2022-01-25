

function check()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if (username=="ameeen"&& password =="chunaani")
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
