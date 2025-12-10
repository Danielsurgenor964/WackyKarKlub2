document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("contact-form");


    form.addEventListener("submit", function (e) {

        downloadFormData(form);
        setTimeout(() => {
            window.location.href = "thankyou.html";
        }, 300);
    });

    function downloadFormData(form) {
        const formData = new FormData(form);
        let text = "";

        for (let [key, value] of formData.entries()) {
            text += `${key}: ${value}\n`;
        }

        console.log("Saving data:", text);

        const blob = new Blob([text], { type: "text/plain" });
        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = "form-data.txt";
        document.body.appendChild(a);

        a.click();   // this triggers download
        a.remove(); //we crwate a temp URL download so remove it after

        URL.revokeObjectURL(url);
    }

});
 