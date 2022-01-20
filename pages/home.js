import data from "../src/data";

const home = {
    print() {
        return /* html */`
       <div class="title">
       <h2 class="text-4xl font-bold my-10">News</h2>
     </div>
     <div class="content_new flex ">
       <a href="">
         <div class="item border mx-6">
           <img src="img/news_1.jpg" alt="">
           <div class="text bg-cyan-700">
             <h2 class="text-xl font-bold mx-6 text-white pt-3">Mechanical Engineering</h2>
             <p class="mx-6 text-slate-100 mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum has been.</p> <br>
           </div>
         </div>
       </a>
       <a href="">
         <div class="item border mx-6">
           <img src="img/news_1.jpg" alt="">
           <div class="text bg-cyan-700">
             <h2 class="text-xl font-bold mx-6 text-white pt-3">Mechanical Engineering</h2>
             <p class="mx-6 text-slate-100 mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum has been.</p> <br>
           </div>
         </div>
       </a>
       <a href="">
         <div class="item border mx-6">
           <img src="img/news_1.jpg" alt="">
           <div class="text bg-cyan-700">
             <h2 class="text-xl font-bold mx-6 text-white pt-3">Mechanical Engineering</h2>
             <p class="mx-6 text-slate-100 mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum has been.</p> <br>
           </div>
         </div>
       </a>   
     </div>
       `;
    }
}

export default home;
