
document.addEventListener("DOMContentLoaded", function() {
  fetch('https://api.cricapi.com/v1/currentMatches?apikey=b608cb19-813a-4180-94fb-c3c91526a3fe&offset=0') // Replace with your API endpoint
      .then(response => response.json())
      .then(result => {
          var first = result.data[6];
          // Display Team 1 details data[3]  var first = result.data[3];
          var sc=first.score[0];
          var img=first.teamInfo[0];
          document.getElementById('team1-image').src =img.img;
          document.getElementById('team1-name').textContent =img.name;
          document.getElementById('team1-runs').textContent =sc.r;
          document.getElementById('team1-overs').textContent =sc.o;

          // Display Team 2 details
          var sc1=first.score[1];
          var img1=first.teamInfo[1];
          document.getElementById('team2-image').src =img1.img;
          document.getElementById('team2-name').textContent =img1.name;
          document.getElementById('team2-runs').textContent = sc1.r;
          document.getElementById('team2-overs').textContent =sc1.o;

          document.getElementById('status').textContent =first.status;
      })
      .catch(error => {
          console.error('Error fetching data:', error);
          alert('Error fetching data. Please try again later.');
      });
});




var d=document.getElementById("cursor");
var e=document.getElementById("cursor-blur");
document.addEventListener("mousemove",function(l)
{
  d.style.left=l.x+"px";
  d.style.top=l.y+"px";
  e.style.left=l.x-120+"px";
  e.style.top=l.y-120+"px";
})
gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "100px",
    scrollTrigger: {
      trigger: "#nav",
      scroller: "body",
      // markers:true,
      start: "top 1%",
      end: "top -11%",
      scrub: 1,
    },
  });

  gsap.to("#main", {
    // backgroundColor: "#000",
    scrollTrigger: {
      trigger: "#main",
      scroller: "body",
      // markers: true,
      start: "top -25%",
      end: "top -70%",
      scrub: 2,
    },
  });
//https://api.cricapi.com/v1/currentMatches?apikey=b608cb19-813a-4180-94fb-c3c91526a3fe&offset=9
//https://api.cricapi.com/v1/currentMatches?apikey=b608cb19-813a-4180-94fb-c3c91526a3fe&offset=0
function home()
{
 window.scrollTo(0,0);
}
 function go()
 {
  window.scrollTo(0,500);
 }
 function pointtable()
 {
  window.scrollTo(0,1450);
 }
 function ls()
 {
  window.scrollTo(0,2000);
 }
 