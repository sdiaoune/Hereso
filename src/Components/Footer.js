function Footer(){
    return (
        <div className="App">
            <footer>
    <div class="container">
        <div class="row">
            <div class="col-sm-3">
                <h4>Contact Us</h4>
                <span>Address: Bamako, Niarela, à côté de la cité du Niger</span> <br/>
                <span>Phone: +22368683775, +22378683775</span> <br/>
                <span>Email: heresso2022@gmail.com</span> <br/>
                <br/>
            </div>
            <div class="col-sm-3">
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Amenities</a></li>
                    <li><a href="#">Gallery</a></li>
                </ul>
            </div>
            <div class="col-sm-3">
                <h4>Follow Us</h4>
                <ul class="social-icons">
                    {/* <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fa fa-instagram"></i></a></li> */}
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Twitter</a></li>
                    <li><a href="#">Instagram</a></li>
                </ul>
            </div>
            <div class="col-sm-3">
                <h4>Newsletter</h4>
                <p>Sign up for our newsletter to stay up to date on the latest news and events at our complex.</p>
                <form>
                    <div class="form-group">
                        <input type="email" class="form-control" placeholder="Enter your email" />
                    </div>
                    <br/>
                    <button type="submit" class="btn btn-primary">Sign Up</button>
                </form>
                <br/>
            </div>
        </div>
    </div>
    <div class="copyright">Copyright ©2023 Hereso. All rights reserved. | Powered by Diaouné Technologies</div>
</footer>
        </div>
    )
}

export default Footer;