import Left from "./Left";

function Dashboard() {
    return (
        <section id="mid">
          <div className="container">
            <div className="row">
              <Left/>
              
              <div className="col-md-9">Mid</div>
            </div>
          </div>
        </section>
      );
}

export default Dashboard;