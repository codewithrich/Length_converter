const convert=() => {
    const cmVal = Number(document.getElementById("input").value)
    const inchVal = cmVal/ 2.54
    const result = document.getElementById("result")
    result.innerHTML = inchVal
}