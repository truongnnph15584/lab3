const header = {
    print() {
        return /* html */`
      <div class="top flex justify-around h-20 relative">
        <img class="w-1/6" src="img/logo-dark.png" alt="">
        <div class="menu ">
          <nav>
            <ul class="flex mt-7">
              <li class="px-5 text-xl font-medium border-b-4 border-white hover:border-indigo-500"><a href="">Home</a></li>
              <li class="px-5 text-xl font-medium border-b-4 border-white hover:border-indigo-500"><a href="">About At</a></li>
              <li class="px-5 text-xl font-medium border-b-4 border-white hover:border-indigo-500"><a href="">News</a></li>
              <li class="px-5 text-xl font-medium border-b-4 border-white hover:border-indigo-500"><a href="">Hot</a></li>
              <li class="px-5 text-xl font-medium border-b-4 border-white hover:border-indigo-500"><a href="">Contact</a></li>
              <li class="px-5 text-xl font-medium border-b-4 border-white hover:border-indigo-500"><a href="/admin/dashboard">Dashboard</a></li>
            </ul>
          </nav>
        </div>
        <div class="signup_sigin text-lg font-medium absolute right-10 mt-5">
          <a href="/signup">Signup</a> / <a href="/signin">Signin</a>
        </div>
      </div>
      <div class="banner">
        <img src="img/banner.jpg" style="width: 100%; height: 500px;" alt="">
      </div>
        `;
    }
}

export default header;
