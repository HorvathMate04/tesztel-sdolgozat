let list = [1,3,54,2];
showData(list)

document.getElementById("btn").addEventListener("click", () => {
    let data = document.getElementById("num-inp").value;
    list.push(data)
    showData();
});

function showData(){
    document.getElementById("data").innerText = list.join(";");
}
