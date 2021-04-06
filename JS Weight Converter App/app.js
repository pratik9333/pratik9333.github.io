document.getElementById('output').style.visibility='hidden';
document.getElementById('lbsInput').addEventListener('input',function(e)
{
    let lbs = e.target.value;
    document.getElementById('output').style.visibility='visible';
    if(document.getElementById('lbsInput').value=='')
    {
        document.getElementById('output').style.visibility='hidden';
    }
    else
    {
        document.getElementById('output').style.visibility='visible';
        document.getElementById('gramsOutput').innerHTML = lbs/0.0022046;
        document.getElementById('kgOutput').innerHTML = lbs/2.2046;
        document.getElementById('oZOutput').innerHTML = lbs*16;
    }
});