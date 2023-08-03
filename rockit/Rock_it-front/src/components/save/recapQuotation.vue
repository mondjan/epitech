<script setup>
</script>
<template>
  <div class="content bg-gray-300 flex-grow h-screen flex flex-wrap content-center justify-evenly flex-row items-start grid grid-cols-2 gap-4">
    <div class="m-10">
      <p class="quotation">QUOTATION</p>
  
      <div>
        <label class="label" for="Organizer">Organizer</label>
        <span class="enter" type="text"
        id="Organizer"
        name="Organizer"></span>
      </div>
  
      <div>
        <label class="label" for="date">Desired service date</label>
        <span class="enter"
        
        type="text"
        id="date"
        name="date"></span>
      </div>
  
      <div class="listservice">
        <label class="label" for="Place">Place of services</label>
        <span class="enter" type="text" id="Adress" name="Adress"></span>
        <span class="enter" type="text" name="Code"></span>
        <span class="enter" type="text" name="City"></span>
      </div>
  
      <div>
        <label class="label" for="Total">Total</label>
        <span class="entertotal" type="text" id="Total" name="Total"></span>
      </div>
    </div>
  
    <div class="m-10">
      <br/>
      <br/>
      <br/>
      <br/>
      <div>
        <label class="label" for="Artist">To the attention of the Artist</label>
        <span class="enter" type="text" id="Artist" name="Artist"></span>
      </div>
  
      <div>
        <label class="label" for="Duration">Duration of service (HH/MM)</label>
        <span class="enter"
        type="text"
        id="Duration"
        name="Duration"></span>
      </div>
  
      <div>
        <label class="label" for="Price">Price of the service</label>
        <span class="enter" type="text" id="Price" name="Price"></span>
      </div>
      <br />
      <div>
        <p class="text-black" style="font-style: italic">
          The Artist has to be on the spot at least 2 hours before the event.<br /><br /><br />
          Artist has to be paid when the organizer and the Artist have both agreed to the contract.
        </p>
      </div>
    </div>
  </div>
</template>

<style>

.quotation {
  width: 878px;
  height: 72px;
  left: 86px;
  top: 17px;
  border-bottom: 1px solid black;
  margin-bottom: 5px;

  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 30px;
  display: flex;
  align-items: center;

  color: #000000;
}
.enter {
  width: 415.9px;
  height: 46.37px;
  left: 549.57px;
  top: 214.38px;

  background: rgba(0, 0, 0, 0.25);
  border: 1px solid #ffffff;
  border-radius: 6px;
}
.label {
  width: 415px;
  height: 26px;
  left: 89px;
  top: 183px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 19px;
  line-height: 23px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;
  margin-bottom: 5px;

  color: #4a4a4a;
}
.listservice{
display: flex;
flex-direction: column;
}
.entertotal{
  width: 393px;
height: 34px;
left: 89px;
top: 607px;
filter: brightness(.85);
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 19px;
line-height: 23px;
display: flex;
align-items: center;

color: rgba(0, 0, 0, 0.32);
}
.comment{
  background-color: #000000;
}
span{
  color: #000000;
}

</style>