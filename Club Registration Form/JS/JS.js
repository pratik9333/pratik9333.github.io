function Validate()
{
    var i=document.getElementsByTagName("input");
    var country=document.getElementById("country");
    var month=document.getElementById("month");
    var date=document.getElementById("date");
    var year=document.getElementById("year");
    var letters = /^[A-Za-z]+$/;
    var regx= /^[7-9][0-9]{9}$/;
    var email=  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var flag=true;

    if(i[0].value.match(letters) && i[1].value.match(letters))
    {}
    else
    {
        flag=false;
        alert("Enter Correct Name");
    }

    if(i[2].value.match(email))
    {}
    else
    {
        flag=false;
        alert("Enter Correct Email");
    }

    if(i[3].value.length==2 && regx.test(i[4].value))
    {}
    else
    {
        flag=false;
        alert("Enter Correct Phone Number");
    }

    if(i[7].value.match(letters))
    {}
    else
    {
        flag=false;
        alert("Enter Correct City Name");
    }

    if(i[8].value.match(letters))
    {}
    else
    {
        flag=false;
        alert("Enter Correct State/Province");
    }

    if(i[9].value.length==6)
    {}
    else
    {
        flag=false;
        alert("Enter Correct Zip/Postal Code");
    }
    if(country.value!="SELECT COUNTRY")
    {}
    else
    {
        flag=false;
        alert("Select Country");
    }

    if(month.value!="SELECT MONTH")
    {}
    else
    {
        flag=false;
        alert("Select Month");
    }

    if(date.value!="SELECT DAY")
    {}
    else
    {
        flag=false;
        alert("Select Date");
    }

    if(year.value!="SELECT YEAR")
    {}
    else
    {
        flag=false;
        alert("Select Year");
    }
    if(flag==true)
    {
        return true;
    }
    else
    {
        return false;
    }
}