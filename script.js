let list = [1,3,54,2];
showData(list.join(";"))

document.getElementById("btn").addEventListener("click", () => {
    let data = Number(document.getElementById("num-inp").value);
    list.push(data)
    showData(list.join(";"));
});

document.getElementById("btn-max").addEventListener("click", () => {
    let max = list[0]
    list.forEach(item => {
        if(item > max) max = item;
        console.log(item)
        console.log(max)
    })
    showData(max);
});

function showData(data){
    document.getElementById("data").innerText = data;
}
