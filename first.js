
var productNameInp = document.getElementById('productNameInput');
var productPriceInp = document.getElementById('productPriceInput');
var productCatogreInp = document.getElementById('productCatogreInput');
var productDesInp = document.getElementById('productDesInput');
var productContaner  ;

if(localStorage.getItem('myProdects') == null)
{
    productContaner = [];
}
else
{
   productContaner = JSON.parse( localStorage.getItem('myProdects') );
   displayProdect();
}
 function addprodect()
{
     Prodect =
     {
     name:productNameInp.value,
     price:productPriceInp.value,
     catogre:productCatogreInp.value,
     Des:productDesInp.value
     }
     productContaner.push(Prodect);
     localStorage.setItem('myProdects', JSON.stringify(productContaner));
     displayProdect();
     clearForm();
}
 function clearForm()
 {
     productNameInp.value = '',
     productPriceInp.value = '',
     productCatogreInp.value = '',
     productDesInp.value = ''
 }

function displayProdect()
{
     var cartoona = '';
     for (var i=0 ; i<productContaner.length ; i++)
     {
           cartoona += `<tr>          
           <td>`+i+`</td>
           <td>`+productContaner[i].name+`</td>
           <td>`+productContaner[i].price+`</td>
           <td>`+productContaner[i].catogre+`</td>
           <td>`+productContaner[i].Des+`</td>
          <td><button onclick='deleteProduct(`+ i +`);'  class='btn btn-danger'>delete</button></td>


           </tr>`;
     }
   document.getElementById('addBody').innerHTML=cartoona;
}





function searchproduct(term)
{
     var cartoona = `` ;
     var cartoona2 = ``;     
     for(var i=0 ; i < productContaner.length; i++ )
     {
          if(productContaner[i].name.includes(term)== true)
          {
               cartoona += `<tr>          
               <td>`+productContaner[i].name+`</td>
               <td>`+productContaner[i].price+`</td>
               <td>`+productContaner[i].catogre+`</td>
               <td>`+productContaner[i].Des+`</td>
               </tr>`;


               cartoona2 += `<p>`+productContaner[i].name+`</p>`
          }

     }
     document.getElementById('addBody').innerHTML=cartoona;
     document.getElementById('searchResilt').innerHTML=cartoona2;

}







function deleteProduct(index)
{
     productContaner.splice(index,1);
     localStorage.setItem('myProdects', JSON.stringify(productContaner));
     displayProdect();

}