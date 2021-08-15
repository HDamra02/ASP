new Vue({
  el: '#app',
  components: {
    
  },
  methods: {
    
  },
  data(){
    return {
    };
  }, 
  mounted(){
  },
  template: `
  <div class="container-md bg-dark text-light">
    <div class="row">
       <div class="col"> 
        
        
        
        <div class="grid-container">
          
          
          <div class="fade-in-text" style="text-align: center; font-style: italic; padding-top: 250px; padding-bottom: 250px; font-family: serif;">           
            <p style="text-align: center; font-size: 150px;" data-aos="fade-left" data-aos-duration="2000">Hamza Damra</p>
            <br>
            <p style=" text-align: center; font-size: 40px;" data-aos="fade-right" data-aos-duration="2200">Portfolio Personal Project</p>           
          </div>
          
          <div class="grid-containerf"style="padding-top:150px;">

            <!-- data-aos="fade-right" data-aos-offset="400" -->
            <div class="grid-item" data-aos="fade-left" data-aos-offset="400" data-aos-duration="1000" >

              <p style="font-size: 150px; position:relative; top:30px; right:220px;">Data</p>
              <div>
                <p style="font-size: 30px; position:relative; right:220px; color: grey;">Insert, edit, or delete data <br>and view it all in a table</p>
              </div>

              <img style=" max-width:300px; height: auto; position:relative; left:267px; bottom:260px;" src="img/database-table.png">

              <div>
                <button type="button" style="position:relative; right:220px; bottom:280px;" class="btn btn-light btn-lg">Check it out</button>
              </div>

            </div>


            <div class="grid-item2" data-aos="fade-right" data-aos-offset="400" data-aos-duration="1000" >

              <p style="font-size: 150px; position:relative; top:30px; left:175px;">Graphs</p>
              <div>
                <p style="font-size: 30px; position:relative; left:175px; color: grey;">View your data in different ways <br>with different types of graphs</p>
              </div>

              <div>
                <button type="button" style="position:relative; left:190px; top:20px;" class="btn btn-light btn-lg">Check it out</button>
              </div>

              <img style=" max-width:300px; height: auto; position:relative; right:300px; bottom:330px;" src="img/analytics.png">

            </div>
            

            <div class="grid-item3" data-aos="fade-left" data-aos-offset="400" data-aos-duration="1000" >

              <p style="font-size: 150px; position:relative; top:30px; right:190px;">Forms</p>
              <div>
                <p style="font-size: 30px; position:relative; right:190px; color: grey;">Enter information in a form <br>and view it in different ways</p>
              </div>

              <img style=" max-width:300px; height: auto; position:relative; left:300px; bottom:275px;" src="img/form.png">

              <div>
                <button type="button" style="position:relative; right:190px; bottom:280px;" class="btn btn-light btn-lg">Check it out</button>
              </div>

            </div>  


            <div class="grid-item4" data-aos="fade-right" data-aos-offset="400"  data-aos-duration="1000">

              <p style="font-size: 150px; position:relative; top:30px; left:190px;">Maps</p>

              <div>
                <p style="font-size: 30px; position:relative; left:190px; color: grey;">Uses Google Maps API to show <br>information of your choosing</p>
              </div>

              <div>
                <button type="button" style="position:relative; left:190px; top:20px;" class="btn btn-light btn-lg">Check it out</button>
              </div>

              <img style=" max-width:300px; height: auto; position:relative; right:300px; bottom:330px;" src="img/mapw.png">

            </div>

          </div>

          <div style="padding-bottom:1000px;"></div>


        </div>

        
      </div> 
    </div>
  </div>
  `,
});