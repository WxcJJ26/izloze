//var, let, const
//console.log
const vardi = ['Sandra Vera', 'Laura Petere', 'Anna Ločmele', 'Krišjānis Mednis', 'Rihards Reinfelds'];
const balvas = ['Dators', 'Telefons', 'Gludeklis', 'Puķes', 'Fotoaparāts'];
const naudaskopa = 1000000;//sis pat netiks izmantots
let uzvaretajuskaits = 5;
let balvuskaits = 5;
let rindas = document.querySelector('.rindas'); //pievieno mainīgo
rindas.innerHTML = ' ';
let rindas2 = document.querySelector('.balvas'); //pievieno mainīgo
balvas.innerHTML = ' ';
for (let i = 0; i < uzvaretajuskaits; i++) {//cikls, i++ paņem vienu uz preikšu un limits ir uzvaretaju skaits

    let rand = Math.random() * vardi.length; //vardu skaitu mainigais, kas tiks randomizets

    //Math.random=Math.random()*5
    //nejauši izvelas no 5
    rand = Math.floor(rand);//Math floor -  noapaļo uz leju

    let uzvaretajs = vardi[rand];
    //console.log(uzvaretajs);

    let rand1 = Math.random() * balvas.length;
    rand1 = Math.floor(rand1);
    let uzvaretajs1 = balvas[rand1];
    

    rindas.innerHTML += ` 
<tr>
<td>${i + 1}</td> 
<td>${uzvaretajs}</td>
<td>${uzvaretajs1}</td>
</tr>`//izvada vairakas rindas

}

