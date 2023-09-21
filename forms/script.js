    document.addEventListener('DOMContentLoaded', function () {
                const form = document.getElementById("form");
                const tbody = document.querySelector("#tbody");

                form.addEventListener('submit', function (e) {

                    e.preventDefault();

                    const fname = document.getElementById('fname').value;
                    const lname = document.getElementById('lname').value;
                    const address = document.getElementById('address').value;
                    const pcode = document.getElementById('pcode').value;
                    const gender = document.querySelector('input[name="gender"]:checked').value;
                    const food = document.querySelectorAll('input[name="food"]:checked');
                    const foods = Array.from(food).map(choice => choice.value).join(',');
                    const state = document.getElementById('state').value;
                    const country = document.getElementById('country').value;


                    const newRow = tbody.insertRow();
                    const c0 = newRow.insertCell(0);
                    const c1 = newRow.insertCell(1);
                    const c2 = newRow.insertCell(2);
                    const c3 = newRow.insertCell(3);
                    const c4 = newRow.insertCell(4);
                    const c5 = newRow.insertCell(5);
                    const c6 = newRow.insertCell(6);
                    const c7 = newRow.insertCell(7);

                    c0.innerHTML = fname;
                    c1.innerHTML = lname;
                    c2.innerHTML = address;
                    c3.innerHTML = pcode;
                    c4.innerHTML = gender;
                    c5.innerHTML = foods;
                    c6.innerHTML = state;
                    c7.innerHTML = country;

                    form.reset();
                })
            });
        