//load social media icon links

$("#fb").attr("href", "http://www.facebook.com/")

//apend login system
$("body").append('<!-- login  --></div> \
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" \
aria-hidden="true"> \
<div class="modal-dialog modal-dialog-centered" role="document"> \
    <div class="modal-content"> \
        <div class="modal-header" data-blast="bgColor"> \
            <h5 class="modal-title" id="exampleModalLabel">Signin</h5> \
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"> \
                <span aria-hidden="true">&times;</span> \
            </button> \
        </div> \
        <div class="alert alert-warning"> <p> This feature is not available for now</p></div> \
        <div class="modal-body"> \
            <form action="#" method="post" class="p-3"> \
                <div class="form-group"> \
                    <label for="recipient-name" class="col-form-label">Username</label> \
                    <input type="text" class="form-control" placeholder="" name=" name" id="recipient-name" \
                        required=""> \
                </div> \
                <div class="form-group"> \
                    <label for="password" class="col-form-label">Password</label> \
                    <input type="password" class="form-control" placeholder="" name="Password" id="password" required=""> \
                </div> \
                <div class="right-w3l"> \
                    <input type="submit" class="form-control" value="Login"> \
                </div> \
                <div class="row sub-w3l my-3"> \
                    <div class="col sub-w3_pvt">  \
                        <input type="checkbox" id="brand1" value="">   \
                        <label for="brand1">   \
                            <span></span>Remember me?</label> \
                    </div> \
                    <div class="col forgot-w3l text-right"> \
                        <a href="#" class="text-secondary">Forgot Password?</a> \
                    </div> \
                </div> \
                <p class="text-center dont-do">Don\'t have an account? \
                    <a href="#" data-toggle="modal" data-target="#exampleModal1" class="text-secondary"> \
                        Register Now</a> \
                </p> \
            </form> \
        </div> \
    </div> \
</div> \
</div>');

//apend registration system
$("body").append('<!-- register --></div> \
<div class="modal fade" id="exampleModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel1" aria-hidden="true"> \
<div class="modal-dialog modal-dialog-centered" role="document"> \
    <div class="modal-content"> \
        <div class="modal-header" data-blast="bgColor">\
            <h5 class="modal-title" id="exampleModalLabel1">Register</h5>\
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">\
                <span aria-hidden="true">&times;</span>\
            </button>\
        </div>\
        <div class="alert alert-warning"> <p> This feature is not available for now</p></div>\
        <div class="modal-body">\
            <form action="#" method="post" class="p-3">\
                <div class="form-group">\
                    <label for="recipient-name" class="col-form-label">Username</label>\
                    <input type="text" class="form-control" placeholder="" name=" name" id="recipient-rname"\
                        required="">\
                </div>\
                <div class="form-group">\
                    <label for="recipient-email" class="col-form-label">Email</label>\
                    <input type="email" class="form-control" placeholder="" name="Email" id="recipient-email"required="">\
                </div>\
                <div class="form-group">\
                    <label for="password1" class="col-form-label">Password</label>\
                    <input type="password" class="form-control" placeholder="" name="Password" id="password1" required="">\
                </div>\
                <div class="form-group">\
                    <label for="password2" class="col-form-label">Confirm Password</label>\
                    <input type="password" class="form-control" placeholder="" name="Confirm Password" id="password2"\
                        required="">\
                </div>\
                <div class="sub-w3l">\
                    <div class="sub-w3_pvt">\
                        <input type="checkbox" id="brand2" value="">\
                        <label for="brand2" class="mb-3">\
                            <span></span>I Accept to the Terms & Conditions</label>\
                    </div>\
                </div>\
                <div class="right-w3l">\
                    <input type="submit" class="form-control" value="Register">\
                </div>\
            </form>\
        </div>\
    </div>\
</div>\
</div>\
<!-- // register -->');