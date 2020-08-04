export default function Bikes(bikes) {
  return `
 
    <h1>Search Our Bikes</h1>
    <div class="grid-container">
      <div class="sidebar">
        <div class="CheckBoxSection">
            
            <h2> Shops</h2>
            
            <div> 
              <input type="checkbox"  name="ColumbusBox" id="Columbus" value="1"/>
              <label for="1">Columbus</label>
            </div>
              
            <div>
              <input type="checkbox" name="ClevelandBox" id="Cleveland" value="2">
              <label for="2">Cleveland</label>   
            </div>

            <h2> Gender</h2>
            <div>      
              <input type="checkbox" name="MaleBox" id="Male" value="3">
              <label for="3">Male</label>
            </div>  

            <div>      
              <input type="checkbox" name="FemaleBox" id="Female" value="4">
              <label for="4">Female</label>
            </div>

            <div>
              <input type="checkbox" name="NeutralBox" id="Neutral" value="5">   
              <label for="5">Neutral</label>
            </div>
              
            <h2> Suggested Age Range</h2>
            <div>
              <input type="checkbox" name="12-24 Months"id="Age1224" value="6">  
              <label for="6">Age 12-24 Months </label>
            </div>

            <div>
              <input type="checkbox" name="2-4 Years" id="Age24" value="7">
              <label for="7">Age 2-4</label>
            </div>

            <div>
              <input type="checkbox" name="Age57Box" id="Age57" value="8">      
              <label for="8">Age 5-7</label>
            </div>    

            <div>
              <input type="checkbox" name="Age811Box" id="Age811" value="9">
              <label for="9">Age 8-11</label>
            </div>    

            <div> 
              <input type="checkbox" name="Age1215Box"  id="Age1215" value="10">
              <label for="10">Age 12-15</label>
            </div>

                  <button class= "submit">
                    Submit
                  </button>
        </div>
        <div class="BLANK"> </div>
      </div>

      
      <ul class = "bikes-list">
        ${bikes.map((bike) => {
    return `
          <li class="bike_item">
            <input type = "hidden" id="bikeId" value="${bike.id}">
            <img class = "bike_image" src="${bike.imageUrl}"/>
            <p class="bikes-list_brandName">${bike.brandName} </p>
          </li> 
          `;
  })
      .join("")}
      </ul>
    
    </div>

    `;
}

