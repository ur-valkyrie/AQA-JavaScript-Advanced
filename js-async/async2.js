async function delayAndLog(message, milliseconds) {
    await new Promise(resolve => setTimeout(resolve, milliseconds));
    console.log(message);
}

delayAndLog("Hello", 1000);
delayAndLog("Bye", 2000);
