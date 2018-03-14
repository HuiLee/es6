function goHome(tool) {
    if (tool) {
        var car = 'By Car';
        console.log(car)
    } else {
        var cookie = 'FYI';
        console.log(car)
    }
}


function goHome(tool) {
    var car, cookie;
    if (tool) {
        car = 'By Car';
        console.log(car)
    } else {
        cookie = 'FYI';
        console.log(car)
    }
}

goHome();

function goSchool(tool) {
    let type;
    const teacher = 'Mrs Hu';
    if (tool == 'Car') {
        type = 'By Car';
    } else {
        type = 'By Bus';
    }
    console.log(`${teacher} goes school ${type}`);
}

goSchool();

function sleep() {
    let timer = '12:30';
    console.log(`I go to bed at ${timer}`);
}

sleep();

function getHtml(code) {
    let style = '1px solid ###ccc';
    let html = `<div style="${style}">
    <p>This is ${code} code, which is greet!</p>
</div>`;
    return html;
}

console.log(getHtml('HTML'));