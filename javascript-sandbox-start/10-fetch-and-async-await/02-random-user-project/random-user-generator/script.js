function fetchUser() {
   fetch('http://randomuser.me/api')
   .then((res) => res.json())
   .then((data) => {
    console.log(data)
   });
};

fetchUser();