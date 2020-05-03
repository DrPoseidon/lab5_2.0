const btnCreate = document.querySelector('.btnCreateVertex');
const btnOutMatrix = document.querySelector('.outMatrixs');
const btnOutMatrix1 = document.querySelector('.outMatrixs1');
const dataEntry = document.querySelector('.dataEntry');
const td = document.querySelectorAll('td');
const tableB = document.querySelector('.tableOfMatrixB');
const vertexValue = document.querySelector('.vertexInput');
const containerForG = document.querySelector('.container_for_G')
const inputOfNum = document.querySelector('.inputOfNumbers')
btnCreate.addEventListener('click', getValue);
//btnCreate.addEventListener('click', test);
function getValue() {
dataEntry.textContent = ''
tableB.textContent =''
const valueOfInput = vertexValue.value;
if (!valueOfInput) {
alert('Поле пустое');
return;
}
dataEntry.textContent = '';
for (let i = valueOfInput; i > 0; i--) {
dataEntry.insertAdjacentHTML('afterbegin',
`
<div class="first">
<div>G<sup>-</sup>(${i}) </div>
<input type="text" class="inputOfNumbers">
</div>
`
)
}
btnOutMatrix.style.display = 'block';
btnOutMatrix1.style.display = 'block';
btnOutMatrix.addEventListener('click', test);
btnOutMatrix1.addEventListener('click', test1);
}





function test(){
    
btnOutMatrix.style.display = 'none';
let dataOfInputs = Array.from(document.querySelectorAll('.inputOfNumbers'), el => el.value);
let a = [];
let sumOfArcs;
for (let t = 0; t < dataOfInputs.length; t++) {
a[t] = dataOfInputs[t].split(' ');
}
for (let el in a) {
a[el] = a[el].map(parseFloat);
a[el] = a[el].filter(Number);
}

console.log(a);

//let a = [[2,3,4,5],[1],[1],[1],[1]];
//let a = [[2],[1,3],[2,4],[3,5],[4]];
//let a = [[2],[1,3],[2,4],[3,5],[4]];
let Gm = [];
for(let i = 0; i < a.length; i++){
Gm.push([]);
for(let j = 0; j < a.length; j++){
Gm[i][j] = 0;
}
}
let c = [];
for(let i = 0; i < a.length; i++){
c.push([]);
}
let Gp = [];
for(let i = 0; i < a.length; i++){
Gp.push([]);
for(let j = 0; j < a.length; j++){
Gp[i][j] = 0;
}
}


for(let i = 0; i < a.length; i++){//преобразование множества G- в G+
for(let j = 0; j < a[i].length; j++){
for(let k = 0; k < a.length; k++){
if(a[i][j] - 1 == k){
c[k].push(i+1)
}
}
}
}

for(let i = 0; i < c.length; i++){//преобразование множества G+ в матрицу смежности
for(let j = 0; j < c[i].length+1; j++){
for(let k = 0; k < Gp.length+1; k++){
if(c[i][j] == k){
Gp[i][k-1] = 1;
}
}
}
}
let G = Gp;
        //console.log(G);
        for(let i = 0; i < Gp.length; i++){
            for(let j = 0; j < Gp[i].length; j++){
                for(let ii = 0; ii < G.length; ii++){
                    for(let jj = 0; jj < G[ii].length; jj++){
                        if(i == jj && Gp[i][j] != G[ii][jj] && i+j == ii+jj){
                            //console.log('i',i+1,'j',j+1,'ii',ii+1,'jj',jj+1);
                            G[ii][jj] = 1;
                        }
                    }
                }
                }
            }
            Gp = G
let sum_array = [];
for(let i = 0; i < Gp.length; i++){
    sum_array.push([]);
    for(let j = 0; j < Gp[i].length; j++){
        if(Gp[i][j] != 0){
            sum_array[i].push(Gp[i][j]);
        }
    }
}
for(let i = 0; i < sum_array.length; i++){
    sum_array[i] = sum_array[i].length;
}
let max = 0;
sum_array.forEach(function(item) {
    max += item;
  });
let m = max/2;
//let R = 0.5/(((sum_array.length - 1) * max) - 1);
let R = ((0.5*m*2)/(sum_array.length - 1)) - 1;
R = R.toFixed(2);
if(R > 0 || R == 0){
console.log('test R=',R);
//R = Math.trunc(R);//СТРУКТУРНАЯ ИЗБЫТЫЧНОСТЬ
for(let i = 0; i < sum_array.length; i++){
    sum_array[i] = sum_array[i] * sum_array[i];
}
max = 0;
sum_array.forEach(function(item) {
    max += item;
  });
let S = max - (4*(m*m)/sum_array.length);
S = S.toFixed(2);//НЕРАВНОМЕРНОСТЬ РАСПРЕДЕЛЕНИЯ
console.log('test S=',S,'m=',m,'max=',max);
dataEntry.innerHTML = '<p>Структурная избытычность</p>' + `<p style="color:red;">${R}</p>` + '</br>' + '<p>Неравномерность распределения связей</p>' + `<p style="color:red;">${S}</p>`;
btnOutMatrix.style.display = 'none';
btnOutMatrix1.style.display = 'none';
}
else{
console.log('test R=',R);
dataEntry.innerHTML = '<p>Структурная избытычность</p>' + `<p style="color:red;">${R}</p>`;
btnOutMatrix.style.display = 'none';
btnOutMatrix1.style.display = 'none';
}
}









