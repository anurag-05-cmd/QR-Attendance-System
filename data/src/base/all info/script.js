// Server Side
document.addEventListener('DOMContentLoaded', () => {
    preventInspectAndReload();
});
function preventInspectAndReload() {
    document.addEventListener('contextmenu', (e) => {
        e.preventDefault(); 
    });
    document.onkeydown = function(e) {
        if (e.keyCode == 123) {
            return false;
        }
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
            return false;
        }
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
            return false;
        }
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
            return false;
        }
        if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
            return false;
        }
    };
    
    window.onbeforeunload = function () {
        return "Are you sure you want to leave this page?"; 
    };
}
const users = [
  {Name:"Dzelle Faith R. Tan, Pauline Regina J. Obispo, Jonathan C. Morano, Khatalyn E. Mata",email_ID:"dzellefaith@gmail.com",collegeName:"University of the City of Manila",userID:"STP001",password:"spec25#5869"},
    {Name:"Sim Akhter",email_ID:"simakhter1109@gmail.com",collegeName:"Institute of Engineering and Management",userID:"STP002",password:"spec25#5870"},
    {Name:"Barnali Gupta",email_ID:"barnalig2005@gmail.com",collegeName:"Institute of Engineering and Management",userID:"STP003",password:"spec25#5871"},
    {Name:"Banu priya S",email_ID:"vtp4082@veltech.edu.in",collegeName:"Vel Tech Rangarajan Dr.Sagunthala R&D Institute of Science and Technology",userID:"STP004",password:"spec25#5872"},
    {Name:"Shiban Banerjee",email_ID:"endadul.91@gmail.com",collegeName:"Dr B C Roy Engineering College",userID:"STP005",password:"spec25#5873"},
    {Name:"Shieryl E. Tendilla",email_ID:"tendillashieryle@gmail.com",collegeName:"University of the City of Manila",userID:"STP006",password:"spec25#5874"},
    {Name:"Supratik Bhowal, Swastik Gayen",email_ID:"supratikbhowal23@gmail.com",collegeName:"Institute of Engineering and Management",userID:"STP007",password:"spec25#5875"},
    {Name:"Rosalind Chakraborty",email_ID:"rosalindchakraborty19@gmail.com",collegeName:"Supreme Knowledge Foundation Group of Institutions",userID:"STP008",password:"spec25#5876"},
    {Name:"Dr. Arijit Chakraborty",email_ID:"profarijit4@gmail.com",collegeName:"Govt. College of Engineering and Textile Technology, Serampore",userID:"STP009",password:"spec25#5877"},
    {Name:"Saagar Sengupta",email_ID:"senguptasaagar2711@gmail.com",collegeName:"Institute of Engineering & Management (IEM)",userID:"STP010",password:"spec25#5878"},
    {Name:"Swapnoneel Mondal",email_ID:"swapnoneelmondal@gmail.com",collegeName:"Institute Of Engineering And Management (IEM)",userID:"STP011",password:"spec25#5879"},
    {Name:"Swapna Swadhikta Behera",email_ID:"swapnaswadhiktabehera@gmail.com",collegeName:"Institute of Engineering and Management",userID:"STP012",password:"spec25#5880"},
    {Name:"Aratreeka Pahari",email_ID:"aratreekapahari@gmail.com",collegeName:"Institute of Engineering & Management",userID:"STP013",password:"spec25#5881"},
    {Name:"Prerana Manna",email_ID:"preranamanna1414@gmail.com",collegeName:"Institute of Engineering and Management",userID:"STP014",password:"spec25#5882"},
    {Name:"Souraggi Roy",email_ID:"souraggiiem372024@gmail.com",collegeName:"Institute of Engineering & Management",userID:"STP015",password:"spec25#5883"},
    {Name:"Kaustav Ghosh",email_ID:"ghoshkaustav724@gmail.com",collegeName:"Institute of Engineering and Management ,salt lake,Kolkata",userID:"STP016",password:"spec25#5884"},
    {Name:"Rupsa dhar",email_ID:"dhar.rupu434@gmail.com",collegeName:"Institute of Engineering and Management Kolkata",userID:"STP017",password:"spec25#5885"},
    {Name:"Anuvab Sengupta",email_ID:"anuvabsg@gmail.com",collegeName:"Institute of Engineering and Management",userID:"STP018",password:"spec25#5886"},
    {Name:"Swastik Gayen",email_ID:"gayenswastik@gmail.com",collegeName:"Institute of Engineering and Management",userID:"STP019",password:"spec25#5887"},
    {Name:"Rikta Maity",email_ID:"riktamaita2006@gmail.com",collegeName:"Institute of Engineering and Management",userID:"STP020",password:"spec25#5888"},
    {Name:"Anjali Mehto",email_ID:"anjalimehto12@gmail.com",collegeName:"Dr. Harisingh Gour University (A Central University), Sagar (M.P.)",userID:"STP021",password:"spec25#5889"},
    {Name:"Tina Maity",email_ID:"tinamaity.cal@gmail.com",collegeName:"Institute of Engineering and Management",userID:"STP022",password:"spec25#5890"},
    {Name:"Rittika Das",email_ID:"dasritiika.1206@gmail.com",collegeName:"Institute of Engineering and Management, Saltlake",userID:"STP023",password:"spec25#5891"},
    {Name:"Arunima Bhowmick",email_ID:"arunimabhowmick5@gmail.com",collegeName:"Institute of Engineering and Management Kolkata",userID:"STP024",password:"spec25#5892"},
    {Name:"Gaurav Dutta",email_ID:"grvdutta06@gmail.com",collegeName:"Institute of Engineering and Management",userID:"STP025",password:"spec25#5893"},
    {Name:"Akshita Banerjee",email_ID:"akshita.banerjee06@gmail.com",collegeName:"Institute of Engineering and Management",userID:"STP026",password:"spec25#5894"},
    {Name:"Soumyodipta Saha",email_ID:"soumyodiptasaha2005@gmail.com",collegeName:"Institute of Engineering and Management",userID:"STP027",password:"spec25#5895"},
    {Name:"Rohit Kamal Chakraborty",email_ID:"chakrabortyrohit5002@gmail.com",collegeName:"Institute of Engineering and Management",userID:"STP028",password:"spec25#5896"},
    {Name:"Abhinab Chatterjee",email_ID:"abhinabchatterjee123@gmail.com",collegeName:"Institute of engineering and management",userID:"STP029",password:"spec25#5897"},
    {Name:"Oindrila Banerjee",email_ID:"banerjeeoindrila40@gmail.com",collegeName:"Institute of Engineering and Management",userID:"STP030",password:"spec25#5898"},
    {Name:"Ipsita Mahato",email_ID:"ipsitamahato2309@gmail.com",collegeName:"Institute of Engineering and Management, Salt Lake",userID:"STP031",password:"spec25#5899"},
    {Name:"Sayan Kar",email_ID:"karsayan026@gmail.com",collegeName:"Institute of Engineering and Management, Salt Lake",userID:"STP032",password:"spec25#5900"},
    {Name:"Rounak Chakraborti",email_ID:"rounakchakraborti499@gmail.com",collegeName:"Institute Of Engineering And Management",userID:"STP033",password:"spec25#5901"},
    {Name:"Arunesh Sharma , Dr. Kushal Chakraborty",email_ID:"aruneshsharma2006@gmail.com",collegeName:"Department of CSE-Data Science and Department of CSE-AIML(Physics) , Jain Deemed To Be University, Bangalore, India",userID:"STP034",password:"spec25#5902"},
    {Name:"Ritwapriya Mohanta",email_ID:"ritwapriya@gmail.com",collegeName:"Indian Institute Of Engineering and Management",userID:"STP035",password:"spec25#5903"},
    {Name:"Raghu Para",email_ID:"raghukpara@gmail.com",collegeName:"Independent Researcher",userID:"STP036",password:"spec25#5904"},
    {Name:"Ankita Sarkar",email_ID:"ankitasarkar.sectionn@gmail.com",collegeName:"Institute of Engineering & Management",userID:"STP037",password:"spec25#5905"},
    {Name:"Anushka Maitra",email_ID:"anushkamaitra1978@gmail.com",collegeName:"Institute of Engineering and Management",userID:"STP038",password:"spec25#5906"},
    {Name:"Sambiti Chattopadhyay",email_ID:"sambitichattopadhyay@gmail.com",collegeName:"Institute of Engineering &Management",userID:"STP039",password:"spec25#5907"},
    {Name:"SOUMIT MANNA",email_ID:"soumitmanna.india@gmail.com",collegeName:"Institute of Engineering and Management, Salt lake",userID:"STP040",password:"spec25#5908"},
    {Name:"Ahana Dhar",email_ID:"tanusreedhar05@gmail.com",collegeName:"Institute of engineering and management",userID:"STP041",password:"spec25#5909"},
    {Name:"Diya Samanta",email_ID:"diya6samanta@gmail.com",collegeName:"Institute of Engineering and Management",userID:"STP042",password:"spec25#5910"},
    {Name:"Ahana Parya",email_ID:"ahanaparya@gmail.com",collegeName:"Institute of Engineering and Management",userID:"STP043",password:"spec25#5911"},
    {Name:"Mahesh Ganji",email_ID:"mahesh.ganji@gmail.com",collegeName:"PricewaterhouseCoopers LLP",userID:"STP044",password:"spec25#5912"},
    {Name:"Udipta Dhara",email_ID:"udiptadhara00@gmail.com",collegeName:"Institute of Engineering and Management",userID:"STP045",password:"spec25#5913"},
    {Name:"Srinjoy Aich",email_ID:"srinjoyaich2004@gmail.com",collegeName:"Institute of Engineering and Management ,Kolkata",userID:"STP046",password:"spec25#5914"},
    {Name:"Mayukh Datta",email_ID:"mayukhdatta45@gmail.com",collegeName:"Institute of Engineering and Management",userID:"STP047",password:"spec25#5915"},
    {Name:"Soumyadeep Mondal",email_ID:"soumyadeepccu@gmail.com",collegeName:"Institute of Engineering & Management",userID:"STP048",password:"spec25#5916"},
    {Name:"Arjya Kumar Paul",email_ID:"arjya2004@gmail.com",collegeName:"Institute Of Engineering And Management",userID:"STP049",password:"spec25#5917"},
    {Name:"Shreya Ghosh",email_ID:"s.ghosh260972@gmail.com",collegeName:"Institute of Engineering and Management, Saltlake, Kolkata",userID:"STP050",password:"spec25#5918"},
    {Name:"ANAMIKA BHATTACHARYYA",email_ID:"anamika.bhattacharyya05@gmail.com",collegeName:"Institute of Engineering and Management, Salt Lake, Kolkata",userID:"STP051",password:"spec25#5919"},
    {Name:"Swastika Chakraborty",email_ID:"sujoya.sojasuji.chakraborty@gmail.com",collegeName:"IEM, saltlake",userID:"STP052",password:"spec25#5920"},
    {Name:"Deblina Mondal",email_ID:"deblinamondaliem@gmail.com",collegeName:"Institute of engineering and management",userID:"STP053",password:"spec25#5921"},
    {Name:"Arna Roy",email_ID:"arnaroy2007@gmail.com",collegeName:"Institute of Engineering and Management (IEM) Kolkata Salt Lake",userID:"STP054",password:"spec25#5922"},
    {Name:"Dhruv Poddar",email_ID:"kdhruvpoddar@gmail.com",collegeName:"Institute of Engineering and Management , Kolkata",userID:"STP055",password:"spec25#5923"},
    {Name:"Sandipan Mondal",email_ID:"sukhenmandal836@gmail.com",collegeName:"University Of Engineering And Management",userID:"STP056",password:"spec25#5924"},
    {Name:"Sahitya Jana",email_ID:"janasahitya766@gmail.com",collegeName:"Institute of Engineering and Management",userID:"STP057",password:"spec25#5925"},
    {Name:"Tanmay Kundu",email_ID:"mddlld29@gmail.com",collegeName:"Institute of Engineering and Management",userID:"STP058",password:"spec25#5926"},
    {Name:"Shivangi Chatterjee",email_ID:"shivangichatterjee2005@gmail.com",collegeName:"Institute of Engineering and Management, Kolkata",userID:"STP059",password:"spec25#5927"},
    {Name:"Bihan Ray",email_ID:"bihan.leo.ray@gmail.com",collegeName:"Institute of Engineering And Management",userID:"STP060",password:"spec25#5928"},
    {Name:"Laxmikant Thakur",email_ID:"laxmikantthakur00143@gmail.com",collegeName:"Institute of Engineering and Management",userID:"STP061",password:"spec25#5929"},
    {Name:"Adrija Dan",email_ID:"danadrija@gmail.com",collegeName:"Institute of Engineering & Management, Kolkata",userID:"STP062",password:"spec25#5930"},
    {Name:"Rhine Dutta",email_ID:"satanrhine111@gmail.com",collegeName:"Institute of Engineering and Management",userID:"STP063",password:"spec25#5931"},
    {Name:"DIBYADARSHI DAS",email_ID:"dasdibyadarshi2021@gmail.com",collegeName:"IEM KOLKATA",userID:"STP064",password:"spec25#5932"},
    {Name:"Swapnil Dey",email_ID:"sdey30525@gmail.com",collegeName:"KIIT Deemed to be University",userID:"STP065",password:"spec25#5933"},
    {Name:"ROUNAK DAS BISWAS",email_ID:"rounakdasbiswas@gmail.com",collegeName:"Institute of Engineering and Management,Kolkata",userID:"STP066",password:"spec25#5934"},
    {Name:"Asmita Sinha",email_ID:"asmitasinha313@gmail.com",collegeName:"Institute of Engineering and Management, Saltlake, Kolkata",userID:"STP067",password:"spec25#5935"},
    {Name:"Debraj Debnath",email_ID:"ddebraj496@gmail.com",collegeName:"Institute of engineering and management",userID:"STP068",password:"spec25#5936"},
    {Name:"Somoshree Pal",email_ID:"somoshree2006@gmail.com",collegeName:"Institute of Engineering and Management, Kolkata",userID:"STP069",password:"spec25#5937"},
    {Name:"PUNARBOSU PANJA",email_ID:"punarbosupanja@gmail.com",collegeName:"INSTITUTE OF ENGINEERING AND MANAGEMENT, KOLKATA",userID:"STP070",password:"spec25#5938"},
    {Name:"Subhra Rakshit",email_ID:"subhrar.physics.rs@jadavpuruniversity.in",collegeName:"Jadavpur University",userID:"STP071",password:"spec25#5939"},
    {Name:"Sandeep Panchal",email_ID:"2290sandy@gmail.com",collegeName:"Government Polytechnic Mankeda, Agra",userID:"STP072",password:"spec25#5940"},
    {Name:"Ritam Das",email_ID:"ritam30052005@gmail.com",collegeName:"Institute of Engineering and Management",userID:"STP073",password:"spec25#5941"},
    {Name:"Biswajit Das",email_ID:"biswajitdass1980@gmail.com",collegeName:"Vidyasagar University",userID:"STP074",password:"spec25#5942"},
    {Name:"Yash Maity",email_ID:"ayushmaity7@gmail.com",collegeName:"Institute Of Engineering and Management",userID:"STP075",password:"spec25#5943"},
    {Name:"Anoushka Bhattacharya",email_ID:"anoushkabhattacharya07@gmail.com",collegeName:"Institute of Engineering and Management",userID:"STP076",password:"spec25#5944"},
    {Name:"Monalisa Karak",email_ID:"monalisakarak00@gmail.com",collegeName:"Institute of Engineering and Management Kolkata",userID:"STP077",password:"spec25#5945"},
    {Name:"Sanika Ingle",email_ID:"kshitijtodkar4826@gmail.com",collegeName:"JSPM’s Rajarshi Shahu College of Engineering, Pune, Maharashtra, India",userID:"STP078",password:"spec25#5946"},
    {Name:"Shrijita LO",email_ID:"shrijitalo5@gmail.com",collegeName:"Institute Of Engineering And Management",userID:"STP079",password:"spec25#5947"},
    {Name:"Sworjjomoy Pathak",email_ID:"sworjjomoypathak2602@gmail.com",collegeName:"Institute of engineering and management kolkata",userID:"STP080",password:"spec25#5948"},
    {Name:"ABHIJIT MONDAL",email_ID:"sapnanir2019@gmail.com",collegeName:"Institute of Engineering and Management",userID:"STP081",password:"spec25#5949"},
    {Name:"Anindita Ganguly",email_ID:"aninditaganguly32@gmail.com",collegeName:"Institute of Engineering and Management",userID:"STP082",password:"spec25#5950"},
    {Name:"Abhishek Erugadindla,Gangadhar Marka,Sriram Bathula",email_ID:"abhishekerugadindla@gmail.com",collegeName:"Chaitanya Bharathi Institute Of Technology(CBIT),Hyderabad,Telangana",userID:"STP083",password:"spec25#5951"},
    {Name:"PRAJAKTA GHOSH",email_ID:"m33prajaktaghosh@gmail.com",collegeName:"INSTITUTE OF ENGINEERING AND MANAGEMENT",userID:"STP084",password:"spec25#5952"},
    {Name:"Sneha Shaw",email_ID:"snehashaw2804@gmail.com",collegeName:"Institute of Engineering and Management",userID:"STP085",password:"spec25#5953"},
    {Name:"Snehanshu Bhattacharjee",email_ID:"snehanshubhattacharjee2003@gmail.com",collegeName:"Institute of Engineering and Management",userID:"STP086",password:"spec25#5954"},
    {Name:"Sharanya Chatterjee",email_ID:"bishaljish06@gmail.com",collegeName:"Institute of Engineering and Management, Saltlake",userID:"STP087",password:"spec25#5955"},
    {Name:"Haimashree Ghosh",email_ID:"haimashreeghosh3@gmail.com",collegeName:"Institute of Engineering and Management",userID:"STP088",password:"spec25#5956"},
    {Name:"Agnish Arpan Das",email_ID:"agnish.arpan@gmail.com",collegeName:"Institute Of Engineering and Management, Kolkata",userID:"STP089",password:"spec25#5957"},
    {Name:"Srijita Saha",email_ID:"srijitaofficial2607@gmail.com",collegeName:"Institute of Engineering and Management,Kolkata",userID:"STP090",password:"spec25#5958"},
    {Name:"Syeda Mehnaz Hasan",email_ID:"syedamehnazhasan@gmail.com",collegeName:"Institute of Engineering and Management, Kolkata",userID:"STP091",password:"spec25#5959"},
    {Name:"Shourabh Kumar Sahu",email_ID:"shourabhsahu3749@gmail.com",collegeName:"Jain university",userID:"STP092",password:"spec25#5960"},
    {Name:"Anurag Deb",email_ID:"anurag.sxi@gmail.com",collegeName:"Technical Team",userID:"STP093",password:"spec25#5961"},
    {Name:"Sangram Keshari Patra",email_ID:"sangramkpatra03@gmail.com",collegeName:"Technical Team",userID:"STP094",password:"spec25#5962"},
    {Name:"Prithvi Raj Banik",email_ID:"prithvirajbanik900@gmail.com",collegeName:"Technical Team",userID:"STP095",password:"spec25#5963"},
    {Name:"Debapriya Mondal",email_ID:"thedebapriyamondal@gmail.com",collegeName:"Technical Team",userID:"STP096",password:"spec25#5964"}          ]
  
  const loginForm = document.getElementById("login-form")
  const dashboard = document.getElementById("dashboard")
  const authForm = document.getElementById("auth-form")
  const themeToggle = document.getElementById("theme-toggle")
  
  authForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const userId = document.getElementById("user-id").value
    const password = document.getElementById("password").value
  
    const user = users.find((u) => u.userID === userId && u.password === password)
  
    if (user) {
      showDashboard(user)
    } else {
      alert("Invalid user ID or password")
    }
  })
  
  function showDashboard(user) {
    document.querySelector(".team-picture").style.display = "none"
    loginForm.style.display = "none"
    dashboard.style.display = "block"
  
    document.getElementById("user-name").textContent = user.Name
    document.getElementById("college-name").textContent = user.collegeName
    document.getElementById("email-id").textContent = user.email_ID
  
    generateQRCode(user.userID)
  }
  
  function generateQRCode(userId) {
    const qr = qrcode(0, "M")
    qr.addData(userId)
    qr.make()
  
    const qrImage = qr.createImgTag(10)
    document.getElementById("qr-code").innerHTML = qrImage
  }
  
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode")
    updateThemeToggle()
    saveThemePreference()
  })
  
  function updateThemeToggle() {
    const isDarkMode = document.body.classList.contains("dark-mode")
    themeToggle.setAttribute("aria-label", isDarkMode ? "Switch to light mode" : "Switch to dark mode")
  }
  
  function saveThemePreference() {
    const isDarkMode = document.body.classList.contains("dark-mode")
    localStorage.setItem("theme", isDarkMode ? "dark" : "light")
  }
  
  // Check for saved theme preference or set based on user's system preference
  if (
    localStorage.getItem("theme") === "dark" ||
    (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.body.classList.add("dark-mode")
  }
  
  // Update toggle button state on page load
  updateThemeToggle()
  
  