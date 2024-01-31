let list = [1,3,54,2];

document.getElementById("btn").addEventListener("click", () => {
    let data = document.getElementById("num-inp").value;
    list.push(data)
    console.log(list)
});
