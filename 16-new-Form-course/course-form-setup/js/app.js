
(function(){
    // check fields and hide the submit button.
    document.addEventListener("DOMContentLoaded", function(){
        const display = new Display();
        display.checkFields();
        display.hideSubmit();
    });
// adding customer on submitting the form.
    document.getElementById('customer-form').addEventListener('submit',  function(e){
        e.preventDefault();
        console.log(this);  // 'this' points to the form. Because form is what called it. 
        
        const name = this.querySelector('.name');  // here not using document because since 'this' stores the form object it is easy to check in form.
        const course = this.querySelector('.course'); 
        const author = this.querySelector('.author'); 

        const customer = new Customer(name.value, course.value, author.value); // .value is mandatory. 
        const display  = new Display();
        console.log(customer);
        
        display.feedback(customer);
        display.clearFields();
    })
    // display
    function Display(){
        this.name = document.getElementById('name');
        this.course = document.getElementById('course');
        this.author = document.getElementById('author');
        this.customers = document.querySelector('.customer-list');
    }
    // check fields:
    Display.prototype.checkFields = function(){
        // console.log(this);
        this.name.addEventListener("blur", this.validateField);   // 'this' is mandatory everywhere.
        this.course.addEventListener("blur", this.validateField);  // 'blur' is when you click on the field and leave.
        this.author.addEventListener("blur", this.validateField);
    }
    Display.prototype.validateField = function(){
        // console.log(this);
        if(this.value === ''){             // if the fields are empty.
            this.classList.remove('complete');
            this.classList.add('fail');
        }
        else{
            this.classList.add('complete');
            this.classList.remove('fail');
        }
        // checking if all 3 inputs are filled.
        const complete = document.querySelectorAll('.complete'); // we've added complete class when its success for each field.
        console.log(complete.length);
        
        if(complete.length === 3){   // so checking if the class is there 3 times.
            document.querySelector('.submitBtn').disabled = false;
        }
        else{
            document.querySelector('.submitBtn').disabled = true;
        }
    };
    // hide submit button.
    Display.prototype.hideSubmit = function(){
        const btn = document.querySelector('.submitBtn');
        btn.disabled = true;  // disables the button. Its in CSS..
    }

    // show loading and feedback
    Display.prototype.feedback = function(customer){
        const feedback = document.querySelector('.feedback');
        const loading = document.querySelector('.loading');

        feedback.classList.add('showItem', 'alert', 'alert-success');
        loading.classList.add('showItem');

        const self = this;
        self.hideSubmit();

        setTimeout(function(){
            feedback.classList.remove('showItem', 'alert', 'alert-success');
            loading.classList.remove('showItem');
            self.addCustomer(customer); // I have got customer in. Pass it to other.  Using self becz self is outside the function and it can be used since it points to feedback which is part of Display.
                            // if u use 'this' in above, it would point to global since its inside another function. 
                            // addCustomer() is called only after 3 seconds. 
        }, 3000)
    }

    Display.prototype.addCustomer = function(customer){
        console.log(customer);
        const random = this.getRandom(); // this is for displaying random image. 
        const div = document.createElement("div");
        div.classList.add("col-11", "mx-auto", "col-md-6", "my-3", "col-lg-4");
        div.innerHTML = `
        <div class="card text-left">
              <img src="img/cust-${random}.jpg" class="card-img-top" alt="">
              <div class="card-body">
                <!-- customer name -->
                <h6 class="text-capitalize "><span class="badge badge-warning mr-2">name :</span><span id="customer-name">
                    ${customer.name}</span></h6>
                <!-- end of customer name -->
                <!-- customer name -->
                <h6 class="text-capitalize my-3"><span class="badge badge-success mr-2">course :</span><span id="customer-course">
                    ${customer.course}
                  </span></h6>
                <!-- end of customer name -->
                <!-- customer name -->
                <h6 class="text-capitalize"><span class="badge badge-danger mr-2">author :</span><span id="course-author">
                    ${customer.author}</span></h6>
                <!-- end of customer name -->
              </div>
            </div>
        `;
        this.customers.appendChild(div); // customers is created at the beginning which points at customers list.
    }
      //random number
    Display.prototype.getRandom = function() {
        let random = Math.floor(Math.random() * 5 + 1);
        return random;
    };
    // clearing fields after submission.
    Display.prototype.clearFields = function(){
        console.log(this);
        
        this.name.value = ''; // 'this' points back to the object. pointing to the Display constructor function.
        this.course.value = '';
        this.author.value = '';

        this.name.classList.remove('complete','fail');
        this.course.classList.remove('complete','fail');
        this.author.classList.remove('complete','fail');
    }
    // customer constructor function.
    function Customer (name, course, author){
        this.name = name;  // first 'name' would be where the name is stored.
        this.course = course;
        this.author = author;
    }
})();