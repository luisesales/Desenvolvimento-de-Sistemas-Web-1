let students = [
    {
        name : "Luís Eduardo de Oliveira Sales",
        age : 22,
        course : "Bacharelado em Tecnologia da Informação" 
    },
    {
        name : "Marcos Arthur da Silva Melo",
        age : 22,
        course : "Bacharelado em Tecnologia da Informação"
    },
    {
        name : "Samuel Soares Pereira Costa",
        age : 23,
        course : "Bacharelado em Tecnologia da Informação"
    }
];
function loadStudents(){    
    if(localStorage.getItem("students")){        
        students =  JSON.parse(localStorage.getItem("students"));
    }
    let content = document.getElementById("content");        
    if(content.hasChildNodes()){ 
        let size = content.children.length;
        while(size > 0){
            content.removeChild(content.children[0]);      
            size--;      
        }
    }
    for(let student of students){         
        let element = document.createElement('div');
        element.classList.add("row")
        element.innerHTML = '<div class="text-md col-md-4 col-12 bl-black bb-black">'+ student.name +'</div><div class="text-md col-md-2 col-12 bx-black bb-black">'+ student.age + '</div><div class="bg-gray text-md col-md-6 col-12 br-black bb-black">'+ student.course + '</div>';
        content.appendChild(element);
    }
}

function addStudent(){
    let name = document.getElementById("name");
    let age = document.getElementById("age");
    let course = document.getElementById("course");

    let nameError = document.getElementById("nameError");
    let ageError = document.getElementById("ageError");
    let courseError = document.getElementById("courseError");

    age.classList.add("b-black");
    age.classList.remove("b-red");

    nameError.innerText = "";
    ageError.innerText = "";
    courseError.innerText = "";
    
    
    if(!(Number.isInteger(age.valueAsNumber)) || age > 130 || age < 0){ 
        age.classList.remove("b-black");
        age.classList.add("b-red");
        ageError.innerText = "Insira uma data válida!";
        return
    }
    students.push({
        name: name.value,
        age : age.valueAsNumber,
        course : course.value
    })    
    
    localStorage.setItem("students", JSON.stringify(students));    
    
    window.location.href = "view_aluno.html";                
}