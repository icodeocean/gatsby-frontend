const title = document.getElementById("title");
const questionName = document.getElementById("questionName");
const questionIcon = document.getElementById("questionIcon");
const questionUsername = document.getElementById("questionUsername");
const answerParent = document.getElementById("answerParent");
fetch("https://fpa-questions.herokuapp.com/question/1").then((response)=>{
    if (response.status != 200) window.location.href = "/";
    return response;
}).then((response)=>response.json()
).then((data)=>{
    title.innerHTML = data.body;
    data.answers.forEach((element)=>{
        addAnswer(element);
    });
    console.log(data);
});
function addAnswer(data1, parent) {
    const container = document.createElement("div");
    const paragraph = document.createElement("p");
    fetch(`https://fairfield-programming.herokuapp.com/user/${data1.user}`).then((response)=>response.json()
    ).then((data)=>{
        const userContainer = document.createElement("div");
        const userIcon = document.createElement("img");
        userContainer.className = "d-flex text-muted pt-3";
        userContainer.append(userIcon);
        userIcon.src = data.profilePicture;
        container.append(userContainer);
    });
    container.className = "bg-body border my-3 p-3 rounded";
    paragraph.innerHTML = data1.body;
    container.append(paragraph);
    parent.append(container);
}
addAnswer({
    body: "This is a test"
}, answerParent);

//# sourceMappingURL=index.4a28e800.js.map
