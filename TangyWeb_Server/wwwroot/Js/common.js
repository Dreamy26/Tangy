window.ShowToaster = (type, message) => {
    if (type === "success") {
        toaster.success(message, "Operation Successful", { timeOut: 5000 });
    }
    if (type === "error") {
        toaster.error(message, "Operation Failed", { timeOut: 5000 });
    }
}
// showSwal = ShowSweetAlert
window.ShowSwal = (type, message) => {
    if (type === "success") {
        swal.fire({
            title: "Success Notification!",
            text: message,
            icon: "success",
        });
    }
    if (type === "error") {
        swal.fire({
            title: "Error Notification!",
            text: message,
            icon: "error",
        });
    }
}

