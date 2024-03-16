function Footer() {
    return (
        <footer>
              <div className="links">
                  <div className="one">
                      <h2 className="logo">
                          <img src="img/1.svg" alt=""/>
                          <span className="h4">Christmas</span>
                      </h2>
                      <p className="h6 name-links">This Christmas give a lot of love</p>
                  </div>
      
                  <div className="two">
                      <h2 className="h3">Our Services</h2>
                      <a className="h4 name-links">Pricing</a>
                      <a className="h4 name-links">Discounts</a>
                      <a className="h4 name-links">Shipping mode</a>
                  </div>
      
                  <div className="three">
                      <h2 className="h3">Support</h2>
                      <a className="h4 name-links">FAQs</a>
                      <a className="h4 name-links">Support center</a>
                      <a className="h4 name-links">Contact Us</a>
                  </div>
      
                  <div className="four">
                      <h2 className="h3">Available On</h2>
                      <a className="h4 name-links"><img src="img/aviable1.png" alt=""/></a>
                      <a className="h4 name-links"><img src="img/aviable2.png" alt=""/></a>
                  </div>
      
              </div>
              <p className="copyright">
                  <a href="" className="copyright">© Bedimcode. All rigths reserved</a>
              </p>
              <img src="img/footer1.png" alt="" className="footer1"/>
              <img src="img/footer2.png" alt="" className="footer2"/>
          </footer>
    )
}

export default Footer