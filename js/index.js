var requestURL = './lib/data.json';
var request = new XMLHttpRequest();
var chinese = [];

function getCookie(name)
{
    let match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? match[2] : null;
}

getran = (min, max) =>
{
    min = Math.ceil(min);
    max = Math.floor(max + 1);
    return Math.floor(Math.random() * (max - min) + min);
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

text = (temp) =>
{
    let quest = document.querySelector('#questions');
    var put = "<span>" + temp + "</span>";
    quest.innerHTML=put;
}

let data;

request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function()
{
    data = request.response.data
}

window.onload = () =>
{
    if(getCookie('name') == null)
    {
        document.cookie = "name=123";
    }

    let now = getran(0,data.length - 1);
    /*if(now == temp)
    {
        now = getran(0,100);
    }
    temp = now;*/
    text(data[now][0]);
    //window.location.reload();
}

