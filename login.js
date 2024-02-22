let login=document.getElementById("Login");


login.addEventListener("click",()=>{
    modalTitle.innerHTML=`Login`;
    modalBody.innerHTML=createLoginForm()
})

function createLoginForm(){
    return`
    
    <div class="col-md-7">
    <label for="email" class="form-label">Email</label>
    <input type="email" class="form-control" id="email" name="email" onblur="validateInput(this)" required>
    <div class="error">      
    </div>
    </div>
    <div class="col-md-7">
    <label for="password" class="form-label">Password</label>
    <input type="password" class="form-control" id="password" name="password" onblur="validateInput(this)"  required>
    <div class="error">      
    </div>
    </div>
      <div class="col-12 dis-flex_justcont-cent">
        <button data-bs-dismiss="modal" class="btn btn-primary" id="submitBtn"  type="submit">Submit form</button>
      </div>
    </form>`
}