function test1(){
    
    btnOutMatrix1.style.display = 'none';
    let dataOfInputs = Array.from(document.querySelectorAll('.inputOfNumbers'), el => el.value);
    let a = [];
    let sumOfArcs;
    for (let t = 0; t < dataOfInputs.length; t++) {
    a[t] = dataOfInputs[t].split(' ');
    }
    for (let el in a) {
    a[el] = a[el].map(parseFloat);
    a[el] = a[el].filter(Number);
    }
//let a = [[3,5],[1],[],[1],[]];
//let a = [[2],[1,3],[2,4],[3,5],[4]];
    //console.log(a);

    //console.log('G-:',a);
    let Gm = [];
    for(let i = 0; i < a.length; i++){
    Gm.push([]);
    for(let j = 0; j < a.length; j++){
    Gm[i][j] = 0;
    }
    }
    let c = [];
    for(let i = 0; i < a.length; i++){
    c.push([]);
    }
    let Gp = [];
    for(let i = 0; i < a.length; i++){
    Gp.push([]);
    for(let j = 0; j < a.length; j++){
    Gp[i][j] = 0;
    }
    }
    
    
    for(let i = 0; i < a.length; i++){//преобразование множества G- в G+
    for(let j = 0; j < a[i].length; j++){
    for(let k = 0; k < a.length; k++){
    if(a[i][j] - 1 == k){
    c[k].push(i+1)
    }
    }
    }
    }
    
    for(let i = 0; i < c.length; i++){//преобразование множества G+ в матрицу смежности
    for(let j = 0; j < c[i].length+1; j++){
    for(let k = 0; k < Gp.length+1; k++){
    if(c[i][j] == k){
    Gp[i][k-1] = 1;
    }
    }
    }
    }
    //console.log('G+:',c);
    //console.log('Матрица смежности G+:',Gp);
    
    let sum_array = [];
    //console.log(Gp);//матрица смежности из G-, только без нулей
    for(let i = 0; i < Gp.length; i++){
        sum_array.push([]);
        for(let j = 0; j < Gp[i].length; j++){
            if(Gp[i][j] != 0){
                sum_array[i].push(Gp[i][j]);
            }
        }
    }
    for(let i = 0; i < sum_array.length; i++){
        sum_array[i] = sum_array[i].length;
    }
    let max = 0;
    sum_array.forEach(function(item) {
        max += item;
      });
    let m = max;
    //let R = 0.5/(((sum_array.length - 1) * max) - 1);
    let R = ((0.5*m)/(sum_array.length - 1)) - 1;
    R = R.toFixed(2);
    console.log('test1 R=',R);
    //R = Math.trunc(R,3);//СТРУКТУРНАЯ ИЗБЫТЫЧНОСТЬТ
    for(let i = 0; i < sum_array.length; i++){
        sum_array[i] = sum_array[i] * sum_array[i];
    }
    max = 0;
    sum_array.forEach(function(item) {
        max += item;
      });
    //console.log(max);
    let S = max - (4*(m*m)/sum_array.length);
    S = S.toFixed(2);//НЕРАВНОМЕРНОСТЬ РАСПРЕДЕЛЕНИЯ

    console.log('test1 S=',S,'m=',m,'max=',max);
    if(S < 0 || R < 0){
        //dataEntry.innerHTML = '<p style="text-align: center;color:red;">Невозможно рассчитать показатель для ориентированного графа</br>расчет произведен по неориентированному</p> <p style="color:red;">Структурная избытычность</p>' + `<p style="color:red;">${R}</p>` + '</br>' + '<p style="color:red;">Неравномерность распределения связей</p>' + `<p style="color:red;">${S}</p>`;
       test2(a,R,S);
       //dataEntry.innerHTML = '<p style="text-align: center;color:red;">Невозможно рассчитать показатель для ориентированного графа</br>расчет произведен по неориентированному</p> <p style="color:red;">Структурная избытычность</p>' + `<p style="color:red;">${R}</p>` + '</br>' + '<p style="color:red;">Неравномерность распределения связей</p>' + `<p style="color:red;">${S}</p>`;
    }
    else{
    dataEntry.innerHTML = '<p>Структурная избытычность</p>' + `<p style="color:red;">${R}</p>` + '</br>' + '<p>Неравномерность распределения связей</p>' + `<p style="color:red;">${S}</p>`;
    }
    btnOutMatrix.style.display = 'none';
    btnOutMatrix1.style.display = 'none';
    }

    function test2(a,old_R,old_S){
    
        let Gm = [];
        for(let i = 0; i < a.length; i++){
        Gm.push([]);
        for(let j = 0; j < a.length; j++){
        Gm[i][j] = 0;
        }
        }
        let c = [];
        for(let i = 0; i < a.length; i++){
        c.push([]);
        }
        let Gp = [];
        for(let i = 0; i < a.length; i++){
        Gp.push([]);
        for(let j = 0; j < a.length; j++){
        Gp[i][j] = 0;
        }
        }
        
        
        for(let i = 0; i < a.length; i++){//преобразование множества G- в G+
        for(let j = 0; j < a[i].length; j++){
        for(let k = 0; k < a.length; k++){
        if(a[i][j] - 1 == k){
        c[k].push(i+1)
        }
        }
        }
        }
        
        for(let i = 0; i < c.length; i++){//преобразование множества G+ в матрицу смежности
        for(let j = 0; j < c[i].length+1; j++){
        for(let k = 0; k < Gp.length+1; k++){
        if(c[i][j] == k){
        Gp[i][k-1] = 1;
        }
        }
        }
        }
        let G = Gp;
        //console.log(G);
        for(let i = 0; i < Gp.length; i++){
            for(let j = 0; j < Gp[i].length; j++){
                for(let ii = 0; ii < G.length; ii++){
                    for(let jj = 0; jj < G[ii].length; jj++){
                        if(i == jj && Gp[i][j] != G[ii][jj] && i+j == ii+jj){
                            //console.log('i',i+1,'j',j+1,'ii',ii+1,'jj',jj+1);
                            G[ii][jj] = 1;
                        }
                    }
                }
                }
            }
            Gp = G

            let sum_array = [];
    //console.log(Gp);//матрица смежности из G-, только без нулей
    for(let i = 0; i < Gp.length; i++){
        sum_array.push([]);
        for(let j = 0; j < Gp[i].length; j++){
            if(Gp[i][j] != 0){
                sum_array[i].push(Gp[i][j]);
            }
        }
    }
    for(let i = 0; i < sum_array.length; i++){
        sum_array[i] = sum_array[i].length;
    }
    let max = 0;
    sum_array.forEach(function(item) {
        max += item;
      });
    let m = max/2;
    //let R = 0.5/(((sum_array.length - 1) * max) - 1);
    let R = ((0.5*m*2)/(sum_array.length - 1)) - 1;
    R = R.toFixed(2);
    if(R > 0 || R == 0){
    console.log('test2 R=',R);
    //R = Math.trunc(R,3);//СТРУКТУРНАЯ ИЗБЫТЫЧНОСТЬТ
    for(let i = 0; i < sum_array.length; i++){
        sum_array[i] = sum_array[i] * sum_array[i];
    }
    max = 0;
    sum_array.forEach(function(item) {
        max += item;
      });
    let S = max - (4*(m*m)/sum_array.length);
    S = S.toFixed(2);
    console.log('test2 S=',S,'m=',m,'max=',max);
    //S = S.toFixed(1);//НЕРАВНОМЕРНОСТЬ РАСПРЕДЕЛЕНИЯ
    dataEntry.innerHTML = '<p style="text-align: center;color:red;">Невозможно рассчитать показатель для ориентированного графа</br>расчет произведен по неориентированному</p> <p style="color:red;">Структурная избытычность</p>' + `<p style="color:red;border: 2px solid black;">${old_R}</p>` + '</br>' + '<p style="color:red;">Неравномерность распределения связей</p>' + `<p style="color:red;border: 2px solid black;">${old_S}</p>` + '<p>Структурная избытычность</p>' + `<p style="color:red;">${R}</p>` + '</br>' + '<p>Неравномерность распределения связей</p>' + `<p style="color:red;">${S}</p>`;
    btnOutMatrix.style.display = 'none';
    btnOutMatrix1.style.display = 'none';
        }
        else{
            dataEntry.innerHTML = '<p style="text-align: center;color:red;">Невозможно рассчитать показатель для ориентированного графа</br>расчет произведен по неориентированному</p> <p style="color:red;">Структурная избытычность</p>' + `<p style="color:red;border: 2px solid black;">${old_R}</p>`+ '<p>Структурная избытычность</p>' + `<p style="color:red;">${R}</p>`;
        btnOutMatrix.style.display = 'none';
        btnOutMatrix1.style.display = 'none';
        }
    }







