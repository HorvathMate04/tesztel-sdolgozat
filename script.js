let list = [1,3,54,2];
showData(list.join(";"))

document.getElementById("btn").addEventListener("click", () => {
    let data = document.getElementById("num-inp").value;
    list.push(data)
    showData(list.join(";"));
});

document.getElementById("btn-min").addEventListener("click", () => {
    showData(list.sort()[0]);
});

function showData(data){
    document.getElementById("data").innerText = data;
}
