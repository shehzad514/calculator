let input = document.querySelector("#inputs");
let btn = document.getElementsByTagName("button");

for (let a = 0 ;btn.length>a;a++)
{
    btn[a].addEventListener("click" , function()
    {
        // console.log(btn[a]);
        if(btn[a].innerHTML == "=")
        {
            input.value = eval(input.value);
            return;
        }
         if (btn[a].innerHTML=="C")
        {
            input.value="";
            return;
        }
        input.value += btn[a].innerHTML;
    })
   
}