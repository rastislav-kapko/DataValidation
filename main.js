window.onload = function() {
    var form = document.getElementById("myForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 

        var inputText = document.getElementById("Name_surname").value;
        var regex_name = /^[a-zA-Z0-9]+$/; 
        var inputText_email = document.getElementById("Email").value;
        var regex_email = /^[\w]+\@[\w]+.[\w]{2,}$/; 

        var Date_of_birth = new Date(document.getElementById("Date_of_birth").value);
        var today = new Date();
        var age = today.getFullYear() - Date_of_birth.getFullYear();
        var monthDiff = today.getMonth() - Date_of_birth.getMonth();
        
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < Date_of_birth.getDate())) {
            age--;
        }

        const select = document.getElementById("countrySelect");

                
        fetch("https://restcountries.com/v2/all")
            .then(response => response.json())
            .then(data => {
                
                data.forEach(country => {
                    const option = document.createElement("option");
                    option.text = country.name;
                    select.add(option); 
                });
            })
            .catch(error => {
                console.error("Chyba pri načítavaní dát: ", error);
            });
    
        const form = document.getElementById("myForm");
        const selectedCountryInput = document.getElementById("selectedCountry");
    
        const selectedCountry = select.options[select.selectedIndex].text;
        selectedCountryInput.value = selectedCountry;


        form.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent form from sending 
    

        });


        if (regex_name.test(inputText) && regex_email.test(inputText_email) && age >= 18) {
            alert("Vstupný text obsahuje iba písmená.");
        } else {
            alert("Vstupný text obsahuje neplatné znaky.");
        }
    });
}