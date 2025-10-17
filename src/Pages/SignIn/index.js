import React, { use } from "react";
import Button from '@mui/material/Button';
import { Mycontext } from "../../App";

const SignIn = () => {

    const context = useContext(Mycontext);

    useEffect(() => {
        context.setisHeaderFooterShow(false);
    }, []);

    return(
        <>
        <section className="section signInPage">
            <div className="container"></div>
                <h2 className="hd mb-4">Đăng nhập</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Nhập email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Mật khẩu</label>
                        <input type="password" className="form-control" id="password" placeholder="Nhập mật khẩu" />
                    </div>
                    <Button type="submit" className="btn-blue btn-lg btn-block btn-round">Đăng nhập</Button>
                </form>

        </section>
        </>
    )
}

export default SignIn;