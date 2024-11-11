

function getCookie(name) {
    let match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? match[2] : null;
}

reset = () =>
{
    var myname = getCookie('name');
    if (myname != null)
    {
        let inputs = document.querySelector('#put').value;
        if (inputs.length > 0)
        {
            var text = "name=";
            text += inputs;
            document.cookie = "name; expires=Thu, 01 Jan 1970 00:00:00 GMT";
            document.cookie = text;
        }
    }
    window.location.reload();
}

window.onload = () =>
{
    if(getCookie('name') == null)
    {
        document.cookie = "name=123";
    }
    let data = getCookie('name');
    //document.querySelector('#test').innerHTML = data;
}

