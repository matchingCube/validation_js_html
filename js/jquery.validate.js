$.validator.addMethod("regx", function(value, element, regexpr){
    return regexpr.test(value);
}, "Please enter as valid type.")

$().ready(function () {
    $("form[name='validation']").validate({
        rules: {
            sellername: {
                required: true,
                regx: /^[a-zA-Z]{1,20} [a-zA-Z]{1,20}$/
            },
            address: {
                required: true,
                regx: /^[a-zA-Z0-9]{1,50}$/
            },
            city: {
                required: true,
                regx: /[a-zA-Z0-9]{1,50}$/
            },
            province: {
                required: true,
                regx: /^[a-zA-Z0-9]{1,50}$/
            },
            postal: {
                required: true,
                regx: /^[0-9][a-zA-Z][0-9] [a-zA-Z][0-9][a-zA-Z]$/
            },
            phoneNum: {
                required: true,
                regx: /^\(?(\d{3})\)?[-\.\s]?(\d{3})[-\.\s]?(\d{4})$/
            },
            email: {
                required: true,
                email: true
            },
            vehicle: {
                required: true,
                regx: /^[0-9]{4} [a-zA-Z]{1,20} [a-zA-Z0-9]{1,20}$/
            }
        },
        messages: {
            sellername: "Please enter your first name and last name ex: John Doe",
            address: "Please enter your address",
            city: "Please enter your city name",
            province: "Please enter your province name",
            postal: "Please enter your postal code corretly. ex: 6T6 T7N",
            phoneNum: "Please enter your phone number ex: 333-333-3333",
            email: "Please enter your email",
            vehicle: "Please enter your vehicle information corretly. ex: 1998 BMW mustang"
        },
        submitHandler: function (form) {
            var users = JSON.parse(localStorage.getItem("users") || "[]");
            const userDetails = {
                name: document.getElementById("sellername").value,
                address: document.getElementById("address").value,
                city: document.getElementById("city").value,
                provice: document.getElementById("province").value,
                postal: document.getElementById("postal").value,
                phoneNum: document.getElementById("phoneNum").value,
                email: document.getElementById("email").value,
                vehicle: document.getElementById("vehicle").value
            };
            users.push(userDetails);
            localStorage.setItem("users", JSON.stringify(users));
            form.submit();
        }
    });
});