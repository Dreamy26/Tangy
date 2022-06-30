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
            "Success Notification!",
            message,
            "success",
        });
    }
    if (type === "error") {
        swal.fire({
            "Error Notification!",
            message,
            "error",
        });
    }
}

