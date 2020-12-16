function calcular(){
    let num = document.getElementById('num')
    let res = document.getElementById('res')
    let tab = document.getElementById('seltab')
    

    if (num.value.length == 0){
        res.innerText = 'Impossivel contar!'
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            //importante para php
            item.value = `tab ${c}`
            tab.appendChild(item)
            c++
        }
        
        

    }
}



 /*let n = Number(num.value)
        let n1 = n * 1
        let n2 = n * 2
        let n3 = n * 3
        let n4 = n * 4
        let n5 = n * 5
        let n6 = n * 6
        let n7 = n * 7
        let n8 = n * 8
        let n9 = n * 9
        let n10 = n * 10
        res.innerHTML  = `${n} x 1 = ${n1} <br>`
        res.innerHTML += `${n} x 2 = ${n2} <br>`
        res.innerHTML += `${n} x 3 = ${n3} <br>`
        res.innerHTML += `${n} x 4 = ${n4} <br>`
        res.innerHTML += `${n} x 5 = ${n5} <br>`
        res.innerHTML += `${n} x 6 = ${n6} <br>`
        res.innerHTML += `${n} x 7 = ${n7} <br>`
        res.innerHTML += `${n} x 8 = ${n8} <br>`
        res.innerHTML += `${n} x 9 = ${n9} <br>`
        res.innerHTML += `${n} x 10 = ${n10} <br>`
        */