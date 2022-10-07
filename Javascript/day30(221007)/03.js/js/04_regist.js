const regist = function() {
    const firstname = document.querySelector("#firstname");
    const lastname = document.querySelector("#lastname");
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");
    const year = document.querySelector("#year");
    const month = document.querySelector("#month");
    const day = document.querySelector("#day");

    const gender = document.querySelectorAll(".gender");
    let type = "";
    for(const radio of gender) {
        if(radio.checked) {
            console.log(radio)
            type = radio.labels[0].textContent;
            console.log(type);
        }
    }

    // 유효성 검사, 필수입력사항 체크, validation 체크
    if(!lastname.value) return alert("성을 입력하세요");
    if(!firstname.value) return alert("이름을 입력하세요");
    if(!email.value) return alert("이메일을 입력하세요");
    if(!password.value) return alert("비밀번호를 입력하세요");
    if(!type) return alert("성별을 입력하세요");

    const json = {
        name: lastname.value + firstname.value,
        email: email.value,
        password: password.value,
        year: year.value,
        month: month.value,
        day: day.value, 
        gender: type
    }

    console.log(json);

    request.regist(json);
}