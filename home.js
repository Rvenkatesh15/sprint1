document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const ssnId = document.getElementById('ssnId').value;
    const name = document.getElementById('name').value;
    const accountNumber = document.getElementById('accountNumber').value;
    const ifscCode = document.getElementById('ifscCode').value;
    const balance = document.getElementById('balance').value;
    const aadhaar = document.getElementById('aadhaar').value;
    const pan = document.getElementById('pan').value;
    const dob = document.getElementById('dob').value;
    const gender = document.getElementById('gender').value;
    const maritalStatus = document.getElementById('maritalStatus').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const contactNumber = document.getElementById('contactNumber').value;
    
    

    const messageBox = document.getElementById('messageBox');
    messageBox.textContent = 'Customer Registration Successful.';
    messageBox.style.color = 'green';
    messageBox.style.display = 'block';

    
    document.getElementById('registrationForm').reset();
    let userDetails={
        ssnId,
        name,
        accountNumber,
        ifscCode,
        balance,
        aadhaar,
        pan,
        dob,
        gender,
        maritalStatus,
        email,
        address,
        contactNumber
    }
    localStorage.setItem(accountNumber,userDetails);
    alert("Customer Registeration SuccessFull");
    document.getElementById('accountlogin').addEventListener('click',()=>{
        window.open('login.html','_blank')
    })


            
   
});
