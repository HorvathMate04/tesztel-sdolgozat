let list = [1,3,54,2];
showData(list.join(";"))

document.getElementById("btn").addEventListener("click", () => {
    let data = document.getElementById("num-inp").value;
    list.push(data)
    showData(list.join(";"));
});

document.getElementById("btn-min").addEventListener("click", () => {
    let min = list[0]
    list.forEach(item => {
        if(item <min) min = item;
    })
    showData(min);
});

function showData(data){
    document.getElementById("data").innerText = data;
}
