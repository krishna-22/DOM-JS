function func()
{
   var a=document.getElementsByTagName('table')[0];
   var b=a.getElementsByTagName('tbody')[0];
   var rows=b.getElementsByTagName('tr');
   var name=document.getElementById('f1').t1.value
  for (i=0;i<rows.length;i++)
   {
       var ab_=rows[i].getElementsByTagName('td')
       if(ab_.length>0)
       {
       for (j=0;j<ab_.length;j++)
        {
           if(ab_[0].innerText==name)
           {
            var k=document.getElementsByTagName('h1')[1];
            k.innerText=ab_[1].innerText+" "+ab_[2].innerText;
            console.log(ab_[1].innerText+" "+ab_[2].innerText)
           }
        }
      }
   }

}