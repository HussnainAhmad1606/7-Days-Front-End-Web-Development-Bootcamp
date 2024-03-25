let helloHeading = document.getElementById("heading");

helloHeading.textContent = "Hello WOrld"

helloHeading.style.color = "green"


let links = document.getElementsByClassName("links")


console.log(helloHeading)


let root = document.getElementById("root")

let para = document.createElement("p");
para.textContent = "This is para";
para.style.backgroundColor = "green";
para.style.color = "white";
para.style.padding = "10px 20px"


root.appendChild(para)
console.log(root)




let addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", addNumbers);

function addNumbers() {
    let firstNumber = document.getElementById("firstNumber").value

let secondNumber = document.getElementById("secondNumber").value;


   let res = Number(firstNumber) + Number(secondNumber);

   let resHeading = document.getElementById("result");
   resHeading.textContent = res;
   console.log(result)
}

function Run() {
    console.log("I am running");
}

// setInterval(Run, 1000);

const myTimeout = setTimeout(Run, 5000);

const myFun = async() => {
    await getValueFromDB();
    console.log("Done");
}


const getPosts = async() => {
    const request = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await request.json();
    console.log(data);

    let result = document.getElementById("result")

    data.map((post, index)=> {
        let p = document.createElement("p");
        p.setAttribute("class", "post")
        p.textContent = (index+1) + " " + post.title;
        result.append(p);
    })


    const arr = data.filter(check)
    console.log(arr)

}

getPosts();



function check(id) {
    return id % 2 == 0;
}

localStorage.setItem("loginInfo", "Psycho")


console.log(localStorage.getItem("loginInfo"));

localStorage.removeItem("loginInfo")