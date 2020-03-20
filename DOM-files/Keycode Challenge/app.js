const eventWhich = document.getElementById("eventWhich");
const eventCode = document.getElementById("eventCode");
const eventKey = document.getElementById("eventKey");

function keycode() {
    let whichEvent = event.keyCode;
    eventWhich.textContent = whichEvent;
    console.log(event)

    let codeEvent = event.code;
    eventCode.textContent = codeEvent;

    let keyEvent = event.key;
    eventKey.textContent = keyEvent;
}

