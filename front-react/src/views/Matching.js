import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import '../components/create.css';

class Matching extends Component{

  render(){
    return(

      <div>

<Navigation />
<br></br>
   <br></br>

   <br></br>

   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>
   <br></br>

   <br></br>

   <br></br>

   <br></br>

   <section className="Add">
      <div className="container">
        <div className="register_form">
        <center>
          <h3><font face="Fc active" size={17}>ค้นหาวิชาที่เหมาะกับฉัน</font></h3></center>
          <form className="form_area" id="myForm"  method="post"> 
          {/* action="mail.html" */}
           
                <div className="row">
                  <div className="col-25">
                    <label htmlFor="name">มีงานเดี่ยว / งานกลุ่ม</label>
                  </div>
                  <div className="col-75">
                    <select id="้homework" name="้homework">
                      <option value="้homework1">1</option>
                      <option value="้homework2">2</option>
                      <option value="้homework3">3</option>
                      <option value="้homework4">4</option>
                      <option value="้homework5">5</option>
                      <option value="้homework6">6</option>
                      <option value="้homework7">7</option>
                      <option value="้homework8">8</option>


                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-25">
                    <label htmlFor="name">มีสอบกลางภาค</label>
                  </div>
                  <div className="col-75">
                    <select id="midterm" name="midterm">
                    <option value="้midterm1">1</option>
                      <option value="้midterm2">2</option>
                      <option value="้midterm3">3</option>
                      <option value="้midterm4">4</option>
                      <option value="้midterm5">5</option>
                      <option value="้midterm6">6</option>
                      <option value="้midterm7">7</option>
                      <option value="้midterm8">8</option>
                    </select>
                  </div>
                </div>

                <div className="row">
                  <div className="col-25">
                    <label htmlFor="name">เช็คชื่อ / เข้าเรียน</label>
                  </div>
                  <div className="col-75">
                    <select id="check" name="check">
                    <option value="้check1">1</option>
                      <option value="้check2">2</option>
                      <option value="้check3">3</option>
                      <option value="้check4">4</option>
                      <option value="้check5">5</option>
                      <option value="้check6">6</option>
                      <option value="้check7">7</option>
                      <option value="้check8">8</option>
                    </select>
                  </div>
                </div>
            
                <div className="row">
                  <div className="col-25">
                    <label htmlFor="name">สุ่มเกรด</label>
                  </div>
                  <div className="col-75">
                    <select id="random" name="random">
                    <option value="้random1">1</option>
                      <option value="้random2">2</option>
                      <option value="้random3">3</option>
                      <option value="้random4">4</option>
                      <option value="้random5">5</option>
                      <option value="้random6">6</option>
                      <option value="้random7">7</option>
                      <option value="้random8">8</option>
                    </select>
                  </div>
                </div>


                <div className="row">
                  <div className="col-25">
                    <label htmlFor="name">ความยากของเนื้อหา</label>
                  </div>
                  <div className="col-75">
                    <select id="้hard" name="้hard">
                    <option value="้้hard1">1</option>
                      <option value="้้hard2">2</option>
                      <option value="้้hard3">3</option>
                      <option value="้้hard4">4</option>
                      <option value="้้hard5">5</option>
                      <option value="้้hard6">6</option>
                      <option value="้้hard7">7</option>
                      <option value="้้hard8">8</option>
                    </select>
                  </div>
                </div>

                <div className="row">
                  <div className="col-25">
                    <label htmlFor="name">ต้องแต่งตัวเรียบร้อย</label>
                  </div>
                  <div className="col-75">
                    <select id="dress" name="dress">
                    <option value="้dress1">1</option>
                      <option value="้dress2">2</option>
                      <option value="้dress3">3</option>
                      <option value="้dress4">4</option>
                      <option value="้dress5">5</option>
                      <option value="้dress6">6</option>
                      <option value="้dress7">7</option>
                      <option value="้dress8">8</option>
                    </select>
                  </div>
                </div>

                <div className="row">
                  <div className="col-25">
                    <label htmlFor="name">เรียนไม่เต็มเวลา</label>
                  </div>
                  <div className="col-75">
                    <select id="time" name="time">
                    <option value="้time1">1</option>
                      <option value="้time2">2</option>
                      <option value="้time3">3</option>
                      <option value="้time4">4</option>
                      <option value="้time5">5</option>
                      <option value="้time6">6</option>
                      <option value="้time7">7</option>
                      <option value="้time8">8</option>
                    </select>
                  </div>
                </div>
                
                </form>
              </div> 
             
              <div className="col-lg-12 text-center">
              <br></br>

              <br></br>

              <br></br>
                <button className="primary-btn">ค้นหา</button>
              </div>
            </div>
      
      </section> 

      
     </div>
    );
  }

}

  export default Matching;