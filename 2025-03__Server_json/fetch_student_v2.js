fetch("http://localhost:8000/student")
    .then((response) => response.json())
    .then((student) => {
        console.log(student);
    });
