function setActualDate() {
    const actualDate = new Date();
    const dd = String(actualDate.getDate()).padStart(2, '0');
    const mm = String(actualDate.getMonth() + 1).padStart(2, '0');
    const yyyy = actualDate.getFullYear();

    const today = mm + '.' + dd + '.' + yyyy;

    document.querySelector(".date").innerHTML = today;
}


module.exports = setActualDate;