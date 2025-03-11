async function getStudent() {
    const resp = await fetch("http://localhost:8000/student");
    return await resp.json();
}

const student = await getStudent();
console.log(student);
