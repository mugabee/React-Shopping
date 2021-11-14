import React from 'react'

const Header = () => {
    return (
<div>
    
        <Router>
          <nav className="w-full z-30 top-0 text-black py-1 lg:py-6">
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-2 lg:py-6">
              <div className="pl-4 flex items-center">
                <a
                  to="/"
                  className="text-black no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
                >
                  React Work
                </a>
              </div>

              <div className="" id="nav-content">
                <ul className="list-reset lg:flex justify-end flex-1 items-center">
                  <li className="mr-3">
                    <a
                      to="/"
                      className="inline-block md:border border-black hover:bg-blue-200 text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                    >
                      Home
                    </a>{" "}
                  </li>{" "}
                  <li className="mr-3">
                    {" "}
                    <a
                      to="/Add"
                      className="inline-block md:border border-black hover:bg-blue-200 text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                    >
                      Add
                    </a>
                  </li>
                  <li className="mr-3">
                    {" "}
                    <a
                      to="/About"
                      className="inline-block md:border border-black hover:bg-blue-200 text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                    >
                      About
                    </a>
                  </li>
                  <li className="mr-3">
                    {" "}
                    <a
                      to="/Contacts"
                      className="inline-block md:border border-black hover:bg-blue-200 text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
                    >
                      Contacts
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="lg:mx-64 border rounded-2xl border-red-100 bg-black bg-opacity-700 ">
            <Title />

            <Switch>
              <Route path="/Add">
                <Add/>
              </Route>
              <Route path="/About">
                <About/>
              </Route>
              <Route path="/Contacts">
                <Contacts/>
              </Route>

              <Route path="/" exact>
                <MainSection/>
              </Route>
              <Route path="*" exact>
                <Error/>
              </Route>
            </Switch>
 
          </div>
        </Router>

    </div>
  );  
}

export default Header
