//autored by VitaliiV
//https://codeforces.com/profile/VitaliiV

let flag = false;
function penis() {
    let pageHTML = document.documentElement.outerHTML;
    const checkbox = document.getElementById("reverseRunsOrder");
    let flag = 0;
    if (checkbox) {
        if (checkbox.checked) {
            flag = 1;
        }
    }
    localStorage.setItem("myFlag", flag);
    if(!pageHTML.includes("балл")) {
        return;
    }
    let parts = pageHTML.split("</tr>");

    let submissions = [];

    let Ar = [];

    for (let i = 0; i < parts.length - 1; i++) {
        if ((parts[i].includes("default-order") || parts[i].includes("reverse-order") || parts[i].includes("ce")) && !parts[i].includes("Решения")) {
            let x = parts[i];
            x = x.replaceAll("default-order", "reverse-order");
            x = x.replaceAll("reverse-order", 'reverse-order" style="display: none;"');
            submissions.push(x);
            Ar.push(parts[i]);
        } else {
            for (let j = submissions.length - 1; j >= 0; j--) {
                Ar.push(submissions[j]);
            }
            submissions = [];
            Ar.push(parts[i]);
        }
    }

    for (let j = submissions.length - 1; j >= 0; j--) {
        Ar.push(submissions[j]);
    }
    submissions = [];

    let pageHTML2 = Ar.join('</tr>');
    document.documentElement.innerHTML = pageHTML2;
    const checkbox2 = document.getElementById("reverseRunsOrder");
    checkbox2.click();
    checkbox2.click();
}

// const flag = localStorage.getItem("myFlag");

penis();