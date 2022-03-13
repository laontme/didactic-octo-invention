const reports = document.querySelectorAll(".report");

reports.forEach((report) => {
    const checkboxes = report.querySelectorAll(".checkbox__original");

    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", (e) => {
            changed(report);
        });
    });

    const selectAll = report.querySelector(".report__summary .checkbox__original");

    selectAll.addEventListener("change", (e) => {
        const checkboxes = report.querySelectorAll(".report__wrapper .checkbox__original");

        if (e.target.checked === true) {
            checkboxes.forEach((checkbox) => {
                checkbox.checked = true;
            });
        } else {
            checkboxes.forEach((checkbox) => {
                checkbox.checked = false;
            });
        }
    });
});

function changed(report) {
    const checkboxes = report.querySelectorAll(".checkbox__original");

    let checked = 0;
    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            checked++;
        }
    });

    const buttons = report.querySelectorAll(".report__download .button");

    if (checked > 0) {
        buttons.forEach((button) => {
            console.log("!1");
            button.disabled = false
        });
    } else {
        buttons.forEach((button) => {
            console.log("!2");
            button.disabled = true
        });
    }

    console.log(checked);
}

document.querySelector(".main__reset").addEventListener("click", (e) => {
    document.querySelectorAll(".checkbox__original").forEach((checkbox) => {
        checkbox.checked = false;
    });

    document.querySelectorAll(".report").forEach((report) => {
        changed(report);
    });
});


