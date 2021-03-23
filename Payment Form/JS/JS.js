var i = document.getElementsByTagName("input");

function Validate_name() {
    var Ern = document.getElementById("Ern");
    var letters = /^[A-Za-z]+$/;

    if (i[0].value.match(letters))
        Ern.style.display = "none";

    else 
        Ern.style.display = "block";
}

function Validate_email() {
    var Ere = document.getElementById("Ere");
    var email = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (i[3].value.match(email))
        Ere.style.display = "none";

    else
        Ere.style.display = "block";

}

function Validate_pc() {
    var Erp = document.getElementById("Erp");
    if (i[4].value.length == 6) 
        Erp.style.display = "none";

    else 
        Erp.style.display = "block";
}
function Validate_ct()
{
    var car=document.getElementById("card").value;
    var Erct=document.getElementById("Erct");
    if(car == "--Select Card Type--")
        Erct.style.display="block";

    else
        Erct.style.display="none";
}
function Validate_cn()
{
    var Erc = document.getElementById("Erc");
    var visa = document.getElementById("visa");
    var ae = document.getElementById("ae");
    var dsvr = document.getElementById("dsvr");
    var mc = document.getElementById("mc");

    var american_exp = /^(?:3[47][0-9]{13})$/;
    var v = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    var master_card = /^(?:5[1-5][0-9]{14})$/;
    var discover = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;

    if(i[5].value.match(american_exp))
    {
        Erc.style.display="none";
        ae.style.display="inline";
        ae.style.right="18px"
        visa.style.display="none";
        mc.style.display="none";
        dsvr.style.display="none";
    }
    else if(i[5].value.match(v))
    {
        Erc.style.display="none";
        ae.style.display="none";
        visa.style.display="inline";
        mc.style.display="none";
        dsvr.style.display="none";
    }
    else if(i[5].value.match(master_card))
    {
        Erc.style.display="none";
        ae.style.display="none";
        mc.style.right="9px";
        visa.style.display="none";
        mc.style.display="inline";
        dsvr.style.display="none";
    }
    else if(i[5].value.match(discover))
    {
        Erc.style.display="none";
        ae.style.display="none";
        dsvr.style.right="27px"
        visa.style.display="none";
        mc.style.display="none";
        dsvr.style.display="visa";
    }
    else
    {
        ae.style.right="0px"
        dsvr.style.right="0px"
        mc.style.right="0px";
        Erc.style.display="block";
        ae.style.display="inline";
        visa.style.display="inline";
        mc.style.display="inline";
        dsvr.style.display="inline";
    }
}

function Validate_cvv()
{
    var Ercv = document.getElementById("Ercv");
    if(i[7].value.length>3)
        Ercv.style.display = "block"
    else
        Ercv.style.display = "none"
}

function Validate()
{
    var n=document.getElementById("Ern");
    var e=document.getElementById("Ere");
    var p=document.getElementById("Erp");
    var cn=document.getElementById("Erc");
    var Erct=document.getElementById("Erct");
    var Ercv = document.getElementById("Ercv");
    Validate_ct();
    if(n.style.display == "block" ||e.style.display == "block"||p.style.display == "block"||cn.style.display == "block"||Erct.style.display == "block"||Ercv.style.display == "block")
        return false;
    else
        return true;
}