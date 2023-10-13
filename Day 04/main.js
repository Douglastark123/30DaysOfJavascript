{
    let a = 4;
    let b = 3;
    let result = "";

    if (a > b) {
        result = `${a} is greater than ${b}`;
    } else {
        result = `${b} is greater than ${a}`;
    }

    console.log("If-Else ->", result);

    a > b ? result = `${a} is greater than ${b}` : result = `${b} is greater than ${a}`;
    console.log("ternary", result);
}

document.getElementById("gradeForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const score = parseFloat(document.getElementById("score").value);

    const myGradeElement = document.getElementById("myGrade");

    if (isNaN(score) || score < 0 || score > 100) {
        myGradeElement.textContent = "Invalid number";
        myGradeElement.classList.add("warning");
        return;
    }

    let grade;

    if (score >= 80) {
        grade = "A";
    } else if (score >= 70) {
        grade = "B";
    } else if (score >= 60) {
        grade = "C";
    } else if (score >= 50) {
        grade = "D";
    } else {
        grade = "F";
    }

    myGradeElement.textContent = `Your grade is ${grade}`;
})

document.getElementById("monthSeasonForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const month = String(document.getElementById("month").value);
    let season;
    if (["september", "october", "november"].includes(month)) {
        season = "Autumn"
    } else if (["december", "january", "february"].includes(month)) {
        season = "Winter"
    } else if (["march", "april", "may"].includes(month)) {
        season = "Spring"
    } else {
        season = "Summer"
    }

    const seasonElement = document.getElementById("season");
    seasonElement.textContent = `It's ${season}`;
})

document.getElementById("weekOrWeekendForm").addEventListener("submit", (e) => {
    e.preventDefault()

    const day = String(document.getElementById("day").value);
    let result;

    if (!["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"].includes(day.toLowerCase())) {
        result = "Invalid data input"
    } else if (["monday", "tuesday", "wednesday", "thursday", "friday"].includes(day.toLowerCase())) {
        result = `${day[0].toUpperCase() + day.slice(1,).toLowerCase()} is a working day.`
    } else {
        result = `${day[0].toUpperCase() + day.slice(1,).toLowerCase()} is a weekend.`
    }

    const weekOrWeekendElement = document.getElementById("weekOrWeekend");
    weekOrWeekendElement.textContent = result;
})

document.getElementById("daysInAMonthForm").addEventListener("submit", (e) => {
    e.preventDefault()

    const yearType = document.getElementsByName("year-type");

    yearType.forEach(item => {
        if (item.checked) {
            console.log(item);
        }
    })

    // console.log(yearType);

    // const yearType = String(document.getElementById("day").value);
    // const day = String(document.getElementById("day").value);
    // let result;


    // const daysInAMonth = document.getElementById("daysInAMonth");
    // daysInAMonth.textContent = result;
})