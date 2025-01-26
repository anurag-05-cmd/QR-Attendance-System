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
    {email:"saraswatachatterjee11@gmail.com",name:"Saraswata Chatterjee ",enrollmentNo:12024052019003,section:"K",rollNo:71,contactNo:9147391515,password:"sara71K",id:"RK20259003"},
{email:"captain1298@gmail.com",name:"Sidhartha Sarkar",enrollmentNo:12024052017050,section:"K",rollNo:40,contactNo:7810872664,password:"sidh40K",id:"RK20257050"},
{email:"adhikary.anwesha23@gmail.com",name:"Anwesha Adhikary",enrollmentNo:12024052020030,section:"E",rollNo:15,contactNo:6295860740,password:"anwe15E",id:"RK20250030"},
{email:"swastikadas32006@gmail.com",name:"swastika das",enrollmentNo:12024052020048,section:"E",rollNo:35,contactNo:6297394618,password:"swas35E",id:"RK20250048"},
{email:"karsayan026@gmail.com",name:"Sayan Kar",enrollmentNo:12024052002158,section:"O",rollNo:1,contactNo:8617833097,password:"saya1O",id:"RK20252158"},
{email:"ahanaparya@gmail.com",name:"Ahana Parya",enrollmentNo:12024052002092,section:"I",rollNo:18,contactNo:7478240048,password:"ahan18I",id:"RK20252092"},
{email:"t.lowha@gmail.com",name:"Tusita Lowha ",enrollmentNo:12024052002108,section:"I",rollNo:34,contactNo:7003601080,password:"tusi34I",id:"RK20252108"},
{email:"prajakta.bose09@gmail.com",name:"Prajakta Bose ",enrollmentNo:12024052020044,section:"E",rollNo:31,contactNo:9474958548,password:"praj31E",id:"RK20250044"},
{email:"suranjanamajumdar05@gmail.com",name:"Suranjana Majumdar",enrollmentNo:12024052004001,section:"M",rollNo:53,contactNo:8017917185,password:"sura53M",id:"RK20254001"},
{email:"06adrija@gmail.com",name:"Adrija Chakraborty",enrollmentNo:12024052004004,section:"M",rollNo:56,contactNo:7003464458,password:"adri56M",id:"RK20254004"},
{email:"anubhabbera719@gmail.com",name:"Anubhab Bera ",enrollmentNo:12024052003202,section:"C",rollNo:60,contactNo:7365936528,password:"anub60C",id:"RK20253202"},
{email:"adrijakundu06@gmail.com",name:"Adrija Kundu ",enrollmentNo:12024052002122,section:"I",rollNo:50,contactNo:7363010940,password:"adri50I",id:"RK20252122"},
{email:"arnabde2005@gmail.com",name:"Arnab De",enrollmentNo:12024052019014,section:"K",rollNo:54,contactNo:7001442965,password:"arna54K",id:"RK20259014"},
{email:"tousifhalder8926@gmail.com",name:"Tousif Aman Halder",enrollmentNo:12024052002072,section:"J",rollNo:78,contactNo:8240588201,password:"tous78J",id:"RK20252072"},
{email:"smoothitup22@gmail.com",name:"Anshuman Sikdar ",enrollmentNo:12024052002054,section:"J",rollNo:55,contactNo:7001092240,password:"ansh55J",id:"RK20252054"},
{email:"debanganbanerjeei32@gmail.com",name:"Debangan Banerjee ",enrollmentNo:12024052002106,section:"I",rollNo:32,contactNo:9064677560,password:"deba32I",id:"RK20252106"},
{email:"kumararghya2005@gmail.com",name:"Arghya Kumar",enrollmentNo:12024052002227,section:"J",rollNo:32,contactNo:9333453198,password:"argh32J",id:"RK20252227"},
{email:"jainkirti379@gmail.com",name:"Kirti Jain",enrollmentNo:12024052011079,section:"E",rollNo:57,contactNo:9304640993,password:"kirt57E",id:"RK20251079"},
{email:"das3442sayan@gmail.com",name:"Sayan Das",enrollmentNo:12024052002157,section:"K",rollNo:85,contactNo:6294407598,password:"saya85K",id:"RK20252157"},
{email:"ghoshsagnik737@gmail.com",name:"Sagnik Ghosh ",enrollmentNo:12024052019049,section:"L",rollNo:47,contactNo:8116196937,password:"sagn47L",id:"RK20259049"},
{email:"officially.mukherjeem@gmail.com",name:"Mayuri Mukherjee ",enrollmentNo:12024052013022,section:"G",rollNo:79,contactNo:8392055532,password:"mayu79G",id:"RK20253022"},
{email:"sohinidaspark@gmail.com",name:"Sohini Das",enrollmentNo:12024052018003,section:"L",rollNo:50,contactNo:7407438742,password:"sohi50L",id:"RK20258003"},
{email:"dattaiman56@gmail.com",name:"Iman Datta",enrollmentNo:12024052019047,section:"L",rollNo:45,contactNo:9735327317,password:"iman45L",id:"RK20259047"},
{email:"dattaiman1@gmail.com",name:"Deepsikha Halder",enrollmentNo:12024052019031,section:"L",rollNo:21,contactNo:9002791981,password:"deep21L",id:"RK20259031"},
{email:"danadrija@gmail.com",name:"Adrija Dan",enrollmentNo:12024052002099,section:"I",rollNo:25,contactNo:9330861448,password:"adri25I",id:"RK20252099"},
{email:"ghoshsohan321@gmail.com",name:"Sohan Ghosh ",enrollmentNo:12024052017010,section:"K",rollNo:56,contactNo:7439060665,password:"soha56K",id:"RK20257010"},
{email:"arpanghosh8617@gmail.com",name:"Arpan Ghosh",enrollmentNo:12024052017023,section:"K",rollNo:21,contactNo:8617676375,password:"arpa21K",id:"RK20257023"},
{email:"anushkamaitra1978@gmail.com",name:"Anushka Maitra",enrollmentNo:12024052019026,section:"L",rollNo:15,contactNo:8777033927,password:"anus15L",id:"RK20259026"},
{email:"chaudhuryaniruddha56@gmail.com",name:"Aniruddha Chaudhury ",enrollmentNo:12024052016060,section:"H",rollNo:11,contactNo:9088923831,password:"anir11H",id:"RK20256060"},
{email:"onlinemeghasaha@gmail.com",name:"Megha saha ",enrollmentNo:12024052019053,section:"K",rollNo:83,contactNo:7478512124,password:"megh83K",id:"RK20259053"},
{email:"trishagni2005@gmail.com",name:"Trishagni Chakraborty ",enrollmentNo:12024052003194,section:"C",rollNo:47,contactNo:8250718249,password:"tris47C",id:"RK20253194"},
{email:"haldershreyan@gmail.com",name:"Shreyan Halder",enrollmentNo:12024052003182,section:"C",rollNo:32,contactNo:8910608708,password:"shre32C",id:"RK20253182"},
{email:"ritamanyabhattacharjee@gmail.com",name:"Ritamanya Bhattacharjee ",enrollmentNo:12024052018021,section:"L",rollNo:72,contactNo:8276839133,password:"rita72L",id:"RK20258021"},
{email:"s.ghosh260972@gmail.com",name:"Shreya Ghosh ",enrollmentNo:12024052002028,section:"J",rollNo:14,contactNo:9433412822,password:"shre14J",id:"RK20252028"},
{email:"arpanseal98@gmail.com",name:"ARPAN SEAL",enrollmentNo:12024052013010,section:"G",rollNo:11,contactNo:8583002331,password:"arpa11G",id:"RK20253010"},
{email:"pritamhalder022@gmail.com",name:"Pritam Halder ",enrollmentNo:12024052007042,section:"G",rollNo:69,contactNo:9832691599,password:"prit69G",id:"RK20257042"},
{email:"reneshdutta2828@gmail.com",name:"Renesh Dutta",enrollmentNo:12024052019088,section:"L",rollNo:18,contactNo:8420457404,password:"rene18L",id:"RK20259088"},
{email:"sonadas0409@gmail.com",name:"Shreyan Das",enrollmentNo:12024052018066,section:"M",rollNo:45,contactNo:9002746235,password:"shre45M",id:"RK20258066"},
{email:"dasarushi1705@gmail.com",name:"Arushi Das ",enrollmentNo:12024052017049,section:"L",rollNo:30,contactNo:"90733 50885 ",password:"arus30L",id:"RK20257049"},
{email:"sahabijoy8583@gmail.com",name:"Bijoy Saha",enrollmentNo:12024052018036,section:"M",rollNo:12,contactNo:8777678553,password:"bijo12M",id:"RK20258036"},
{email:"aishikaa1394@gmail.com",name:"Aishika Das",enrollmentNo:12024052004021,section:"M",rollNo:75,contactNo:7595026963,password:"aish75M",id:"RK20254021"},
{email:"bandhanmukherjee333@gmail.com",name:"Bandhan Mukherjee",enrollmentNo:12024052002049,section:"J",rollNo:47,contactNo:9851146006,password:"band47J",id:"RK20252049"},
{email:"aryadutta1101@gmail.com",name:"Arya Dutta",enrollmentNo:12024052002033,section:"J",rollNo:24,contactNo:8017158748,password:"arya24J",id:"RK20252033"},
{email:"manjeetkumar71569@gmail.com",name:"Manjeet Kumar ",enrollmentNo:12024052019022,section:"L",rollNo:8,contactNo:9142471569,password:"manj8L",id:"RK20259022"},
{email:"palrupam2030@gmail.com",name:"RUPAM KUMAR PAL",enrollmentNo:12024052017037,section:"K",rollNo:36,contactNo:8942853484,password:"rupa36K",id:"RK20257037"},
{email:"bhattacharyatejas@gmail.com",name:"Tejas Bhattacharya",enrollmentNo:12024052007052,section:"F",rollNo:5,contactNo:9433391527,password:"teja5F",id:"RK20257052"},
{email:"gangulyarghyadeep700@gmail.com",name:"Arghyadeep Ganguly ",enrollmentNo:12024052003102,section:"B",rollNo:49,contactNo:9933547130,password:"argh49B",id:"RK20253102"},
{email:"arghyamajumdar555@gmail.com",name:"Arghya Majumdar",enrollmentNo:12024052007039,section:"G",rollNo:66,contactNo:9832769269,password:"argh66G",id:"RK20257039"},
{email:"adrijadutta855@gmail.com",name:"Adrija Dutta",enrollmentNo:12024052017063,section:"O",rollNo:70,contactNo:8777048933,password:"adri70O",id:"RK20257063"},
{email:"adityaofficial166@gmail.com",name:"Aditya Adhikari ",enrollmentNo:12024052003025,section:"B",rollNo:30,contactNo:9038662476,password:"adit30B",id:"RK20253025"},
{email:"kumarimahi2201@gmail.com",name:"Mahi Kumari",enrollmentNo:12024052011077,section:"E",rollNo:28,contactNo:7856072426,password:"mahi28E",id:"RK20251077"},
{email:"burmanavinav@gmail.com",name:"Avinav Deep Burman ",enrollmentNo:12024052017077,section:"O",rollNo:73,contactNo:8293187299,password:"avin73O",id:"RK20257077"},
{email:"guptaraaj0505@gmail.com",name:"Shreshta Raaj Gupta",enrollmentNo:12024052002147,section:"I",rollNo:75,contactNo:9038312273,password:"shre75I",id:"RK20252147"},
{email:"anuragdeb2005@gmail.com",name:"Anurag Deb",enrollmentNo:12024052019001,section:"K",rollNo:68,contactNo:8697760025,password:"anur68K",id:"RK20259001"},
{email:"prithvirajbanik900@gmail.com",name:"Prithvi Raj Banik",enrollmentNo:12024052019013,section:"K",rollNo:79,contactNo:7003054255,password:"prit79K",id:"RK20259013"},
{email:"sangramkpatra03@gmail.com",name:"Sangram Keshari Patra",enrollmentNo:12024052017005,section:"K",rollNo:49,contactNo:8240028962,password:"sang49K",id:"RK20257005"},
{email:"thedebapriyamondal@gmail.com",name:"Debapriya Mondal",enrollmentNo:12024052017042,section:"K",rollNo:48,contactNo:7003579519,password:"deba48K",id:"RK20257042"},
{email:"sani14316sj@gmail.com",name:"Samiran Jana ",enrollmentNo:12024052016074,section:"H",rollNo:50,contactNo:7029255806,password:"sami50H",id:"RK20256074"},
{email:"mayankchoubey0408@gmail.com",name:"MAYANK CHOUBEY ",enrollmentNo:12024052003127,section:"B",rollNo:78,contactNo:9775661856,password:"maya78B",id:"RK20253127"},
  ]
  
  const loginForm = document.getElementById("login-form")
  const dashboard = document.getElementById("dashboard")
  const authForm = document.getElementById("auth-form")
  const themeToggle = document.getElementById("theme-toggle")
  
  authForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const userId = document.getElementById("user-id").value
    const password = document.getElementById("password").value
  
    const user = users.find((u) => u.id === userId && u.password === password)
  
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
  
    document.getElementById("user-name").textContent = user.name
    document.getElementById("enrollment-no").textContent = user.enrollmentNo
    document.getElementById("section").textContent = user.section
    document.getElementById("roll-no").textContent = user.rollNo
    document.getElementById("email-id").textContent = user.email
    document.getElementById("contact-no").textContent = user.contactNo
  
    generateQRCode(user.id)
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
  
  