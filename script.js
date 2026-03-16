function predict(){

let college=document.getElementById("college").value
let exam=document.getElementById("exam").value
let topic=document.getElementById("topic").value

if(college=="" || exam=="" || topic==""){

alert("Please select all fields")
return

}

let questions=[

"Explain the concept with diagram",
"Write short notes with example",
"Compare different methods",
"Explain advantages and disadvantages",
"Draw architecture and explain",
"Explain algorithm step by step",
"Discuss applications",
"Explain working principle",
"Describe types and features",
"Explain real world example",
"Discuss advantages and limitations",
"Explain process flow diagram",
"Write detailed explanation",
"Explain with case study",
"Discuss implementation steps"

]

let result=document.getElementById("result")

result.innerHTML="<h2>Top 15 Predicted Questions</h2>"

questions.forEach(function(q){

result.innerHTML+=`<div class="card">${q} - (${topic})</div>`

})

}