import ModuleList from "../Modules/ModuleList";


function Home() {
  return (
    <div>
      <div style={{width:'75%'}}>
        <ModuleList />
        </div> 
      <div class='float-end'>
          <div>
          <div class="row p-1">
            <button class="btn btn-secondary col-12 btn-sm">Import Existing Content</button>
          </div>
          <div class="row p-1">
            <button class="btn btn-secondary col-12 btn-sm">Import From Commons</button>
          </div>
          <div class="row p-1">
            <button class="btn btn-secondary col-12 btn-sm">Choose Home Page</button>
          </div>
          <div class="row p-1">
            <button class="btn btn-secondary col-12 btn-sm">View Course Stream</button>
          </div>
          <div class="row p-1">
            <button class="btn btn-secondary col-12 btn-sm">New Announcement</button>
          </div>
          <div class="row p-1">
            <button class="btn btn-secondary col-12 btn-sm">New Analytics</button>
          </div>
          <div class="row p-1">
            <button class="btn btn-secondary col-12 btn-sm">View Course Notification</button>
          </div>
          <h3>To Do</h3>
          <hr/>
          <a href="#" id="slides-link"><i class="fa-solid fa-circle-exclamation"></i> Grade A1 -
            ENV+HTML</a>
          <br/>
          <h3>Coming Up</h3>
          <hr/>
          <a href="#" id="slides-link"> <i class="fa-regular fa-calendar"></i> Lecture</a><br/>
          <a href="#" id="slides-link"> <i class="fa-regular fa-calendar"></i> Another Lecture</a><br/>
          <a href="#" id="slides-link"> <i class="fa-regular fa-calendar"></i> Web Dev Lecture</a><br/>
          </div>

          </div>
    </div>
    
  );
}
export default Home;