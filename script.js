window.onscroll = function() {myFunction()};
        
        var navbar = document.getElementById("navbar");
        var sticky = navbar.offsetTop;
        function myFunction() {
          if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")
          } else {
            navbar.classList.remove("sticky");
          }
        }

        
const numCols = 3;


const masonryCon = document.querySelector('.boxes-con');

const list = document.querySelectorAll('.boxes')

for (var i = 1; i < numCols + 1; i++) {
  let elem = document.createElement('div')
  elem.classList.add('sub')
  elem.classList.add('box' + i)
  masonryCon.append(elem)
}

thearray = [...Array(numCols).keys()]
themainarray = []

let timesBy

if (list.length % numCols == 0) {
  timesBy = Math.floor(list.length / numCols)
} else {
  timesBy = Math.ceil(list.length / numCols)
}

for (var j = 0; j < timesBy; j++) {
  themainarray.push(...thearray)
}

subs = document.querySelectorAll('.sub')

for (var b = 0; b < themainarray.length; b++) {
  subs[themainarray[b]].appendChild(list[b])
}

function pageWidth() {  return window.innerWidth != null? window.innerWidth : document.documentElement && document.documentElement.clientWidth ? document.documentElement.clientWidth : document.body != null ? document.body.clientWidth : null; }

width = pageWidth()
</script>