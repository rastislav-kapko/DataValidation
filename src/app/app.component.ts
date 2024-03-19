import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-dataValidation';
}

window.onload = () => {
  const form = document.getElementById("myForm") as HTMLFormElement;

  form.addEventListener("submit", (event: Event) => {
      event.preventDefault(); 

      const inputText = (document.getElementById("Name_surname") as HTMLInputElement).value;
      const regex_name: RegExp = /^[a-zA-Z0-9]+$/; 
      const inputText_email = (document.getElementById("Email") as HTMLInputElement).value;
      const regex_email: RegExp = /^[\w]+\@[\w]+.[\w]{2,}$/; 

      const Date_of_birth = new Date((document.getElementById("Date_of_birth") as HTMLInputElement).value);
      const today = new Date();
      let age = today.getFullYear() - Date_of_birth.getFullYear();
      const monthDiff = today.getMonth() - Date_of_birth.getMonth();
      
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < Date_of_birth.getDate())) {
          age--;
      }

      const select = document.getElementById("countrySelect") as HTMLSelectElement;

              
      fetch("https://restcountries.com/v2/all")
          .then(response => response.json())
          .then((data: any) => {
              
              data.forEach((country: any) => {
                  const option = document.createElement("option");
                  option.text = country.name;
                  select.add(option); 
              });
          })
          .catch((error: any) => {
              console.error("Chyba pri načítavaní dát: ", error);
          });
  
      const selectedCountryInput = document.getElementById("selectedCountry") as HTMLInputElement;
  
      const selectedCountry = select.options[select.selectedIndex].text;
      selectedCountryInput.value = selectedCountry;

      form.addEventListener("submit", (event: Event) => {
          event.preventDefault(); // Prevent form from sending 
      });

      if (regex_name.test(inputText) && regex_email.test(inputText_email) && age >= 18) {
          alert("Vstupný text obsahuje iba písmená.");
      } else {
          alert("Vstupný text obsahuje neplatné znaky.");
      }
  });
}