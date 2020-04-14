import React from 'react';
import Button from '@material-ui/core/Button';
import 'bootstrap/dist/css/bootstrap.css';
import Container from '@material-ui/core/Container';

function LogIn() {
    return (
        <div>
            <Container maxWidth="sm">
                <form className="singout_form">
                    <div class="form-group">
                        <label for="exampleInputEmail1">شماره تلفن</label>
                        <input type="email" class="form-control" placeholder="09..."></input>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">رمز عبور</label>
                        <input  type="password" class="form-control" ></input>
                    </div>
                    <Button variant="contained" color="secondary" >
                        ورود
                    </Button>
                </form>
            </Container>
        </div>
    )
}
export default LogIn;
